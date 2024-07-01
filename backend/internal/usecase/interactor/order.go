package interactor

import "github.com/hal-cinema-2024/backend/internal/usecase/dai"

type OrderInteractor struct {
	Repositories dai.DataAccess
}

func NewOrderInteractor(repositories dai.DataAccess) *OrderInteractor {
	return &OrderInteractor{
		Repositories: repositories,
	}
}
