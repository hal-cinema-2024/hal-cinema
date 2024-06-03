package repository

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
	"gorm.io/gorm"
)

type UserRepo struct {
	db *gorm.DB
}

func NewUserRepo(gorm *gorm.DB) *UserRepo {
	return &UserRepo{
		db: gorm,
	}
}

func (r *UserRepo) CreateUser(ctx context.Context, user *model.User) (*model.User, error) {
	result := r.db.Create(user)
	if result.Error != nil {
		return nil, result.Error
	}

	return user, nil
}

func (r *UserRepo) GetUserByID(ctx context.Context, userID string) (*model.User, error) {
	var user model.User
	result := r.db.Model(&user).Where("user_id = ?", userID).Find(&user)
	if result.Error != nil {
		return nil, result.Error
	}

	return &user, nil
}

func (r *UserRepo) ValidUser(ctx context.Context, userID string) (bool, error) {
	var count int64
	result := r.db.Model(&model.User{}).Where("user_id = ?", userID).Count(&count)
	if result.Error != nil {
		return false, result.Error
	}

	if count == 0 {
		return false, nil
	}

	return true, nil
}

var _ dai.UserRepo = (*UserRepo)(nil)