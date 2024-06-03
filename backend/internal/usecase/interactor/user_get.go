package interactor

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

func (ui *UserInteractor) GetUser(ctx context.Context, userID string) (*model.User, error) {
	user, found, err := ui.Repositories.GetUserByID(ctx, userID)
	if err != nil {
		return nil, err
	}

	if !found {
		return nil, nil
	}

	return user, nil
}
