package controller

import (
	"net/http"

	"github.com/hal-cinema-2024/backend/pkg/log"

	"github.com/hal-cinema-2024/backend/internal/framework/cookie"
	"github.com/hal-cinema-2024/backend/internal/framework/hcontext"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/labstack/echo/v4"
)

type LoginRequest struct {
	AuthorizationCode string `json:"code"`
}

type LoginResponse struct {
	UserID string `json:"userId"`
}

func GoogleLogin(
	googleLogin *interactor.GoogleLogin,
	cookieSetter *cookie.CookieSetter,
) func(ctx echo.Context) error {
	return func(ctx echo.Context) error {
		var reqBody LoginRequest
		if err := ctx.Bind(&reqBody); err != nil {
			log.Error(ctx.Request().Context(), "[ERROR] bad request", err)
			return echo.ErrBadRequest
		}

		userAgent, ok := ctx.Get(hcontext.UserAgent.String()).(string)
		if !ok {
			log.Error(ctx.Request().Context(), "[ERROR] user agent not found")
			return echo.ErrInternalServerError
		}

		userInfo, err := googleLogin.Login(ctx.Request().Context(), reqBody.AuthorizationCode, userAgent)
		if err != nil {
			log.Error(ctx.Request().Context(), "[ERROR] ", err)
			return echo.ErrInternalServerError
		}

		cookieSetter.CreateCookieSetter(ctx).SetCookieValue(string(cookie.SessionID), userInfo.SessionID)

		return ctx.JSON(http.StatusOK, &LoginResponse{
			UserID: userInfo.UserID,
		})
	}
}
