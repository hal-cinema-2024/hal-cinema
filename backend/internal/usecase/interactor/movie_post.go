package interactor

import (
	"context"
	"io"
	"mime/multipart"
	"time"

	"github.com/google/uuid"
	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type CreateMovie struct {
	Name        string
	Director    string
	Summary     string
	Thumbnail   *multipart.FileHeader
	Link        string
	Term        int32
	ReleaseDate time.Time
	EndDate     time.Time
	MovieImage  []*multipart.FileHeader
}

func (mi *MovieInteractor) CreateMovie(ctx context.Context, movie CreateMovie) (string, error) {
	var imagePaths []string

	uid, err := uuid.NewV7()
	if err != nil {
		return "", err
	}

	// 画像の保存
	src, err := movie.Thumbnail.Open()
	if err != nil {
		return "", err
	}
	defer src.Close()
	data, err := io.ReadAll(src)
	if err != nil {
		return "", err
	}
	thumbnailPath, err := mi.cloudStorage.UploadBlob(ctx, movie.Thumbnail.Filename, data)
	if err != nil {
		return "", err
	}

	// 非同期処理で画像を保存
	imagePathsChan := make(chan string, len(movie.MovieImage))
	errChan := make(chan error, len(movie.MovieImage))

	for _, image := range movie.MovieImage {
		go func(image *multipart.FileHeader) {
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

	for i := 0; i < len(movie.MovieImage); i++ {
		select {
		case imagePath := <-imagePathsChan:
			imagePaths = append(imagePaths, imagePath)
		case err := <-errChan:
			return "", err
		}
	}

	movieID, err := mi.Repositories.CreateMovie(ctx, &model.Movie{
		MovieID:       uid.String(),
		Name:          movie.Name,
		Director:      movie.Director,
		Summary:       movie.Summary,
		ThumbnailPath: thumbnailPath,
		Link:          movie.Link,
		Term:          movie.Term,
		ReleaseDate:   movie.ReleaseDate,
		EndDate:       movie.EndDate,
	}, imagePaths)
	if err != nil {
		return "", err
	}

	return movieID, nil
}
