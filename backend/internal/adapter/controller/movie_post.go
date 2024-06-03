package controller

import (
	"mime/multipart"
	"time"

	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/labstack/echo/v4"
)

type CreateMovieRequest struct {
	Name        string                `json:"movieName"`
	Director    string                `json:"director"`
	Summary     string                `json:"summary"`
	Thumbnail   *multipart.FileHeader `json:"thumbnail"`
	Link        string                `json:"link"`
	Term        int32                 `json:"term"`
	ReleaseDate time.Time             `json:"releaseDate"`
	EndDate     time.Time             `json:"endDate"`
	MovieImage  *multipart.FileHeader `json:"movieImage"`
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
		var thumbnail *multipart.FileHeader

		imageFiles, ok := form.File["thumbnail"]
		if !ok {
			thumbnail = nil
		} else {
			thumbnail = imageFiles[0]
		}

		movieImageFiles, ok := form.File["movieImage"]

		movieID, err := mi.CreateMovie(ctx.Request().Context(), interactor.CreateMovie{
			Name:        req.Name,
			Director:    req.Director,
			Summary:     req.Summary,
			Thumbnail:   thumbnail,
			Link:        req.Link,
			Term:        req.Term,
			ReleaseDate: req.ReleaseDate,
			EndDate:     req.EndDate,
			MovieImage:  movieImageFiles,
		})
		if err != nil {
			return err
		}

		return ctx.JSON(200, CreateMovieResponse{
			MovieID: movieID,
		})
	}
}
