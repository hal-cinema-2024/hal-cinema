package controller

import (
	"time"

	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/labstack/echo/v4"
)

type GetMovieRequest struct {
	MovieID string `json:"movie_id" param:"movie_id"`
}

type GetMovieResponse struct {
	MovieID     string    `json:"movieId"`
	MovieName   string    `json:"movieName"`
	Director    string    `json:"director"`
	Summary     string    `json:"summary"`
	Thumbnail   string    `json:"thumbnail"`
	Link        string    `json:"link"`
	Term        int32     `json:"term"`
	ReleaseDate time.Time `json:"releaseDate"`
	EndDate     time.Time `json:"endDate"`
	IsDelete    bool      `json:"isDelete"`
	MovieImage  []string  `json:"movieImage"`
}

func GetMovie(mi *interactor.MovieInteractor) func(ctx echo.Context) error {
	return func(ctx echo.Context) error {
		var req GetMovieRequest
		if err := ctx.Bind(&req); err != nil {
			return err
		}

		movie, imagePaths, err := mi.GetMovie(ctx.Request().Context(), req.MovieID)
		if err != nil {
			return err
		}

		return ctx.JSON(200, GetMovieResponse{
			MovieID:     movie.MovieID,
			MovieName:   movie.Name,
			Director:    movie.Director,
			Summary:     movie.Summary,
			Thumbnail:   movie.ThumbnailPath,
			Link:        movie.Link,
			Term:        movie.Term,
			ReleaseDate: movie.ReleaseDate,
			EndDate:     movie.EndDate,
			IsDelete:    movie.IsDelete,
			MovieImage:  imagePaths,
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
				MovieName:   movie.Name,
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

		return ctx.JSON(200, res)
	}
}
