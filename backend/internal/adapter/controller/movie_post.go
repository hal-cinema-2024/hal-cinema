package controller

import (
	"mime/multipart"
	"time"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/labstack/echo/v4"
)

type CreateMovieRequest struct {
	Name        string    `json:"name"`
	Director    string    `json:"director"`
	Summary     string    `json:"summary"`
	Thumbnail   byte      `json:"thumbnail"`
	Link        string    `json:"link"`
	Term        int32     `json:"term"`
	ReleaseDate time.Time `json:"release_date"`
	EndDate     time.Time `json:"end_date"`
}

type CreateMovieResponse struct {
	MovieID string `json:"movie_id"`
}

func CreateMovie(mi *interactor.MovieInteractor) func(ctx echo.Context) error {
	return func(ctx echo.Context) error {
		var req CreateMovieRequest
		if err := ctx.Bind(&req); err != nil {
			return err
		}

		form, err := ctx.MultipartForm()
		if err != nil {
			return echo.ErrBadRequest
		}
		var image *multipart.FileHeader

		imageFiles, ok := form.File["image"]
		if !ok {
			image = nil
		} else {
			image = imageFiles[0]
		}

		movieID, err := mi.CreateMovie(ctx.Request().Context(), &model.Movie{
			Name:          req.Name,
			Director:      req.Director,
			Summary:       req.Summary,
			ThumbnailPath: image.Filename, //?
			Link:          req.Link,
			Term:          req.Term,
			ReleaseDate:   req.ReleaseDate,
			EndDate:       req.EndDate,
		})
		if err != nil {
			return err
		}

		return ctx.JSON(200, CreateMovieResponse{
			MovieID: movieID,
		})
	}
}
