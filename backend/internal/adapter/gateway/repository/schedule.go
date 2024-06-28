package repository

import (
	"context"
	"time"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type ScheduleRepo struct {
	db *gorm.DB
}

func NewScheduleRepo(gorm *gorm.DB) *ScheduleRepo {
	return &ScheduleRepo{
		db: gorm,
	}
}

func (r *ScheduleRepo) CreateSchedule(ctx context.Context, schedule *model.Schedule) error {
	err := r.db.Create(&schedule).Error
	if err != nil {
		return err
	}

	return nil
}

func (r *ScheduleRepo) GetSchedules(ctx context.Context, startTime time.Time, movieId ...string) ([]model.Schedule, error) {

	var schedules []model.Schedule
	query := r.db.Where("start_date BETWEEN ? AND ?", startTime, startTime.Add(24*time.Hour))
	if len(movieId) > 0 {
		query = query.Where("movie_id IN (?)", movieId)
	}

	query.Logger = logger.Default.LogMode(logger.Info)

	if err := query.Find(&schedules).Error; err != nil {
		return nil, err
	}

	return schedules, nil
}

var _ dai.ScheduleRepo = (*ScheduleRepo)(nil)
