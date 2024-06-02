package controller

import (
	"time"

	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/labstack/echo/v4"
)

type GetMovieRequest struct {
	MovieID string `json:"movie_id"`
}

type GetMovieResponse struct {
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

func GetMovie(mi *interactor.MovieInteractor) func(ctx echo.Context) error {
	return func(ctx echo.Context) error {
		var req GetMovieRequest
		if err := ctx.Bind(&req); err != nil {
			return err
		}

		movie, err := mi.GetMovie(ctx.Request().Context(), req.MovieID)
		if err != nil {
			return err
		}

		return ctx.JSON(200, GetMovieResponse{
			MovieID:     movie.MovieID,
			Name:        movie.Name,
			Director:    movie.Director,
			Summary:     movie.Summary,
			Thumbnail:   movie.ThumbnailPath,
			Link:        movie.Link,
			Term:        movie.Term,
			ReleaseDate: movie.ReleaseDate,
			EndDate:     movie.EndDate,
			IsDelete:    movie.IsDelete,
		})
	}
}

func GetMovies(mi *interactor.MovieInteractor) func(ctx echo.Context) error {
	return func(ctx echo.Context) error {
		movies, err := mi.GetMovies(ctx.Request().Context())
		if err != nil {
			return err
		}

		res := make([]GetMovieResponse, 0, len(movies))
		for _, movie := range movies {
			res = append(res, GetMovieResponse{
				MovieID:     movie.MovieID,
				Name:        movie.Name,
				Director:    movie.Director,
				Summary:     movie.Summary,
				Thumbnail:   movie.ThumbnailPath,
				Link:        movie.Link,
				Term:        movie.Term,
				ReleaseDate: movie.ReleaseDate,
				IsDelete:    movie.IsDelete,
			})
		}

		return ctx.JSON(200, res)
	}
}
