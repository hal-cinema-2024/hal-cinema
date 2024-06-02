package interactor

import (
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
)

type MovieInteractor struct {
	Repositories dai.DataAccess
}

func NewMovieInteractor(repositories dai.DataAccess) *MovieInteractor {
	return &MovieInteractor{
		Repositories: repositories,
	}
}
