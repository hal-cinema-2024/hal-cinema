package router

import (
	"net/http"

	"github.com/hal-cinema-2024/backend/cmd/config"
	"github.com/hal-cinema-2024/backend/internal/adapter/controller/user"
	"github.com/hal-cinema-2024/backend/internal/adapter/middleware/cors"
	"github.com/hal-cinema-2024/backend/internal/container"
	"github.com/hal-cinema-2024/backend/internal/framework/cookie"
	v1 "github.com/hal-cinema-2024/backend/internal/router/v1"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor/google"
	"github.com/labstack/echo-contrib/echoprometheus"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"go.opentelemetry.io/contrib/instrumentation/github.com/labstack/echo/otelecho"
)

type router struct {
	echo *echo.Echo
}

func NewRouter() http.Handler {
	echo := echo.New()
	router := &router{
		echo: echo,
	}

	// setup middlware
	router.echo.Use(otelecho.Middleware(config.Config.Otel.ProjectID))
	router.echo.Use(middleware.Recover())
	router.echo.Use(cors.SetupCORS())
	// router.echo.Use(echoprometheus.NewMiddleware("hal-cinema"))

	router.health()
	router.metric()

	{
		router.GoogleLogin()

		v1Group := echo.Group("/v1")
		v1.Setup(v1Group)
	}

	return router.echo
}

func (r *router) GoogleLogin() {
	googleLogin := container.Invoke[*google.Login]()
	coockieSetter := container.Invoke[*cookie.CoockieSetter]()

	r.echo.POST("/login/google", user.GoogleLogin(googleLogin, coockieSetter))

}

func (r *router) health() {
	r.echo.GET("/healthz", func(c echo.Context) error {
		return c.String(http.StatusOK, `{"status:":"ok"}`)
	})
}

func (r *router) metric() {
	r.echo.GET("/metrics", echoprometheus.NewHandler())
}
