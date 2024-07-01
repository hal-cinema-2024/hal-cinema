package dai

import (
	"context"
)

type DataAccess interface {
	UserRepo
	SessionRepo
	MovieRepo
	ScheduleRepo
	TheaterRepo
	TheaterSizeRepo
	TheatersSeatsRepo
	OrderRepo
	PriceTypeRepo

	Transaction(ctx context.Context, fn func(context.Context, DataAccess) error) error
}
