package controller

import (
	"errors"
	"strings"

	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/hal-cinema-2024/backend/pkg/log"
	"github.com/labstack/echo/v4"
)

type UpdateTheaterSeatRequest struct {
	TheaterSeatID string `param:"theaterSeatId"`
	SeatName      string `json:"seatName"`
}

func (r UpdateTheaterSeatRequest) Validate() error {
	if r.TheaterSeatID == "" {
		return errors.New("theaterID is required")
	}

	if r.SeatName == "" {
		return errors.New("seatName is required")
	}

	seats := strings.Split(r.SeatName, ":")
	if len(seats) != 2 {
		return errors.New("invalid seat name")
	}

	return nil
}

type UpdateTheaterSeatResponse struct {
	TheaterSeatID string `json:"theaterSeatId"`
}

func UpdateTheaterSeat(i *interactor.TheaterSeatInteractor) func(c echo.Context) error {
	return func(c echo.Context) error {
		ctx := c.Request().Context()
		var req UpdateTheaterSeatRequest
		if err := c.Bind(&req); err != nil {
			log.Warn(ctx, "failed to bind request", "error", err)
			return err
		}

		if err := req.Validate(); err != nil {
			log.Warn(ctx, "invalid request", "error", err)
			return err
		}

		if err := i.UpdateTheatersSeat(ctx, req.TheaterSeatID, req.SeatName); err != nil {
			log.Warn(ctx, "failed to update theater seat", "error", err)
			return err
		}

		return c.JSON(200, UpdateTheaterSeatResponse{
			TheaterSeatID: req.TheaterSeatID,
		})
	}
}
