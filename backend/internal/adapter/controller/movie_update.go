package controller

import (
	"time"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/labstack/echo/v4"
)

type UpdateMovieRequest struct {
	MovieID     string    `form:"movie_id"`
	Name        string    `form:"name"`
	Director    string    `form:"director"`
	Summary     string    `form:"summary"`
	Thumbnail   string    `form:"thumbnail"`
	Link        string    `form:"link"`
	Term        int32     `form:"term"`
	ReleaseDate time.Time `form:"release_date"`
	EndDate     time.Time `form:"end_date"`
	IsDelete    bool      `form:"is_delete"`
}

type UpdateMovieResponse struct {
	MovieID string `json:"movie_id"`
}

func UpdateMovie(mi *interactor.MovieInteractor) func(ctx echo.Context) error {
	return func(ctx echo.Context) error {
		var req UpdateMovieRequest
		if err := ctx.Bind(&req); err != nil {
			return err
		}

		movie_id, err := mi.UpdateMovie(ctx.Request().Context(), &model.Movie{
			MovieID:       req.MovieID,
			Name:          req.Name,
			Director:      req.Director,
			Summary:       req.Summary,
			ThumbnailPath: req.Thumbnail,
			Link:          req.Link,
			Term:          req.Term,
			ReleaseDate:   req.ReleaseDate,
			EndDate:       req.EndDate,
			IsDelete:      req.IsDelete,
		})
		if err != nil {
			return err
		}

		return ctx.JSON(200, UpdateMovieResponse{
			MovieID: movie_id,
		})
	}
}
