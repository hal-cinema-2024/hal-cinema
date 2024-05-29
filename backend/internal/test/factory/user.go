package factory

import (
	"fmt"
	"testing"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/k-yomo/fixtory/v2"
	"gorm.io/gorm"
)

var userBluePrint = func(i int, last model.User) model.User {
	return model.User{
		Email: fmt.Sprintf("user%d@example.com", i),
	}
}

func newUserFactory(t *testing.T, db *gorm.DB) Factory[model.User] {
	return Factory[model.User]{
		factory:   fixtory.NewFactory(t, model.User{}),
		bluePrint: userBluePrint,
		db:        db,
	}
}
