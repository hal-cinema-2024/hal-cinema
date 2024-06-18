package repository_test

import (
	"context"
	"errors"
	"reflect"
	"testing"
	"time"

	"github.com/google/uuid"
	"github.com/hal-cinema-2024/backend/internal/adapter/gateway/repository"
	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/framework/herror"
	"github.com/hal-cinema-2024/backend/internal/test"
	"github.com/jackc/pgerrcode"
	"github.com/lib/pq"
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

	movie := model.Movie{
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

	testCases := []struct {
		name        string
		movie       model.Movie
		imagePaths  []string
		wantErrCode string
	}{
		{
			name:        "success - get movie by ID",
			movie:       movie,
			imagePaths:  imagePaths,
			wantErrCode: "",
		},
		{
			name:        "success - get movie by ID no images",
			movie:       movie,
			imagePaths:  []string{},
			wantErrCode: "",
		},
		{
			name: "fail - null movie_id",
			movie: model.Movie{
				Name:          "test",
				Director:      "testDirector",
				Summary:       "testSummary",
				ThumbnailPath: "testThumbnailPath",
				Link:          "testLink",
				Term:          120,
				ReleaseDate:   time.Now(),
				EndDate:       time.Now(),
			},
			imagePaths:  []string{},
			wantErrCode: pgerrcode.NotNullViolation,
		},
		{
			name: "fail - null required field",
			movie: model.Movie{
				MovieID:     uuid.NewString(),
				Director:    "testDirector",
				Term:        120,
				ReleaseDate: time.Now(),
				EndDate:     time.Now(),
			},
			imagePaths:  []string{},
			wantErrCode: pgerrcode.NotNullViolation,
		},
		{
			name: "fail - invalid term",
			movie: model.Movie{
				MovieID:       uuid.NewString(),
				Name:          "test",
				Director:      "testDirector",
				Summary:       "testSummary",
				ThumbnailPath: "testThumbnailPath",
				Link:          "testLink",
				Term:          -1,
				ReleaseDate:   time.Now(),
				EndDate:       time.Now(),
			},
			imagePaths:  []string{},
			wantErrCode: pgerrcode.CheckViolation,
		},
		{
			name: "fail - invalid release date",
			movie: model.Movie{
				MovieID:       uuid.NewString(),
				Name:          "test",
				Director:      "testDirector",
				Summary:       "testSummary",
				ThumbnailPath: "testThumbnailPath",
				Link:          "testLink",
				Term:          120,
				ReleaseDate:   time.Now().AddDate(0, 0, 1),
				EndDate:       time.Now(),
			},
		},
		{
			name: "fail - duplicate movie_id",
			movie: model.Movie{
				MovieID:       movie.MovieID,
				Name:          "test",
				Director:      "testDirector",
				Summary:       "testSummary",
				ThumbnailPath: "testThumbnailPath",
				Link:          "testLink",
				Term:          120,
				ReleaseDate:   time.Now(),
				EndDate:       time.Now(),
			},
			imagePaths:  []string{},
			wantErrCode: pgerrcode.UniqueViolation,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			_, err := movieRepo.CreateMovie(ctx, &tc.movie, tc.imagePaths)
			if err != nil {
				var pgErr *pq.Error
				if errors.As(err, &pgErr) {
					if string(pgErr.Code) == tc.wantErrCode {
						t.Log(err)
						return
					}
					t.Errorf("got %v; want %v", err, tc.wantErrCode)
				}
			}
		})
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
	movie := model.Movie{
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
	_, err = movieRepo.CreateMovie(ctx, &movie, imagePaths)
	if err != nil {
		t.Fatal(err)
	}

	testCases := []struct {
		name        string
		movie       model.Movie
		wantErrCode string
	}{
		{
			name:        "success - get movie by ID",
			movie:       movie,
			wantErrCode: "",
		},
		{
			name: "fail - invalid movie_id",
			movie: model.Movie{
				MovieID:       "invalid",
				Name:          "test",
				Director:      "testDirector",
				Summary:       "testSummary",
				ThumbnailPath: "testThumbnailPath",
				Link:          "testLink",
				Term:          120,
				ReleaseDate:   time.Now(),
				EndDate:       time.Now(),
			},
			wantErrCode: pgerrcode.InvalidTextRepresentation,
		},
		{
			name: "fail - movie_id not found",
			movie: model.Movie{
				MovieID:       uuid.NewString(),
				Name:          "test",
				Director:      "testDirector",
				Summary:       "testSummary",
				ThumbnailPath: "testThumbnailPath",
				Link:          "testLink",
				Term:          120,
				ReleaseDate:   time.Now(),
				EndDate:       time.Now(),
			},
			wantErrCode: pgerrcode.NoDataFound,
		},
	}
	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {

			// Retrieve the created movie
			createdMovie, retrievedImagePaths, err := movieRepo.GetMovieByID(ctx, movie.MovieID)
			if err != nil {
				var pgErr *pq.Error
				if errors.As(err, &pgErr) {
					if string(pgErr.Code) == tc.wantErrCode {
						t.Log(err)
						return
					}
					t.Errorf("got %v; want %v", err, tc.wantErrCode)
				}
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
		})
	}

}

func TestGetMovies(t *testing.T) {
	ctx := context.Background()
	if err := test.NewContainer(t); err != nil {
		t.Fatal(err)
	}
	db, err := invoke[*gorm.DB]()
	if err != nil {
		t.Fatal(err)
	}
	movieRepo := repository.NewMovieRepo(db)

	// Create test movies
	movies := []*model.Movie{
		{
			MovieID:       uuid.NewString(),
			Name:          "test1",
			Director:      "testDirector1",
			Summary:       "testSummary1",
			ThumbnailPath: "testThumbnailPath1",
			Link:          "testLink1",
			Term:          120,
			ReleaseDate:   time.Now(),
			EndDate:       time.Now(),
		},
		{
			MovieID:       uuid.NewString(),
			Name:          "test2",
			Director:      "testDirector2",
			Summary:       "testSummary2",
			ThumbnailPath: "testThumbnailPath2",
			Link:          "testLink2",
			Term:          120,
			ReleaseDate:   time.Now(),
			EndDate:       time.Now(),
		},
	}

	for _, movie := range movies {
		_, err := movieRepo.CreateMovie(ctx, movie, []string{})
		if err != nil {
			t.Fatal(err)
		}
	}

	// Retrieve movies
	retrievedMovies, err := movieRepo.GetMovies(ctx, len(movies), 1)
	if err != nil {
		t.Fatal(err)
	}

	// Assert movies are retrieved correctly
	if len(retrievedMovies) != len(movies) {
		t.Errorf("Expected %d movies, but got %d", len(movies), len(retrievedMovies))
	}
}
func TestUpdateMovie(t *testing.T) {
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
	movie := model.Movie{
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
	_, err = movieRepo.CreateMovie(ctx, &movie, imagePaths)
	if err != nil {
		t.Fatal(err)
	}

	testCases := []struct {
		name        string
		changeMovie model.Movie
		imagePaths  []string
		wantMovie   model.Movie
		wantErrCode string
	}{
		{
			name: "success - update movie",
			changeMovie: model.Movie{
				MovieID: movie.MovieID,
				Name:    "updatedName",
			},
			wantMovie: model.Movie{
				MovieID:       movie.MovieID,
				Name:          "updatedName",
				Director:      movie.Director,
				Summary:       movie.Summary,
				ThumbnailPath: movie.ThumbnailPath,
				Link:          movie.Link,
				Term:          movie.Term,
				ReleaseDate:   movie.ReleaseDate,
				EndDate:       movie.EndDate,
			},
			wantErrCode: "",
		},
		{
			name: "success - update all fields",
			changeMovie: model.Movie{
				MovieID:       movie.MovieID,
				Name:          "updatedName",
				Director:      "updatedDirector",
				Summary:       "updatedSummary",
				ThumbnailPath: "updatedThumbnailPath",
				Link:          "updatedLink",
				Term:          180,
				ReleaseDate:   time.Now(),
				EndDate:       time.Now(),
			},
			imagePaths: []string{
				"test1",
				"test2",
				"test3",
				"test4",
			},
			wantMovie: model.Movie{
				MovieID:       movie.MovieID,
				Name:          "updatedName",
				Director:      "updatedDirector",
				Summary:       "updatedSummary",
				ThumbnailPath: "updatedThumbnailPath",
				Link:          "updatedLink",
				Term:          180,
				ReleaseDate:   time.Now(),
				EndDate:       time.Now(),
			},
			wantErrCode: "",
		},
		{
			name: "success - update some fields",
			changeMovie: model.Movie{
				MovieID:  movie.MovieID,
				Name:     "updatedName2",
				Director: "updatedDirector2",
				Summary:  "updatedSummary2",
				EndDate:  time.Now(),
			},
			wantMovie: model.Movie{
				MovieID:       movie.MovieID,
				Name:          "updatedName2",
				Director:      "updatedDirector2",
				Summary:       "updatedSummary2",
				ThumbnailPath: "updatedThumbnailPath",
				Link:          "updatedLink",
				Term:          180,
				ReleaseDate:   movie.ReleaseDate,
				EndDate:       time.Now(),
			},
			wantErrCode: "",
		},
		{
			name: "fail - invalid term",
			changeMovie: model.Movie{
				MovieID:       movie.MovieID,
				Name:          "updatedName",
				Director:      "updatedDirector",
				Summary:       "updatedSummary",
				ThumbnailPath: "updatedThumbnailPath",
				Link:          "updatedLink",
				Term:          -1,
				ReleaseDate:   time.Now(),
				EndDate:       time.Now(),
			},
			wantMovie: model.Movie{
				MovieID:       movie.MovieID,
				Name:          "updatedName",
				Director:      "updatedDirector",
				Summary:       "updatedSummary",
				ThumbnailPath: "updatedThumbnailPath",
				Link:          "updatedLink",
				Term:          -1,
				ReleaseDate:   time.Now(),
				EndDate:       time.Now(),
			},
			wantErrCode: pgerrcode.CheckViolation,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			err := movieRepo.UpdateMovie(ctx, &tc.changeMovie, tc.imagePaths)
			if err != nil {
				var pgErr *pq.Error
				if errors.As(err, &pgErr) {
					if string(pgErr.Code) == tc.wantErrCode {
						t.Log(err)
						return
					}
					t.Errorf("got %v; want %v", err, tc.wantErrCode)
				}
			}

			updatedMovie, _, err := movieRepo.GetMovieByID(ctx, movie.MovieID)
			if err != nil {
				t.Fatal(err)
			}

			// Assert movie is updated correctly
			if updatedMovie.Name != tc.wantMovie.Name {
				t.Errorf("Expected movie name %s, but got %s", tc.wantMovie.Name, updatedMovie.Name)
			}

			if updatedMovie.Director != tc.wantMovie.Director {
				t.Errorf("Expected movie director %s, but got %s", tc.wantMovie.Director, updatedMovie.Director)
			}

			if updatedMovie.Summary != tc.wantMovie.Summary {
				t.Errorf("Expected movie summary %s, but got %s", tc.wantMovie.Summary, updatedMovie.Summary)
			}

			if updatedMovie.ThumbnailPath != tc.wantMovie.ThumbnailPath {
				t.Errorf("Expected movie thumbnail path %s, but got %s", tc.wantMovie.ThumbnailPath, updatedMovie.ThumbnailPath)
			}

			if updatedMovie.Link != tc.wantMovie.Link {
				t.Errorf("Expected movie link %s, but got %s", tc.wantMovie.Link, updatedMovie.Link)
			}

			if updatedMovie.Term != tc.wantMovie.Term {
				t.Errorf("Expected movie term %d, but got %d", tc.wantMovie.Term, updatedMovie.Term)
			}
		})
	}

}

func TestDeleteMovie(t *testing.T) {
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
	movie := model.Movie{
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
	_, err = movieRepo.CreateMovie(ctx, &movie, imagePaths)
	if err != nil {
		t.Fatal(err)
	}

	testCases := []struct {
		name        string
		userID      string
		wantErrCode error
	}{
		{
			name:        "success - delete movie",
			userID:      movie.MovieID,
			wantErrCode: nil,
		},
		{
			name:        "fail - invalid movie_id",
			userID:      "invalid",
			wantErrCode: herror.ErrResourceNotFound,
		},
		{
			name:        "fail - movie not found",
			userID:      "not found user",
			wantErrCode: herror.ErrResourceNotFound,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			err := movieRepo.DeleteMovie(ctx, tc.userID)
			if err != nil {
				if !errors.Is(err, tc.wantErrCode) {
					t.Error(err)
				}
			} else {
				_, _, err := movieRepo.GetMovieByID(ctx, tc.userID)
				if err != nil {
					if !errors.Is(err, herror.ErrResourceNotFound) {
						t.Error(err)
					}
				}
			}
		})
	}
}
