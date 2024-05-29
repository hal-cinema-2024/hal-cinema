package repository

import (
	"context"

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

func (db *GormRepo) Tx(ctx context.Context, tx func(tx *gorm.DB) error) error {
	return db.gorm.WithContext(ctx).Transaction(tx)
}
