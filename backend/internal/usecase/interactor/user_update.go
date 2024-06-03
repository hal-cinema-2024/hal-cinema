package interactor

import (
	"context"
	"errors"
	"fmt"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/framework/herror"
)

type UpdateUserParam struct {
	UserID        string `json:"user_id"`
	FirstName     string `json:"first_name"`
	LastName      string `json:"last_name"`
	FirstNameKana string `json:"first_name_kana"`
	LastNameKana  string `json:"last_name_kana"`
	Age           int    `json:"age"`
	Gender        string `json:"gender"`
}

func (ui *UserInteractor) CreateUser(ctx context.Context, userID string) (*model.User, error) {
	if userID == "" {
		return nil, fmt.Errorf("user id is empty")
	}

	user, err := ui.Repositories.GetUserByID(ctx, userID)
	if err != nil {
		if !errors.Is(err, herror.ErrResourceNotFound) {
			return nil, err
		}
		return nil, fmt.Errorf("user not found")
	}
	return user, nil
}
