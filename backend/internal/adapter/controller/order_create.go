package controller

import (
	"net/http"

	"github.com/hal-cinema-2024/backend/internal/framework/hcontext"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/hal-cinema-2024/backend/pkg/log"
	"github.com/labstack/echo/v4"
)

type CreateOrderRequest struct {
	ScheduleID  string                  `json:"scheduleId"`
	SeatSelects []interactor.SeatSelect `json:"seatSelects"`
}

func (r CreateOrderRequest) Validate() error {
	if r.ScheduleID == "" {
		return echo.NewHTTPError(400, "scheduleId is required")
	}

	if len(r.SeatSelects) == 0 {
		return echo.NewHTTPError(400, "seatSelects is required")
	}

	return nil
}

type CreateOrderResponse struct {
	OrderID string `json:"orderId"`
}

func CreateOrder(i *interactor.OrderInteractor) MustLogin {
	return func(c echo.Context) error {
		var req CreateOrderRequest
		ctx := c.Request().Context()
		if err := c.Bind(&req); err != nil {
			log.Warn(ctx, "failed to bind request", err)
			return echo.ErrBadRequest
		}

		if err := req.Validate(); err != nil {
			log.Warn(ctx, "failed to validate", err)
			return echo.ErrBadRequest
		}

		orderID, err := i.CreateOrder(ctx, interactor.CreateOrderParam{
			ScheduleID:  req.ScheduleID,
			UserID:      c.Get(string(hcontext.UserID)).(string),
			SeatSelects: req.SeatSelects,
		})
		if err != nil {
			log.Warn(ctx, "failed to create order", err)
			return echo.ErrInternalServerError
		}

		return c.JSON(http.StatusOK, CreateOrderResponse{
			OrderID: orderID,
		})
	}
}
