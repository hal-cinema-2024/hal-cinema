package factory

import (
	"testing"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/k-yomo/fixtory/v2"
	"gorm.io/gorm"
)

var sessionBluePrint = func(i int, last model.Session) model.Session {
	return model.Session{}
}

func newSessionFactory(t *testing.T, db *gorm.DB) Factory[model.Session] {
	return Factory[model.Session]{
		factory:   fixtory.NewFactory(t, model.Session{}),
		bluePrint: sessionBluePrint,
		db:        db,
	}
}
