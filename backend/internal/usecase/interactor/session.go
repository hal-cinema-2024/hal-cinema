package interactor

import (
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
)

type SessionInteractor struct {
	Repositories dai.DataAccess
}

func NewSessionInteractor(repositories dai.DataAccess) *SessionInteractor {
	return &SessionInteractor{
		Repositories: repositories,
	}
}
