package interactor

import (
	"context"
	"io"
	"mime/multipart"
	"time"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type CreateMovie struct {
	Name        string                  `json:"name"`
	Director    string                  `json:"director"`
	Summary     string                  `json:"summary"`
	Thumbnail   *multipart.FileHeader   `json:"thumbnail"`
	Link        string                  `json:"link"`
	Term        int32                   `json:"term"`
	ReleaseDate time.Time               `json:"release_date"`
	EndDate     time.Time               `json:"end_date"`
	MovieImage  []*multipart.FileHeader `json:"movie_image"`
}

func (mi *MovieInteractor) CreateMovie(ctx context.Context, movie CreateMovie) (string, error) {
	var imagePaths []string
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
		imagePath, err := mi.cloudStorage.UploadBlob(ctx, movie.Thumbnail.Filename, data)
		if err != nil {
			return "", err
		}
		imagePaths = append(imagePaths, imagePath)
	}
	movieID, err := mi.Repositories.CreateMovie(ctx, &model.Movie{
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
