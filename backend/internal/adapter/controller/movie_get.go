package controller

import (
	"fmt"
	"time"

	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/hal-cinema-2024/backend/pkg/log"
	"github.com/labstack/echo/v4"
)

type GetMoviesRequest struct {
	PageSize int `query:"pageSize" validate:"required"`
	PageID   int `query:"pageId" validate:"required"`
}

type GetMovieRequest struct {
	MovieID string `param:"movie_id" validate:"required"`
}

func (r GetMovieRequest) Validate() error {
	if r.MovieID == "" {
		return fmt.Errorf("movie_id is required")
	}

	return nil
}

type GetMoviesResponse struct {
	MovieID     string    `json:"movieId"`
	MovieName   string    `json:"movieName"`
	Director    string    `json:"director"`
	Summary     string    `json:"summary"`
	Thumbnail   string    `json:"thumbnail"`
	Link        string    `json:"link"`
	Term        int32     `json:"term"`
	ReleaseDate time.Time `json:"releaseDate"`
	EndDate     time.Time `json:"endDate"`
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
	MovieImage  []string  `json:"movieImage"`
}

func GetMovie(mi *interactor.MovieInteractor) func(ctx echo.Context) error {
	return func(ctx echo.Context) error {
		var req GetMovieRequest
		if err := ctx.Bind(&req); err != nil {
			return err
		}

		if err := req.Validate(); err != nil {
			log.Error(ctx.Request().Context(), fmt.Sprintf("failed to validate request :%v", err))
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
			MovieImage:  imagePaths,
		})
	}
}

func GetMovies(mi *interactor.MovieInteractor) func(ctx echo.Context) error {
	return func(ctx echo.Context) error {
		var req GetMoviesRequest
		if err := ctx.Bind(&req); err != nil {
			return err
		}
		movies, err := mi.GetMovies(ctx.Request().Context(), req.PageSize, req.PageID)
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
			})
		}

		return ctx.JSON(200, res)
	}
}
