package controller

import (
	"fmt"

	"github.com/hal-cinema-2024/backend/internal/framework/herror"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/hal-cinema-2024/backend/pkg/log"
	"github.com/labstack/echo/v4"
)

type UpdateUserRequest struct {
	UserID           string `param:"user_id"`
	FirstName        string `json:"firstName"`
	LastName         string `json:"lastName"`
	FirstNameReading string `json:"firstNameReading"`
	LastNameReading  string `json:"lastNameReading"`
	Gender           int    `json:"gender"`
	Age              int    `json:"age"`
}

func (r *UpdateUserRequest) Validate() error {
	if r.UserID == "" {
		return fmt.Errorf("userId is required")
	}

	return nil
}

type UpdateUserResponse struct {
	UserID string `json:"userId"`
}

func UpdateUser(
	ui *interactor.UserInteractor,
) func(ctx echo.Context) error {
	return func(ctx echo.Context) error {
		var req UpdateUserRequest
		if err := ctx.Bind(&req); err != nil {
			log.Error(ctx.Request().Context(), "failed to bind request", err)
			return echo.ErrBadRequest
		}

		if err := req.Validate(); err != nil {
			log.Error(ctx.Request().Context(), "failed to validate request", err)
			return echo.ErrBadRequest
		}

		user, err := ui.UpdateUser(ctx.Request().Context(), interactor.UpdateUserParam{
			UserID:        req.UserID,
			FirstName:     req.FirstName,
			LastName:      req.LastName,
			FirstNameKana: req.FirstNameReading,
			LastNameKana:  req.LastNameReading,
			Gender:        req.Gender,
			Age:           req.Age,
		})

		if err != nil {
			switch err {
			case herror.ErrNoChange:
				log.Info(ctx.Request().Context(), "failed to update user", err)
				return ctx.JSON(200, UpdateUserResponse{
					UserID: user.UserID,
				})
			case herror.ErrResourceNotFound:
				log.Error(ctx.Request().Context(), "failed to update user", err)
				return echo.ErrBadRequest
			default:
				log.Error(ctx.Request().Context(), "failed to update user", err)
				return echo.ErrInternalServerError
			}
		}
		return nil
	}
}
