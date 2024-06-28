package interactor

import "github.com/hal-cinema-2024/backend/internal/usecase/dai"

type ScheduleInteractor struct {
	Repositories dai.DataAccess
}

func NewScheduleInteractor(repositories dai.DataAccess) *ScheduleInteractor {
	return &ScheduleInteractor{
		Repositories: repositories,
	}
}
