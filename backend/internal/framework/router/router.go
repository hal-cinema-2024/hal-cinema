package router

import (
	"net/http"

	v1 "github.com/hal-cinema-2024/backend/internal/framework/router/v1"
	"github.com/labstack/echo/v4"
)

type Router struct {
	echo *echo.Echo
}

func NewRouter() http.Handler {
	echo := echo.New()
	router := &Router{
		echo: echo,
	}

	router.health()

	{
		v1Group := echo.Group("/v1")
		v1.Setup(v1Group)
	}

	return router.echo
}

func (r *Router) health() {
	r.echo.GET("/healthz", func(c echo.Context) error {
		return c.String(http.StatusOK, `{"status:":"ok"}`)
	})
}
