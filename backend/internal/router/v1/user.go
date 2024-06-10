package v1

import (
	"github.com/hal-cinema-2024/backend/internal/adapter/controller"
	"github.com/hal-cinema-2024/backend/internal/container"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
)

func (v1 *v1Router) userRoute() {
	userRoute := v1.engine.Group("/users")

	ui := container.Invoke[*interactor.UserInteractor]()
	{
		userRoute.GET("", controller.GetUsers(ui).AsAdmin())
		userRoute.GET("/:user_id", controller.GetUser(ui))
		userRoute.PUT("/:user_id", controller.UpdateUser(ui))
		userRoute.DELETE("/:user_id", controller.DeleteUser(ui))
	}
}
