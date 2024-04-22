package router

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

type Router struct {
	echo *echo.Echo
}

func NewRouter() http.Handler {
	router := &Router{
		echo: echo.New(),
	}

	router.health()

	
	return router.echo
}

func (r *Router) health() {
	r.echo.GET("/healthz", func(c echo.Context) error {
		return c.String(http.StatusOK, `{"status:":"ok"}`)
	})
}
