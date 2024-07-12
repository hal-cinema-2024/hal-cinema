package interactor

import (
	"context"
	"io"
	"mime/multipart"
	"sync"
	"time"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type UpdateMovie struct {
	MovieID          string
	Name             string
	Director         string
	Summary          string
	Thumbnail        *multipart.FileHeader
	Link             string
	Term             int32
	ReleaseDate      time.Time
	EndDate          time.Time
	DeleteMovieImage []string
	MovieImage       []*multipart.FileHeader
}

func (mi *MovieInteractor) UpdateMovie(ctx context.Context, movie UpdateMovie) error {
	var imagePaths []string
	var thumbnailPath string
	// サムネイル画像の保存
	if movie.Thumbnail != nil {
		src, err := movie.Thumbnail.Open()
		if err != nil {
			return err
		}
		defer src.Close()
		data, err := io.ReadAll(src)
		if err != nil {
			return err
		}
		thumbnailPath, err = mi.cloudStorage.UploadBlob(ctx, movie.Thumbnail.Filename, data)
		if err != nil {
			return err
		}
	}

	// 非同期処理で画像を保存
	var wg sync.WaitGroup
	imagePathsChan := make(chan string, len(movie.MovieImage))
	errChan := make(chan error, len(movie.MovieImage)+len(movie.DeleteMovieImage))

	// 指定の画像を削除
	for _, imagePath := range movie.DeleteMovieImage {
		wg.Add(1)
		go func(imagePath string) {
			defer wg.Done()
			err := mi.cloudStorage.DeleteBlob(ctx, imagePath)
			if err != nil {
				errChan <- err
				return
			}
		}(imagePath)
	}

	for _, image := range movie.MovieImage {
		wg.Add(1)
		go func(image *multipart.FileHeader) {
			defer wg.Done()
			src, err := image.Open()
			if err != nil {
				errChan <- err
				return
			}
			defer src.Close()
			data, err := io.ReadAll(src)
			if err != nil {
				errChan <- err
				return
			}
			imagePath, err := mi.cloudStorage.UploadBlob(ctx, image.Filename, data)
			if err != nil {
				errChan <- err
				return
			}
			imagePathsChan <- imagePath
		}(image)
	}

	for err := range errChan {
		return err
	}

	for imagePath := range imagePathsChan {
		imagePaths = append(imagePaths, imagePath)
	}

	wg.Wait()
	close(imagePathsChan)
	close(errChan)

	err := mi.Repositories.UpdateMovie(ctx, &model.Movie{
		MovieID:       movie.MovieID,
		Name:          movie.Name,
		Director:      movie.Director,
		Summary:       movie.Summary,
		ThumbnailPath: thumbnailPath,
		Link:          movie.Link,
		Term:          movie.Term,
		ReleaseDate:   movie.ReleaseDate,
		EndDate:       movie.EndDate,
	}, imagePaths, movie.DeleteMovieImage)
	if err != nil {
		return err
	}

	return nil
}
