package dai

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type TheatersSeatsRepo interface {
	GetTheatersSeatsByScheduleID(ctx context.Context, scheduleID string) ([]*model.TheatersSeat, error)
	GetTheatersSeatsByScheduleIDs(ctx context.Context, scheduleIDs []string) (map[string][]*model.TheatersSeat, error)
}
