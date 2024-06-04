package middleware

import (
	"github.com/hal-cinema-2024/backend/internal/framework/hcontext"
	"github.com/labstack/echo/v4"
)

func GetUserAgent() echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			userAgent := c.Request().UserAgent()
			c.Set(hcontext.UserAgent.String(), userAgent)
			return next(c)
		}
	}
}
