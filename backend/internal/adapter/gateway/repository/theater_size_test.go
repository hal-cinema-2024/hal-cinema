package repository_test

import (
	"context"
	"testing"

	"github.com/hal-cinema-2024/backend/internal/adapter/gateway/repository"
	"github.com/hal-cinema-2024/backend/internal/test"
	"gorm.io/gorm"
)

func TestGetTheaterSizeByID(t *testing.T) {
	if err := test.NewContainer(t); err != nil {
		t.Fatal(err)
	}

	db, err := invoke[*gorm.DB]()
	if err != nil {
		t.Fatal(err)
	}

	repo := repository.NewTheaterSizeRepo(db)

	testCases := []struct {
		name          string
		theaterSizeID string
		wantErr       error
	}{
		{
			name:          "success",
			theaterSizeID: "1",
			wantErr:       nil,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			theater, err := repo.GetTheaterSizeByID(context.Background(), tc.theaterSizeID)
			if err != nil {
				t.Error("failed to get theater ", err)
			}

			if theater.TheaterSizeID != tc.theaterSizeID {
				t.Errorf("expected theater size id %s, got %s", theater.TheaterSizeID, tc.theaterSizeID)
			}
		})
	}
}

func TestGetTheaterSizes(t *testing.T) {
	if err := test.NewContainer(t); err != nil {
		t.Fatal(err)
	}

	db, err := invoke[*gorm.DB]()
	if err != nil {
		t.Fatal(err)
	}

	repo := repository.NewTheaterSizeRepo(db)

	theaters, err := repo.GetTheaterSizes(context.Background())
	if err != nil {
		t.Error("failed to get theaters ", err)
	}

	if len(theaters) == 0 {
		t.Error("expected theaters, got none")
	}

}
