package controller

import (
	"log"
	"mime/multipart"

	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/labstack/echo/v4"
)

type UpdateMovieRequest struct {
	MovieID     string                  `form:"movie_id"`
	Name        string                  `form:"movieName" validate:"required"`
	Director    string                  `form:"director" validate:"required"`
	Summary     string                  `form:"summary" validate:"required"`
	Thumbnail   *multipart.FileHeader   `form:"thumbnail" validate:"required"`
	Link        string                  `form:"link" validate:"required"`
	Term        int32                   `form:"term" validate:"required"`
	ReleaseDate string                  `form:"releaseDate" validate:"required"`
	EndDate     string                  `form:"endDate" validate:"required"`
	MovieImage  []*multipart.FileHeader `form:"movieImage"`
	IsDelete    bool                    `form:"isDelete"`
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

		releaseDate := str2time(req.ReleaseDate)
		endDate := str2time(req.EndDate)
		movieImageFiles, ok := form.File["movieImage"]
		if !ok {
			log.Println("movieImage is not found")
		}

		err = mi.UpdateMovie(ctx.Request().Context(), interactor.UpdateMovie{
			MovieID:     req.MovieID,
			Name:        req.Name,
			Director:    req.Director,
			Summary:     req.Summary,
			Thumbnail:   thumbnail,
			Link:        req.Link,
			Term:        req.Term,
			ReleaseDate: releaseDate,
			EndDate:     endDate,
			IsDelete:    req.IsDelete,
			MovieImage:  movieImageFiles,
		})
		if err != nil {
			return err
		}

		return ctx.JSON(200, UpdateMovieResponse{
			MovieID: req.MovieID,
		})
	}
}
