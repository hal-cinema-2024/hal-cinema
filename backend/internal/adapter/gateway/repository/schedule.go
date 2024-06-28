package repository

import (
	"context"
	"time"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
	"gorm.io/gorm"
)

type ScheduleRepo struct {
	db *gorm.DB
}

func NewScheduleRepo(gorm *gorm.DB) *ScheduleRepo {
	return &ScheduleRepo{
		db: gorm,
	}
}

func (r *ScheduleRepo) GetSchedules(ctx context.Context, startTime time.Time) ([]model.Schedule, error) {
	panic("impliments me")
}

var _ dai.ScheduleRepo = (*ScheduleRepo)(nil)
