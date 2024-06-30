package v1

import (
	"github.com/labstack/echo/v4"
)

type v1Router struct {
	engine *echo.Group
}

func Setup(engine *echo.Group) {
	v1 := &v1Router{
		engine: engine,
	}

	// must login route
	// si := container.Invoke[*interactor.SessionInteractor]()
	// v1.engine.Use(middleware.SessionMiddleware(si))
	{
		v1.userRoute()
		v1.movieRoute()
		v1.scheduleRoute()
	}
}
