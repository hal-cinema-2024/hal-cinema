package repository_test

import (
	"context"
	"testing"

	"github.com/hal-cinema-2024/backend/internal/adapter/gateway/repository"
	"github.com/hal-cinema-2024/backend/internal/test"
	"gorm.io/gorm"
)

func TestGetTheaterByID(t *testing.T) {
	if err := test.NewContainer(t); err != nil {
		t.Fatal(err)
	}

	db, err := invoke[*gorm.DB]()
	if err != nil {
		t.Fatal(err)
	}

	repo := repository.NewTheaterRepo(db)

	testCases := []struct {
		name      string
		theaterID string
		wantErr   error
	}{
		{
			name:      "success",
			theaterID: "1",
			wantErr:   nil,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			_, err := repo.GetTheaterByID(context.Background(), tc.theaterID)
			if err != tc.wantErr {
				t.Errorf("expected error %v, got %v", tc.wantErr, err)
			}
		})
	}
}

func TestGetTheatersByID(t *testing.T) {
	if err := test.NewContainer(t); err != nil {
		t.Fatal(err)
	}

	db, err := invoke[*gorm.DB]()
	if err != nil {
		t.Fatal(err)
	}

	repo := repository.NewTheaterRepo(db)

	testCases := []struct {
		name       string
		theaterIDs []string
		wantLen    int
	}{
		{
			name:       "success",
			theaterIDs: []string{"1"},
			wantLen:    1,
		},
		{
			name:       "success",
			theaterIDs: []string{"1", "2"},
			wantLen:    2,
		},
		{
			name:       "success",
			theaterIDs: []string{"1", "2", "3"},
			wantLen:    3,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			_, err := repo.GetTheatersByID(context.Background(), tc.theaterIDs)
			if err != nil {
				t.Errorf("expected error %v", err)
			}

			if len(tc.theaterIDs) != tc.wantLen {
				t.Errorf("expected length %d, got %d", tc.wantLen, len(tc.theaterIDs))
			}
		})
	}
}
