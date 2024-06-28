package factory

import (
	"testing"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/k-yomo/fixtory/v2"
	"gorm.io/gorm"
)

var scheduleBluePrint = func(i int, last model.Schedule) model.Schedule {
	return model.Schedule{}
}

func newScheduleFactory(t *testing.T, db *gorm.DB) Factory[model.Schedule] {
	return Factory[model.Schedule]{
		factory:   fixtory.NewFactory(t, model.Schedule{}),
		bluePrint: scheduleBluePrint,
		db:        db,
	}
}
