package dai

import (
	"context"
	"time"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type ScheduleRepo interface {
	GetSchedules(ctx context.Context, startTime time.Time) ([]model.Schedule, error)
}
