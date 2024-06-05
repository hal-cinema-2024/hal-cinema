package controller

import (
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/labstack/echo/v4"
)

type GetUserRequest struct {
	UserID string `param:"user_id"`
}

type GetUserResponse struct {
	UserID           string `json:"userId"`
	Icon             string `json:"icon"`
	FirstName        string `json:"firstName"`
	LastName         string `json:"lastName"`
	FirstNameReading string `json:"firstNameReading"`
	LastNameReading  string `json:"lastNameReading"`
	Gender           int    `json:"gender"`
}

func GetUser(ui *interactor.UserInteractor) func(ctx echo.Context) error {
	return func(ctx echo.Context) error {
		var req GetUserRequest
		if err := ctx.Bind(&req); err != nil {
			return err
		}

		user, err := ui.GetUser(ctx.Request().Context(), req.UserID)
		if err != nil {
			return err
		}

		return ctx.JSON(200, GetUserResponse{
			UserID:           user.UserID,
			Icon:             user.IconPath,
			FirstName:        user.FirstName,
			LastName:         user.LastName,
			FirstNameReading: user.FirstNameReading,
			LastNameReading:  user.LastNameReading,
			Gender:           int(user.Gender),
		})
	}
}

type GetUsersRequest struct {
	PageSize int `query:"pageSize"`
	PageID   int `query:"pageId"`
}

func (r GetUsersRequest) Validate() error {
	if r.PageSize <= 0 {
		return echo.ErrBadRequest
	}

	if r.PageID < 0 {
		return echo.ErrBadRequest
	}

	return nil
}

type GetUsersResponse struct {
	Users []GetUserResponse `json:"users"`
}

func GetUsers(ui *interactor.UserInteractor) AdminHandler {
	return func(ctx echo.Context) error {
		var req GetUsersRequest
		if err := ctx.Bind(&req); err != nil {
			return err
		}

		if err := req.Validate(); err != nil {
			return err
		}

		users, err := ui.GetUsers(ctx.Request().Context(), req.PageSize, (req.PageID-1)*req.PageSize)
		if err != nil {
			return err
		}

		var usersResponse []GetUserResponse
		for _, user := range users {
			usersResponse = append(usersResponse, GetUserResponse{
				UserID:           user.UserID,
				Icon:             user.IconPath,
				FirstName:        user.FirstName,
				LastName:         user.LastName,
				FirstNameReading: user.FirstNameReading,
				LastNameReading:  user.LastNameReading,
				Gender:           int(user.Gender),
			})
		}

		return ctx.JSON(200, GetUsersResponse{
			Users: usersResponse,
		})
	}
}
