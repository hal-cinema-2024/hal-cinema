package controller

import (
	"fmt"

	"github.com/hal-cinema-2024/backend/internal/framework/hcontext"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/hal-cinema-2024/backend/pkg/log"
	"github.com/labstack/echo/v4"
)

type GetOrderRequest struct {
	OrderID string `param:"orderId"`
}

func (r GetOrderRequest) Validate() error {
	if r.OrderID == "" {
		return fmt.Errorf("order id is required")
	}

	return nil
}

type GetOrderResponse struct {
	*interactor.GetOrderResult
}

func GetOrder(i *interactor.OrderInteractor) MustLogin {
	return func(c echo.Context) error {
		ctx := c.Request().Context()
		var reqQuery GetOrderRequest
		if err := c.Bind(&reqQuery); err != nil {
			log.Warn(ctx, "failed to bind requst", "error", err)
			return echo.ErrBadRequest
		}

		if err := reqQuery.Validate(); err != nil {
			log.Warn(ctx, "invalid request", "error", err)
			return echo.ErrBadRequest
		}

		order, err := i.GetOrder(ctx, interactor.GetOrderParam{
			OrderID: reqQuery.OrderID,
			UserID:  c.Get(hcontext.UserID.String()).(string),
		})
		if err != nil {
			log.Warn(ctx, "failed to get order", "error", err)
			return echo.ErrInternalServerError
		}

		return c.JSON(200, GetOrderResponse{order})
	}
}
