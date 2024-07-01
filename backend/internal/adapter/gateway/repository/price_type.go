package repository

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"gorm.io/gorm"
)

type PriceTypeRepo struct {
	db *gorm.DB
}

func NewPriceTypeRepo(db *gorm.DB) *PriceTypeRepo {
	return &PriceTypeRepo{db}
}

func (r *PriceTypeRepo) GetPriceTypes(ctx context.Context) (map[int32]model.PriceType, error) {
	var priceTypes []model.PriceType
	err := r.db.WithContext(ctx).Find(&priceTypes).Error
	if err != nil {
		return nil, err
	}

	priceTypesMap := make(map[int32]model.PriceType)
	for _, priceType := range priceTypes {
		priceTypesMap[priceType.PriceTypeID] = priceType
	}

	return priceTypesMap, nil
}
