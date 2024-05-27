package repository_test

import (
	"context"
	"testing"
	"time"

	"github.com/google/uuid"
	"github.com/hal-cinema-2024/backend/internal/adapter/gateways/model"
	"github.com/hal-cinema-2024/backend/internal/adapter/gateways/repository"
	"gorm.io/gorm"
)

func TestCreateUser(t *testing.T) {
	db, err := invoke[*gorm.DB]()
	if err != nil {
		t.Fatal(err)
	}

	userRepo := repository.NewUserRepo(db)

	user, err := userRepo.CreateUser(context.Background(), &model.User{
		UserID:    uuid.NewString(),
		Email:     "test.1@example.com",
		IconPath:  "https://example.com/icon.png",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
		IsDelete:  false,
	})
	if err != nil {
		t.Fatal(err)
	}

	testCases := []struct {
		name    string
		user    *model.User
		wantErr error
	}{
		{
			name: "success",
			user: &model.User{
				UserID:    uuid.NewString(),
				Email:     "test.2@example.com",
				IconPath:  "https://example.com/icon.png",
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
				IsDelete:  false,
			},
			wantErr: nil,
		},
		{
			name: "failed_deplicated_email",
			user: &model.User{
				UserID:    uuid.NewString(),
				Email:     user.Email,
				IconPath:  "https://example.com/icon.png",
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
				IsDelete:  false,
			},
			wantErr: nil,
		},
		{
			name: "failed_deplicated_user_id",
			user: &model.User{
				UserID:    user.UserID,
				Email:     "test.2@example.com",
				IconPath:  "https://example.com/icon.png",
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
				IsDelete:  false,
			},
			wantErr: gorm.ErrDuplicatedKey,
		},
		{
			name: "failed_unknown_key",
			user: &model.User{
				Email:     "test.2@example.com",
				IconPath:  "https://example.com/icon.png",
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
				IsDelete:  false,
			},
			wantErr: gorm.ErrPrimaryKeyRequired,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			_, err := userRepo.CreateUser(context.Background(), tc.user)
			if err != tc.wantErr {
				t.Errorf("CreateUser() error = %v, wantErr %v", err, tc.wantErr)
			}
		})
	}
}
