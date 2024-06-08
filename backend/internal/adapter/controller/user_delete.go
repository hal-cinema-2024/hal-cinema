package controller

import (
	"fmt"

	"github.com/hal-cinema-2024/backend/internal/framework/herror"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/hal-cinema-2024/backend/pkg/log"
	"github.com/labstack/echo/v4"
)

type DeleteUserRequest struct {
	UserID string `param:"user_id"`
}

func (r *DeleteUserRequest) Validate() error {
	if r.UserID == "" {
		return fmt.Errorf("userId is required")
	}

	return nil
}

type DeleteUserResponse struct {
	UserID string `json:"userId"`
}

func DeleteUser(
	ui *interactor.UserInteractor,
) func(ctx echo.Context) error {
	return func(ctx echo.Context) error {
		var req DeleteUserRequest
		if err := ctx.Bind(&req); err != nil {
			log.Error(ctx.Request().Context(), "failed to bind request", err)
			return echo.ErrBadRequest
		}

		if err := req.Validate(); err != nil {
			log.Error(ctx.Request().Context(), "failed to validate request", err)
			return echo.ErrBadRequest
		}

		err := ui.DeleteUser(ctx.Request().Context(), req.UserID)

		if err != nil {
			switch err {
			case herror.ErrNoChange:
				log.Info(ctx.Request().Context(), "failed to update user", err)
				return ctx.JSON(200, DeleteUserResponse(req))
			case herror.ErrResourceNotFound:
				log.Error(ctx.Request().Context(), "failed to update user", err)
				return echo.ErrBadRequest
			default:
				log.Error(ctx.Request().Context(), "failed to update user", err)
				return echo.ErrInternalServerError
			}
		}
		return ctx.JSON(200, DeleteUserResponse(req))
	}
}
