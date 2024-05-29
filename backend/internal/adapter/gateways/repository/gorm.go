package repository

import (
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
