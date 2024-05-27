package repository

import (
	"gorm.io/gorm"
)

type GormRepo struct {
	gorm *gorm.DB

	UserRepo
}

func NewGormRepo(gorm *gorm.DB) *GormRepo {
	return &GormRepo{
		gorm:     gorm,
		UserRepo: *NewUserRepo(gorm),
	}
}
