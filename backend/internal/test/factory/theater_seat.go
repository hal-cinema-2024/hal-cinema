package factory

import (
	"testing"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/k-yomo/fixtory/v2"
	"gorm.io/gorm"
)

var theaterSeatBluePrint = func(i int, last model.TheatersSeat) model.TheatersSeat {
	return model.TheatersSeat{}
}

func newTheaterSeatFactory(t *testing.T, db *gorm.DB) Factory[model.TheatersSeat] {
	return Factory[model.TheatersSeat]{
		factory:   fixtory.NewFactory(t, model.TheatersSeat{}),
		bluePrint: theaterSeatBluePrint,
		db:        db,
	}
}
