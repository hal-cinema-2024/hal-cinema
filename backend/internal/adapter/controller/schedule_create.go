package controller

import (
	"errors"
	"net/http"

	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/hal-cinema-2024/backend/pkg/log"
	"github.com/labstack/echo/v4"
)

type CreateScheduleRequest struct {
	MovieID   string `json:"movieId"`
	TheaterID int32  `json:"theaterId"`
	StartTime string `json:"startTime"`
}

func (r CreateScheduleRequest) Validate() error {
	if r.MovieID == "" {
		return errors.New("movie id is required")
	}

	if r.TheaterID == 0 {
		return errors.New("theater id is required")
	}
	_, err := str2time(r.StartTime)
	if err != nil {
		return errors.Join(err, errors.New("invalid start time"))
	}

	return nil
}

type CreateScheduleResponse struct {
	ScheduleID string `json:"scheduleId"`
}

func CreateSchedule(i *interactor.ScheduleInteractor) func(ctx echo.Context) error {
	return func(c echo.Context) error {
		ctx := c.Request().Context()
		var reqBody CreateScheduleRequest
		if err := c.Bind(&reqBody); err != nil {
			log.Warn(ctx, "failed to bind requst", "error", err)
			return echo.ErrBadRequest
		}

		if err := reqBody.Validate(); err != nil {
			log.Warn(ctx, "failed to validate request", "error", err)
			return echo.ErrBadRequest
		}

		startTime, err := str2time(reqBody.StartTime)
		if err != nil {
			log.Warn(ctx, "failed to parse start time", "error", err)
			return echo.ErrBadRequest
		}

		result, err := i.CreateSchedule(ctx, interactor.CreateScheduleParam{
			MovieID:   reqBody.MovieID,
			TheaterID: reqBody.TheaterID,
			StartTime: startTime,
		})
		if err != nil {
			log.Warn(ctx, "failed to get schedule", "error", err)
			return echo.ErrInternalServerError
		}

		return c.JSON(http.StatusOK, CreateScheduleResponse{
			ScheduleID: result.ScheduleID,
		})
	}
}
