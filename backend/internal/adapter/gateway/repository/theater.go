package repository

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
	"gorm.io/gorm"
)

type TheaterRepo struct {
	db *gorm.DB
}

func NewTheaterRepo(db *gorm.DB) *TheaterRepo {
	return &TheaterRepo{db: db}
}

func (r *TheaterRepo) GetTheaterByID(ctx context.Context, theaterID int32) (*model.Theater, error) {
	var theater model.Theater
	if err := r.db.WithContext(ctx).First(&theater, theaterID).Error; err != nil {
		return nil, err
	}
	return &theater, nil
}

func (r *TheaterRepo) GetTheatersByID(ctx context.Context, theaterID []int32) (map[int32]*model.Theater, error) {
	var theaters []*model.Theater
	if err := r.db.WithContext(ctx).Find(&theaters, theaterID).Error; err != nil {
		return nil, err
	}

	theaterMap := make(map[int32]*model.Theater)
	for _, theater := range theaters {
		theaterMap[theater.TheaterID] = theater
	}
	return theaterMap, nil
}

var _ dai.TheaterRepo = (*TheaterRepo)(nil)
