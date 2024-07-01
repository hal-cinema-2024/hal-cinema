package repository_test

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/google/uuid"
	"github.com/hal-cinema-2024/backend/internal/adapter/gateway/repository"
	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/test"
	"github.com/hal-cinema-2024/backend/internal/test/factory"
	"github.com/jackc/pgerrcode"
	"github.com/lib/pq"
	"gorm.io/gorm"
)

func TestCreateSchedule(t *testing.T) {
	ctx := context.Background()
	if err := test.NewContainer(t); err != nil {
		t.Fatal(err)
	}
	db, err := invoke[*gorm.DB]()
	if err != nil {
		t.Fatal(err)
	}

	factories, err := invoke[*factory.Factories]()
	if err != nil {
		t.Fatal(err)
	}

	repo := repository.NewScheduleRepo(db)

	movie := factories.Movie.Create()
	schedule := factories.Schedule.Create(model.Schedule{
		ScheduleID: uuid.NewString(),
		MovieID:    movie.MovieID,
		TheaterID:  "1",
		StartDate:  time.Now(),
	})

	testCases := []struct {
		name        string
		arg         model.Schedule
		wantErrCode string
	}{
		{
			name: "success",
			arg: model.Schedule{
				ScheduleID: uuid.NewString(),
				TheaterID:  "1",
				MovieID:    movie.MovieID,
				StartDate:  time.Now(),
			},
			wantErrCode: "",
		},
		{
			name: "failed - duplicate schedule id",
			arg: model.Schedule{
				ScheduleID: schedule.ScheduleID,
				TheaterID:  "1",
				MovieID:    movie.MovieID,
				StartDate:  time.Now(),
			},
			wantErrCode: pgerrcode.UniqueViolation,
		},
		{
			name: "failed - null movie_id",
			arg: model.Schedule{
				ScheduleID: uuid.NewString(),
				TheaterID:  "1",
				StartDate:  time.Now(),
			},
			wantErrCode: pgerrcode.ForeignKeyViolation,
		},
		{
			name: "failed - null theater id",
			arg: model.Schedule{
				ScheduleID: uuid.NewString(),
				MovieID:    movie.MovieID,
				StartDate:  time.Now(),
			},
			wantErrCode: pgerrcode.ForeignKeyViolation,
		},
		{
			name: "failed - null start date",
			arg: model.Schedule{
				ScheduleID: uuid.NewString(),
				TheaterID:  "1",
				MovieID:    movie.MovieID,
			},
			wantErrCode: pgerrcode.CheckViolation,
		},
		{
			name: "failed - schedule id",
			arg: model.Schedule{
				TheaterID: "1",
				MovieID:   movie.MovieID,
				StartDate: time.Now(),
			},
			wantErrCode: pgerrcode.CheckViolation,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			err := repo.CreateSchedule(ctx, &tc.arg)
			if err != nil {
				var pgErr *pq.Error
				if errors.As(err, &pgErr) {
					t.Log(pgErr.Code)
					if string(pgErr.Code) != tc.wantErrCode {
						t.Errorf("got %s; want %s", pgErr.Code, tc.wantErrCode)
					}
				}
			}
		})
	}

}
