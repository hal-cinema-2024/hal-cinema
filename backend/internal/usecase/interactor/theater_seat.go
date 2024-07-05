package interactor

import "github.com/hal-cinema-2024/backend/internal/usecase/dai"

type TheaterSeatInteractor struct {
	Repositories dai.DataAccess
}

func NewTheaterSeatInteractor(repositories dai.DataAccess) *TheaterSeatInteractor {
	return &TheaterSeatInteractor{
		Repositories: repositories,
	}
}
