package v1

import (
	"github.com/hal-cinema-2024/backend/internal/adapter/controller"
	"github.com/hal-cinema-2024/backend/internal/container"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
)

func (v1 *v1Router) movieRoute() {
	movieRoute := v1.engine.Group("/movies")

	mi := container.Invoke[*interactor.MovieInteractor]()
	movieRoute.POST("", controller.CreateMovie(mi))
	movieRoute.GET("", controller.GetMovies(mi))
	movieRoute.GET("/:movie_id", controller.GetMovie(mi))
	movieRoute.DELETE("/:movie_id", controller.DeleteMovie(mi))
}
