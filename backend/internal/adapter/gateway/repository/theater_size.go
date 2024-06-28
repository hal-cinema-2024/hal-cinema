package repository

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
	"gorm.io/gorm"
)

type TheaterSizeRepo struct {
	db *gorm.DB
}

func NewTheaterSizeRepo(db *gorm.DB) *TheaterSizeRepo {
	return &TheaterSizeRepo{db: db}
}

func (r *TheaterSizeRepo) GetTheaterSizeByID(ctx context.Context, theaterSizeID string) (*model.TheatersSize, error) {
	var theaterSize model.TheatersSize
	if err := r.db.First(&theaterSize, "id = ?", theaterSizeID).Error; err != nil {
		return nil, err
	}
	return &theaterSize, nil
}

func (r *TheaterSizeRepo) GetTheaterSizes(ctx context.Context) (map[string]*model.TheatersSize, error) {
	var theaterSizes []*model.TheatersSize
	if err := r.db.Find(&theaterSizes).Error; err != nil {
		return nil, err
	}

	result := make(map[string]*model.TheatersSize)
	for _, theaterSize := range theaterSizes {
		result[theaterSize.TheaterSizeID] = theaterSize
	}
	return result, nil
}

var _ dai.TheaterSizeRepo = (*TheaterSizeRepo)(nil)
