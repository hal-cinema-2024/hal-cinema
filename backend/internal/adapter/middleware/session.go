package middleware

import (
	"net/http"

	"github.com/hal-cinema-2024/backend/internal/framework/cookie"
	"github.com/hal-cinema-2024/backend/internal/framework/hcontext"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
	"github.com/labstack/echo/v4"
)

func SessionMiddleware(ui *interactor.SessionInteractor) echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(ctx echo.Context) error {
			sessionID, err := ctx.Cookie(string(cookie.SessionID))
			if err != nil {
				if err == http.ErrNoCookie {
					return echo.ErrUnauthorized
				}

				return echo.ErrInternalServerError
			}

			if sessionID.Value == "" {
				return echo.ErrUnauthorized
			}

			userAgent, ok := ctx.Get(hcontext.UserAgent.String()).(string)
			if !ok {
				return echo.ErrInternalServerError
			}

			user, err := ui.GetUserBySessionID(ctx.Request().Context(), sessionID.Value, userAgent)
			if err != nil {
				return echo.ErrInternalServerError
			}
			ctx.Set(hcontext.UserID.String(), user.UserID)
			return next(ctx)
		}
	}
}
