package repository

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
	"gorm.io/gorm"
)

type TheaterSeatRepo struct {
	db *gorm.DB
}

func NewTheaterSeatRepo(db *gorm.DB) *TheaterSeatRepo {
	return &TheaterSeatRepo{db: db}
}

func (r *TheaterSeatRepo) GetTheatersSeatsByScheduleID(ctx context.Context, scheduleID string) ([]*model.TheatersSeat, error) {
	var theatersSeats []*model.TheatersSeat
	err := r.db.WithContext(ctx).Where("schedule_id = ?", scheduleID).Find(&theatersSeats).Error
	if err != nil {
		return nil, err
	}
	return theatersSeats, nil
}

func (r *TheaterSeatRepo) GetTheatersSeatsByScheduleIDs(ctx context.Context, scheduleIDs []string) (map[string][]*model.TheatersSeat, error) {
	var theatersSeats []*model.TheatersSeat
	err := r.db.WithContext(ctx).Where("schedule_id IN (?)", scheduleIDs).Find(&theatersSeats).Error
	if err != nil {
		return nil, err
	}

	theatersSeatsMap := make(map[string][]*model.TheatersSeat, len(theatersSeats))
	for _, theatersSeat := range theatersSeats {
		theatersSeatsMap[theatersSeat.ScheduleID] = append(theatersSeatsMap[theatersSeat.ScheduleID], theatersSeat)
	}

	return theatersSeatsMap, nil
}

var _ dai.TheatersSeatsRepo = (*TheaterSeatRepo)(nil)
