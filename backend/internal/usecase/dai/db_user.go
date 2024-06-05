package dai

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type UserRepo interface {
	CreateUser(ctx context.Context, user *model.User) (*model.User, error)
	GetUserByID(ctx context.Context, userID string) (*model.User, error)
	UpdateUser(ctx context.Context, userID string, user *model.User) (*model.User, error)
	DeleteUser(ctx context.Context, userID string) error
}
