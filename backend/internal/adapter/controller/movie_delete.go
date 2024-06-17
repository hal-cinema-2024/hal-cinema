package controller

import (
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/labstack/echo/v4"
)

type DeleteMovieRequest struct {
	MovieID string `form:"movie_id" param:"movie_id" validate:"required"`
}

type DeleteMovieResponse struct {
	MovieID string `json:"movie_id"`
}

func DeleteMovie(mi *interactor.MovieInteractor) func(ctx echo.Context) error {
	return func(ctx echo.Context) error {
		var req DeleteMovieRequest
		if err := ctx.Bind(&req); err != nil {
			return err
		}

		movieID, err := mi.DeleteMovie(ctx.Request().Context(), req.MovieID)
		if err != nil {
			return err
		}

		return ctx.JSON(200, DeleteMovieResponse{
			MovieID: movieID,
		})
	}
}
