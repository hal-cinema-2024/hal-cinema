package controller

import (
	"errors"
	"net/http"

	"github.com/hal-cinema-2024/backend/pkg/log"
	"github.com/labstack/echo/v4"
)

type GetScheduleRequest struct {
	StartTime string `form:"startTime"`
}

func (r GetScheduleRequest) Validate() error {
	_, err := str2time(r.StartTime)
	if err != nil {
		return errors.Join(err, errors.New("invalid start time"))
	}

	return nil
}

type Schedule struct {
	ScreenID    string `json:"screenId"`
	StartTime   string `json:"startTime"`
	EndTime     string `json:"endTime"`
	IsAvailable bool   `json:"isAvailable"`
}

type GetScheduleResponse struct {
	Schedule map[string]Schedule `json:"schedule"`
}

func GetSchedule() func(ctx echo.Context) error {
	return func(c echo.Context) error {
		ctx := c.Request().Context()
		var ReqQuery GetScheduleRequest
		if err := c.Bind(&ReqQuery); err != nil {
			log.Warn(ctx, "failed to bind requst", "error", err)
			return echo.ErrBadRequest
		}

		if err := ReqQuery.Validate(); err != nil {
			log.Warn(ctx, "failed to validate request", "error", err)
			return echo.ErrBadRequest
		}

		return c.JSON(http.StatusOK, nil)
	}
}
