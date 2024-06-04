package repository

import (
	"context"
	"time"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/framework/herror"
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
	var (
		user  model.User
		count int64
	)

	result := r.db.Model(&user).Where("user_id = ?", userID).Find(&user).Count(&count)
	if result.Error != nil {
		return nil, result.Error
	}

	if count == 0 {
		return nil, herror.ErrResourceNotFound
	}

	return &user, nil
}

func (r *UserRepo) UpdateUser(ctx context.Context, userID string, user *model.User) (*model.User, error) {
	saveUser := make(map[string]any)
	var changeCount int64

	if len(user.FirstName) != 0 {
		saveUser["first_name"] = user.FirstName
		changeCount++
	}
	if len(user.LastName) != 0 {
		saveUser["last_name"] = user.LastName
		changeCount++
	}
	if len(user.FirstNameReading) != 0 {
		saveUser["first_name_reading"] = user.FirstNameReading
		changeCount++
	}
	if len(user.LastNameReading) != 0 {
		saveUser["last_name_reading"] = user.LastNameReading
		changeCount++
	}
	if user.Age != 0 {
		saveUser["age"] = user.Age
		changeCount++
	}
	if user.Gender != 0 {
		saveUser["gender"] = user.Gender
		changeCount++
	}

	if changeCount == 0 {
		return user, herror.ErrNoChange
	}

	saveUser["updated_at"] = time.Now()

	var count int64
	result := r.db.Model(&model.User{}).Where("user_id = ?", user.UserID).Updates(saveUser).Find(&user).Count(&count)
	if result.Error != nil {
		return nil, result.Error
	}

	if count == 0 {
		return nil, herror.ErrResourceNotFound
	}

	return user, nil
}

var _ dai.UserRepo = (*UserRepo)(nil)
