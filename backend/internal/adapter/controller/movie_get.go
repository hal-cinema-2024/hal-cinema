package controller

import (
	"fmt"
	"net/http"
	"time"

	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/hal-cinema-2024/backend/pkg/log"
	"github.com/labstack/echo/v4"
)

type GetMoviesRequest struct {
	PageSize int `query:"pageSize"`
	PageID   int `query:"pageId"`
}

func (req GetMoviesRequest) Validate() error {
	if req.PageSize == 0 {
		return fmt.Errorf("pageSize is required")
	}
	if req.PageID == 0 {
		return fmt.Errorf("pageId is required")
	}
	return nil
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
			log.Warn(ctx.Request().Context(), "failed to bind request", "error", err)
			return echo.ErrBadRequest
		}

		if err := req.Validate(); err != nil {
			log.Warn(ctx.Request().Context(), fmt.Sprintf("failed to validate request :%v", err))
			return echo.ErrBadRequest
		}

		movie, imagePaths, err := mi.GetMovie(ctx.Request().Context(), req.MovieID)
		if err != nil {
			log.Warn(ctx.Request().Context(), "failed to bind request", "error", err)
			return echo.ErrInternalServerError
		}

		return ctx.JSON(http.StatusOK, GetMovieResponse{
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
			log.Warn(ctx.Request().Context(), "failed to bind request", "error", err)
			return echo.ErrBadRequest
		}

		if err := req.Validate(); err != nil {
			log.Warn(ctx.Request().Context(), "failed to validate", "error", err)
			return echo.ErrBadRequest
		}

		movies, err := mi.GetMovies(ctx.Request().Context(), req.PageSize, req.PageID)
		if err != nil {
			log.Warn(ctx.Request().Context(), "failed to get movies", "error", err)
			return echo.ErrInternalServerError
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

		return ctx.JSON(http.StatusOK, res)
	}
}
