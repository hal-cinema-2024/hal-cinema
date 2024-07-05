package dai

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type TheatersSeatsRepo interface {
	CreateTheatersSeats(ctx context.Context, theatersSeats []*model.TheatersSeat) error
	GetTheaterSeatsByOrderID(ctx context.Context, orderID string) ([]*model.TheatersSeat, error)
	GetTheaterSeatsByScheduleID(ctx context.Context, scheduleID string) ([]*model.TheatersSeat, error)
	GetTheaterSeatsByScheduleIDs(ctx context.Context, scheduleIDs []string) (map[string][]*model.TheatersSeat, error)
	UpdateTheaterSeatByID(ctx context.Context, theaterSeatID, seatName string) error
}
