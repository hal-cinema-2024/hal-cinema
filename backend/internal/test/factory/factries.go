package factory

import (
	"testing"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"gorm.io/gorm"
)

type Factories struct {
	User    Factory[model.User]
	Session Factory[model.Session]
}

func NewFactories(t *testing.T) func(db *gorm.DB) *Factories {
	return func(db *gorm.DB) *Factories {
		return &Factories{
			User:    newUserFactory(t, db),
			Session: newSessionFactory(t, db),
		}
	}
}
