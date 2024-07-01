package controller

import (
	"errors"
	"net/http"
	"time"

	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/hal-cinema-2024/backend/pkg/log"
	"github.com/labstack/echo/v4"
)

type GetScheduleRequest struct {
	StartTime string `query:"startTime"`
	MovieID   string `query:"movieId"`
}

func (r GetScheduleRequest) Validate() error {
	_, err := str2date(r.StartTime)
	if err != nil {
		return errors.Join(err, errors.New("invalid start time"))
	}

	return nil
}

type GetScheduleResponse struct {
	SelectedDate   time.Time                      `json:"selectedDate"`
	SelectedMovies string                         `json:"selectedMovies"`
	Schedules      []interactor.GetScheduleResult `json:"schedules"`
}

func GetSchedules(i *interactor.ScheduleInteractor) func(ctx echo.Context) error {
	return func(c echo.Context) error {
		ctx := c.Request().Context()
		var reqQuery GetScheduleRequest
		if err := c.Bind(&reqQuery); err != nil {
			log.Warn(ctx, "failed to bind requst", "error", err)
			return echo.ErrBadRequest
		}

		if err := reqQuery.Validate(); err != nil {
			log.Warn(ctx, "failed to validate request", "error", err)
			return echo.ErrBadRequest
		}

		startTime, err := str2date(reqQuery.StartTime)
		if err != nil {
			log.Warn(ctx, "failed to parse start time", "error", err)
			return echo.ErrBadRequest
		}

		var movieIDs []string
		if reqQuery.MovieID != "" {
			movieIDs = []string{reqQuery.MovieID}
		}

		result, err := i.GetSchedules(ctx, startTime, movieIDs...)
		if err != nil {
			log.Warn(ctx, "failed to get schedule", "error", err)
			return echo.ErrInternalServerError
		}

		return c.JSON(http.StatusOK, GetScheduleResponse{
			SelectedDate:   startTime,
			SelectedMovies: reqQuery.MovieID,
			Schedules:      result,
		})
	}
}
