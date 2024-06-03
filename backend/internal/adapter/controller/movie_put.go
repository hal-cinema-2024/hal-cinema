package controller

import (
	"time"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/labstack/echo/v4"
)

type UpdateMovieRequest struct {
	MovieID     string    `json:"movie_id"`
	Name        string    `json:"name"`
	Director    string    `json:"director"`
	Summary     string    `json:"summary"`
	Thumbnail   string    `json:"thumbnail"`
	Link        string    `json:"link"`
	Term        int32     `json:"term"`
	ReleaseDate time.Time `json:"release_date"`
	EndDate     time.Time `json:"end_date"`
	IsDelete    bool      `json:"is_delete"`
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
