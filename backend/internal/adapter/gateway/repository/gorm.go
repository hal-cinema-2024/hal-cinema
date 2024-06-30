package repository

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
	"gorm.io/gorm"
)

type GormRepo struct {
	gorm *gorm.DB
	*UserRepo
	*SessionRepo
	*MovieRepo
	*ScheduleRepo
	*TheaterRepo
	*TheaterSizeRepo
	*TheaterSeatRepo
	*OrderRepo
}

func NewGormRepo(gorm *gorm.DB) *GormRepo {
	return &GormRepo{
		gorm:            gorm,
		UserRepo:        NewUserRepo(gorm),
		SessionRepo:     NewSessionRepo(gorm),
		MovieRepo:       NewMovieRepo(gorm),
		ScheduleRepo:    NewScheduleRepo(gorm),
		TheaterRepo:     NewTheaterRepo(gorm),
		TheaterSizeRepo: NewTheaterSizeRepo(gorm),
		TheaterSeatRepo: NewTheaterSeatRepo(gorm),
		OrderRepo:       NewOrderRepo(gorm),
	}
}

var _ dai.DataAccess = (*GormRepo)(nil)

func (r *GormRepo) Transaction(ctx context.Context, fn func(context.Context, dai.DataAccess) error) error {
	err := r.gorm.WithContext(ctx).Transaction(func(tx *gorm.DB) error {
		if err := fn(ctx, NewGormRepo(tx)); err != nil {
			return err
		}
		return nil
	})

	if err != nil {
		return err
	}

	return nil
}
