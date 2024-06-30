package interactor

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type CreateScheduleParam struct {
	MovieID   string
	TheaterID int32
	StartTime time.Time
}

func (i *ScheduleInteractor) CreateSchedule(ctx context.Context, param CreateScheduleParam) (*model.Schedule, error) {
	scheduleID, err := uuid.NewV7()
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to generate uuidv7"))
	}

	schedule := &model.Schedule{
		ScheduleID: scheduleID.String(),
		MovieID:    param.MovieID,
		TheaterID:  param.TheaterID,
		StartDate:  param.StartTime,
	}

	if err := i.Repositories.CreateSchedule(ctx, schedule); err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to create schedule"))
	}

	return schedule, nil
}
