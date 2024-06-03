package interactor

import (
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
)

type UserInteractor struct {
	Repositories dai.DataAccess
}

func NewUserInteractor(repositories dai.DataAccess) *UserInteractor {
	return &UserInteractor{
		Repositories: repositories,
	}
}
