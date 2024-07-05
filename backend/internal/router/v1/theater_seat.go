package v1

import (
	"github.com/hal-cinema-2024/backend/internal/adapter/controller"
	"github.com/hal-cinema-2024/backend/internal/container"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor"
)

func (v1 *v1Router) theaterSeaRoute() {
	scheduleRoute := v1.engine.Group("/theater_seats")

	ti := container.Invoke[*interactor.TheaterSeatInteractor]()

	scheduleRoute.GET("/:movieId", controller.GetTheaterSeats(ti))
	scheduleRoute.PUT("/:theaterSeatId", controller.UpdateTheaterSeat(ti))
}
