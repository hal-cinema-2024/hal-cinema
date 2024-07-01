package controller

import (
	"fmt"

	"mime/multipart"

	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/hal-cinema-2024/backend/pkg/log"
	"github.com/labstack/echo/v4"
)

type UpdateMovieRequest struct {
	MovieID          string                  `param:"movie_id" validate:"required"`
	Name             string                  `form:"movieName" validate:"required"`
	Director         string                  `form:"director" validate:"required"`
	Summary          string                  `form:"summary" validate:"required"`
	Thumbnail        *multipart.FileHeader   `form:"thumbnail" validate:"required"`
	Link             string                  `form:"link" validate:"required"`
	Term             int32                   `form:"term" validate:"required"`
	ReleaseDate      string                  `form:"releaseDate" validate:"required"`
	EndDate          string                  `form:"endDate" validate:"required"`
	DeleteMovieImage []string                `form:"deleteMovieImage"`
	MovieImage       []*multipart.FileHeader `form:"movieImage"`
}

type UpdateMovieResponse struct {
	MovieID string `json:"movieId"`
}

func (r *UpdateMovieRequest) Validate() error {
	if r.MovieID == "" {
		return fmt.Errorf("movieId is required")
	}

	return nil
}

func UpdateMovie(mi *interactor.MovieInteractor) func(ctx echo.Context) error {
	return func(ctx echo.Context) error {
		var req UpdateMovieRequest
		if err := ctx.Bind(&req); err != nil {
			return err
		}

		if err := req.Validate(); err != nil {
			log.Error(ctx.Request().Context(), "movieId is required")
			return echo.ErrBadRequest
		}
		form, err := ctx.MultipartForm()
		if err != nil {
			return echo.ErrBadRequest
		}
		var thumbnail *multipart.FileHeader

		imageFiles, ok := form.File["thumbnail"]
		if !ok {
			return echo.ErrBadRequest
		} else {
			thumbnail = imageFiles[0]
		}

		releaseDate, err := str2time(req.ReleaseDate)
		if err != nil {
			log.Error(ctx.Request().Context(), "releaseDate is invalid")
			return echo.ErrBadRequest
		}
		endDate, err := str2time(req.EndDate)
		if err != nil {
			log.Error(ctx.Request().Context(), "endDate is invalid")
			return echo.ErrBadRequest
		}
		movieImageFiles, ok := form.File["movieImage"]
		if !ok {
			log.Info(ctx.Request().Context(), "movieImage is not found")
		}

		err = mi.UpdateMovie(ctx.Request().Context(), interactor.UpdateMovie{
			MovieID:          req.MovieID,
			Name:             req.Name,
			Director:         req.Director,
			Summary:          req.Summary,
			Thumbnail:        thumbnail,
			Link:             req.Link,
			Term:             req.Term,
			ReleaseDate:      releaseDate,
			EndDate:          endDate,
			DeleteMovieImage: req.DeleteMovieImage,
			MovieImage:       movieImageFiles,
		})
		if err != nil {
			return err
		}

		return ctx.JSON(200, UpdateMovieResponse{
			MovieID: req.MovieID,
		})
	}
}
