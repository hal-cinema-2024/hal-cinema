package controller

import (
	"errors"

	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/hal-cinema-2024/backend/pkg/log"
	"github.com/labstack/echo/v4"
)

type GetTheaterSeatsRequest struct {
	OrderID string `param:"orderId"`
}

func (r GetTheaterSeatsRequest) Validate() error {
	if r.OrderID == "" {
		return errors.New("orderId is required")
	}
	return nil
}

type GetTheaterSeatsResponse struct {
	OrderID string              `json:"orderId"`
	Seats   map[string][]string `json:"seats"`
}

func GetTheaterSeats(i *interactor.TheaterSeatInteractor) func(c echo.Context) error {
	return func(c echo.Context) error {
		ctx := c.Request().Context()
		var request GetTheaterSeatsRequest
		if err := c.Bind(&request); err != nil {
			log.Warn(ctx, "failed to bind request", "error", err)
			return err
		}
		if err := request.Validate(); err != nil {
			log.Warn(ctx, "invalid request", "error", err)
			return err
		}

		response, err := i.GetAvailableTheaterSeats(ctx, request.OrderID)
		if err != nil {
			log.Warn(ctx, "failed to get theater seats", "error", err)
			return err
		}

		return c.JSON(200, GetTheaterSeatsResponse{
			OrderID: request.OrderID,
			Seats:   response,
		})
	}
}
