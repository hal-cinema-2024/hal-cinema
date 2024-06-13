package repository_test

import (
	"context"
	"reflect"
	"testing"
	"time"

	"github.com/google/uuid"
	"github.com/hal-cinema-2024/backend/internal/adapter/gateway/repository"
	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/test"
	"gorm.io/gorm"
)

func TestCreateMovie(t *testing.T) {
	ctx := context.Background()
	if err := test.NewContainer(t); err != nil {
		t.Fatal(err)
	}
	db, err := invoke[*gorm.DB]()
	if err != nil {
		t.Fatal(err)
	}
	movieRepo := repository.NewMovieRepo(db)

	movie := &model.Movie{
		MovieID:       uuid.NewString(),
		Name:          "test",
		Director:      "testDirector",
		Summary:       "testSummary",
		ThumbnailPath: "testThumbnailPath",
		Link:          "testLink",
		Term:          120,
		ReleaseDate:   time.Now(),
		EndDate:       time.Now(),
	}

	imagePaths := []string{
		"test1",
		"test2",
		"test3",
	}

	createdMovieID, err := movieRepo.CreateMovie(ctx, movie, imagePaths)
	if err != nil {
		t.Fatal(err)
	}

	// Assert movie is created successfully
	if createdMovieID == "" {
		t.Error("Expected movie ID to be non-empty, but got empty")
	}

	// Assert movie is retrieved correctly
	createdMovie, retrievedImagePaths, err := movieRepo.GetMovieByID(ctx, createdMovieID)
	if err != nil {
		t.Fatal(err)
	}

	if createdMovie.Name != movie.Name {
		t.Errorf("Expected movie name %s, but got %s", movie.Name, createdMovie.Name)
	}

	if createdMovie.Director != movie.Director {
		t.Errorf("Expected movie director %s, but got %s", movie.Director, createdMovie.Director)
	}

	if createdMovie.Summary != movie.Summary {
		t.Errorf("Expected movie summary %s, but got %s", movie.Summary, createdMovie.Summary)
	}

	if createdMovie.Link != movie.Link {
		t.Errorf("Expected movie link %s, but got %s", movie.Link, createdMovie.Link)
	}

	if createdMovie.Term != movie.Term {
		t.Errorf("Expected movie term %d, but got %d", movie.Term, createdMovie.Term)
	}

	if !reflect.DeepEqual(retrievedImagePaths, imagePaths) {
		t.Errorf("Expected image paths %v, but got %v", imagePaths, retrievedImagePaths)
	}
}
func TestGetMovieByID(t *testing.T) {
	ctx := context.Background()
	if err := test.NewContainer(t); err != nil {
		t.Fatal(err)
	}
	db, err := invoke[*gorm.DB]()
	if err != nil {
		t.Fatal(err)
	}
	movieRepo := repository.NewMovieRepo(db)

	// Create a test movie
	movie := &model.Movie{
		MovieID:       uuid.NewString(),
		Name:          "test",
		Director:      "testDirector",
		Summary:       "testSummary",
		ThumbnailPath: "testThumbnailPath",
		Link:          "testLink",
		Term:          120,
		ReleaseDate:   time.Now(),
		EndDate:       time.Now(),
	}
	imagePaths := []string{
		"test1",
		"test2",
		"test3",
	}
	_, err = movieRepo.CreateMovie(ctx, movie, imagePaths)
	if err != nil {
		t.Fatal(err)
	}

	// Retrieve the created movie
	createdMovie, retrievedImagePaths, err := movieRepo.GetMovieByID(ctx, movie.MovieID)
	if err != nil {
		t.Fatal(err)
	}

	// Assert movie is retrieved correctly
	if createdMovie.Name != movie.Name {
		t.Errorf("Expected movie name %s, but got %s", movie.Name, createdMovie.Name)
	}

	if createdMovie.Director != movie.Director {
		t.Errorf("Expected movie director %s, but got %s", movie.Director, createdMovie.Director)
	}

	if createdMovie.Summary != movie.Summary {
		t.Errorf("Expected movie summary %s, but got %s", movie.Summary, createdMovie.Summary)
	}

	if createdMovie.Link != movie.Link {
		t.Errorf("Expected movie link %s, but got %s", movie.Link, createdMovie.Link)
	}

	if createdMovie.Term != movie.Term {
		t.Errorf("Expected movie term %d, but got %d", movie.Term, createdMovie.Term)
	}

	if !reflect.DeepEqual(retrievedImagePaths, imagePaths) {
		t.Errorf("Expected image paths %v, but got %v", imagePaths, retrievedImagePaths)
	}
}
