package v1

import (
	"github.com/hal-cinema-2024/backend/internal/adapter/controller"
	"github.com/hal-cinema-2024/backend/internal/container"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
)

func (v1 *v1Router) scheduleRoute() {
	scheduleRoute := v1.engine.Group("/schedules")

	si := container.Invoke[*interactor.ScheduleInteractor]()

	scheduleRoute.POST("", controller.CreateSchedule(si))
	scheduleRoute.GET("", controller.GetSchedules(si))
}
