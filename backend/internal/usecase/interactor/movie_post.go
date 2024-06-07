package interactor

import (
	"context"
	"io"
	"log"
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
	// 画像の保存

	uid, err := uuid.NewV7()
	if err != nil {
		return "", err
	}

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

	for _, image := range movie.MovieImage {
		src, err := image.Open()
		if err != nil {
			return "", err
		}
		defer src.Close()
		data, err := io.ReadAll(src)
		if err != nil {
			return "", err
		}
		log.Println("movieImageFile: ", image.Filename)
		imagePath, err := mi.cloudStorage.UploadBlob(ctx, image.Filename, data)
		if err != nil {
			return "", err
		}
		imagePaths = append(imagePaths, imagePath)
	}
	log.Println(imagePaths)
	log.Println(movie.EndDate)

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
