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

func (r *UserRepo) GetUserByID(ctx context.Context, userID string) (*model.User, bool, error) {
	var (
		user  model.User
		count int64
	)

	result := r.db.Model(&user).Where("user_id = ?", userID).Find(&user).Count(&count)
	if result.Error != nil {
		return nil, false, result.Error
	}

	if count == 0 {
		return nil, false, nil
	}

	return &user, true, nil
}

var _ dai.UserRepo = (*UserRepo)(nil)
