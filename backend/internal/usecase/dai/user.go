package dai

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/adapter/gateways/model"
)

type UserRepo interface {
	CreateUser(ctx context.Context, user *model.User) (*model.User, error)
	GetUserByID(ctx context.Context, userID string) (*model.User, error)
	ValidUser(ctx context.Context, userID string) (bool, error)
}
