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
}

func NewGormRepo(gorm *gorm.DB) *GormRepo {
	return &GormRepo{
		gorm:        gorm,
		UserRepo:    NewUserRepo(gorm),
		SessionRepo: NewSessionRepo(gorm),
	}
}

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
