package repository

import (
	"context"
	"time"

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

func (r *TheaterSeatRepo) CreateTheatersSeats(ctx context.Context, theatersSeats []*model.TheatersSeat) error {
	if len(theatersSeats) == 0 {
		return nil
	}

	err := r.db.WithContext(ctx).Create(&theatersSeats).Error
	if err != nil {
		return err
	}
	return nil
}

func (r *TheaterSeatRepo) GetTheatersSeatsByScheduleID(ctx context.Context, scheduleID string) ([]*model.TheatersSeat, error) {
	var theatersSeats []*model.TheatersSeat
	err := r.db.WithContext(ctx).Where("schedule_id = ?", scheduleID).Find(&theatersSeats).Error
	if err != nil {
		return nil, err
	}
	return theatersSeats, nil
}

type OrderTheatersSeat struct {
	OrderID    string    `gorm:"column:order_id;primaryKey" json:"order_id"`
	UserID     string    `gorm:"column:user_id;not null" json:"user_id"`
	ScheduleID string    `gorm:"column:schedule_id;not null" json:"schedule_id"`
	IsPaid     bool      `gorm:"column:is_paid;not null" json:"is_paid"`
	CreatedAt  time.Time `gorm:"column:created_at;not null" json:"created_at"`
	model.TheatersSeat
}

func (r *TheaterSeatRepo) GetTheatersSeatsByScheduleIDs(ctx context.Context, scheduleIDs []string) (map[string][]*model.TheatersSeat, error) {
	var orderTheatersSeats []*OrderTheatersSeat
	err := r.db.WithContext(ctx).Where("schedule_id IN (?)", scheduleIDs).Model(&model.Order{}).Joins("JOIN theaters_seats ON orders.order_id == theaters_seats.order_id").Find(&orderTheatersSeats).Error
	if err != nil {
		return nil, err
	}

	theatersSeatsMap := make(map[string][]*model.TheatersSeat, len(orderTheatersSeats))
	for _, orderTheatersSeat := range orderTheatersSeats {
		theatersSeatsMap[orderTheatersSeat.ScheduleID] = append(theatersSeatsMap[orderTheatersSeat.ScheduleID], &orderTheatersSeat.TheatersSeat)
	}

	return theatersSeatsMap, nil
}

var _ dai.TheatersSeatsRepo = (*TheaterSeatRepo)(nil)
