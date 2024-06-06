package interactor

import (
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
)

type MovieInteractor struct {
	Repositories dai.DataAccess
	cloudStorage dai.CloudStorage
}

func NewMovieInteractor(repositories dai.DataAccess, cloudStorage dai.CloudStorage) *MovieInteractor {
	return &MovieInteractor{
		Repositories: repositories,
		cloudStorage: cloudStorage,
	}
}
