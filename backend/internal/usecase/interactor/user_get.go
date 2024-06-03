package interactor

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

func (ui *UserInteractor) GetUser(ctx context.Context, userID string) (*model.User, error) {
	user, err := ui.Repositories.GetUserByID(ctx, userID)
	if err != nil {
		return nil, err
	}

	return user, nil
}

func (ui *UserInteractor) ValidUser(ctx context.Context, userID string) (bool, error) {
	found, err := ui.Repositories.ValidUser(ctx, userID)
	if err != nil {
		return false, err
	}

	return found, nil
}
