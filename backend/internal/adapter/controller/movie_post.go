package controller

import (
	"mime/multipart"
	"time"

	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/hal-cinema-2024/backend/pkg/log"
	"github.com/labstack/echo/v4"
)

type CreateMovieRequest struct {
	Name        string                  `form:"movieName" validate:"required"`
	Director    string                  `form:"director" validate:"required"`
	Summary     string                  `form:"summary" validate:"required"`
	Thumbnail   *multipart.FileHeader   `form:"thumbnail" validate:"required"`
	Link        string                  `form:"link" validate:"required"`
	Term        int32                   `form:"term" validate:"required"`
	ReleaseDate string                  `form:"releaseDate" validate:"required"`
	EndDate     string                  `form:"endDate" validate:"required"`
	MovieImage  []*multipart.FileHeader `form:"movieImage"`
}

type CreateMovieResponse struct {
	MovieID string `json:"movieId"`
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
			return echo.ErrBadRequest
		} else {
			thumbnail = imageFiles[0]
		}

		releaseDate := str2time(req.ReleaseDate)
		endDate := str2time(req.EndDate)
		movieImageFiles, ok := form.File["movieImage"]
		if !ok {
			log.Info(ctx.Request().Context(), "movieImageFiles is nil")
		}

		movieID, err := mi.CreateMovie(ctx.Request().Context(), interactor.CreateMovie{
			Name:        req.Name,
			Director:    req.Director,
			Summary:     req.Summary,
			Thumbnail:   thumbnail,
			Link:        req.Link,
			Term:        req.Term,
			ReleaseDate: releaseDate,
			EndDate:     endDate,
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

func str2time(t string) time.Time {
	// YYYY-MM-DDTHH:MM:SSZZZZの形式で渡される文字列tをtime.Time型に変換して返す
	parsedTime, _ := time.Parse("2006-01-02", t)
	return parsedTime
}
