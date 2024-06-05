package interactor

import (
	"context"
	"errors"
	"fmt"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/framework/herror"
)

func (ui *UserInteractor) GetUser(ctx context.Context, userID string) (*model.User, error) {
	user, err := ui.Repositories.GetUserByID(ctx, userID)
	if err != nil {
		if !errors.Is(err, herror.ErrResourceNotFound) {
			return nil, err
		}
		return nil, fmt.Errorf("user not found")
	}
	return user, nil
}

func (ui *UserInteractor) GetUsers(ctx context.Context, limit, offset int) ([]model.User, error) {
	users, err := ui.Repositories.GetUsers(ctx, limit, offset)
	if err != nil {
		return nil, err
	}
	return users, nil
}
