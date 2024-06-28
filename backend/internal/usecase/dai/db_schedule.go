package dai

import (
	"context"
	"time"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type ScheduleRepo interface {
	CreateSchedule(ctx context.Context, schedule *model.Schedule) error
	GetSchedules(ctx context.Context, startTime time.Time, movieId ...string) ([]model.Schedule, error)
}
