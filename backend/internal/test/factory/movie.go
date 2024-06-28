package factory

import (
	"testing"
	"time"

	"github.com/google/uuid"
	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/k-yomo/fixtory/v2"
	"gorm.io/gorm"
)

var movieBluePrint = func(i int, last model.Movie) model.Movie {
	return model.Movie{
		MovieID:       uuid.NewString(),
		Name:          "test-movie",
		Summary:       "test-summary",
		ThumbnailPath: "test-thumbnail-path",
		Link:          "test-link",
		Director:      "test-director",
		ReleaseDate:   time.Now(),
		EndDate:       time.Now().Add(time.Hour * 24 * 30),
	}
}

func newMovieFactory(t *testing.T, db *gorm.DB) Factory[model.Movie] {
	return Factory[model.Movie]{
		factory:   fixtory.NewFactory(t, model.Movie{}),
		bluePrint: movieBluePrint,
		db:        db,
	}
}
