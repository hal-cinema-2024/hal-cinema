package cors

import (
	"strings"

	"github.com/hal-cinema-2024/backend/cmd/config"
	"github.com/labstack/echo/v4"
)

func SetupCORS() echo.MiddlewareFunc {
	switch config.Config.App.Env {
	// Productionのみ限定的なスコープでのCORS
	case config.EnvProduction:
		InitWhiteList()
		return AllowrRstrictiveOrigins()
	case config.EnvDevelopment:
		return AllowAllOrigins()
	default:
		return AllowAllOrigins()
	}
}

func AllowAllOrigins() echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			requestAddr := c.Request().Header.Get("Origin")
			// no origin ignore
			if requestAddr == "" {
				return echo.ErrUnauthorized
			}
			// ignore /healthz
			if c.Path() == "/healthz" {
				return next(c)
			}

			c.Response().Header().Set("Access-Control-Allow-Origin", requestAddr)
			c.Response().Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")
			c.Response().Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
			c.Response().Header().Set("Access-Control-Max-Age", "3600")
			c.Response().Header().Set("Access-Control-Allow-Credentials", "true")

			return next(c)
		}
	}
}

var originWhiteList map[string]struct{}

func InitWhiteList() {
	origins := strings.Split(config.Config.App.AllowOrigin, ",")
	originWhiteList = make(map[string]struct{})
	for _, origin := range origins {
		originWhiteList[origin] = struct{}{}
	}
}

func AllowrRstrictiveOrigins() echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			requestAddr := c.Request().Header.Get("Origin")

			_, ok := originWhiteList[requestAddr]

			if !ok || requestAddr == "" || c.Path() == "/healthz" {
				return echo.ErrUnauthorized
			}

			c.Response().Header().Set("Access-Control-Allow-Origin", requestAddr)
			c.Response().Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")
			c.Response().Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
			c.Response().Header().Set("Access-Control-Max-Age", "3600")
			c.Response().Header().Set("Access-Control-Allow-Credentials", "true")

			return next(c)
		}
	}
}
