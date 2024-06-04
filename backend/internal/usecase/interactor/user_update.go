package interactor

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type UpdateUserParam struct {
	UserID        string `json:"user_id"`
	FirstName     string `json:"first_name"`
	LastName      string `json:"last_name"`
	FirstNameKana string `json:"first_name_kana"`
	LastNameKana  string `json:"last_name_kana"`
	Age           int    `json:"age"`
	Gender        int    `json:"gender"`
}

func (ui *UserInteractor) UpdateUser(ctx context.Context, param UpdateUserParam) (*model.User, error) {
	user, err := ui.Repositories.UpdateUser(ctx, param.UserID, &model.User{
		FirstName:        param.FirstName,
		LastName:         param.LastName,
		FirstNameReading: param.FirstNameKana,
		LastNameReading:  param.LastNameKana,
		Age:              int32(param.Age),
		Gender:           int32(param.Gender),
	})
	if err != nil {
		return nil, err
	}
	return user, nil
}
