package repository_test

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/google/uuid"
	"github.com/hal-cinema-2024/backend/internal/adapter/gateway/repository"
	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/test"
	"github.com/hal-cinema-2024/backend/internal/test/factory"
	"github.com/jackc/pgerrcode"
	"github.com/lib/pq"
	"gorm.io/gorm"
)

func TestCreateUser(t *testing.T) {
	if err := test.NewContainer(t); err != nil {
		t.Fatal(err)
	}

	db, err := invoke[*gorm.DB]()
	if err != nil {
		t.Fatal(err)
	}

	factrues, err := invoke[*factory.Factories]()
	if err != nil {
		t.Fatal(err)
	}

	userRepo := repository.NewUserRepo(db)

	user := factrues.User.Create(model.User{
		UserID:    uuid.NewString(),
		Email:     "test.hal.cinema@example.com",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
		IsDelete:  false,
	})

	testCases := []struct {
		name        string
		user        model.User
		wantErrCode string
	}{
		{
			name: "success",
			user: model.User{
				UserID:    uuid.NewString(),
				Email:     "test.hal.cinema.1@example.com",
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
				IsDelete:  false,
			},
			wantErrCode: "",
		},
		{
			name: "duplicate email",
			user: model.User{
				UserID:    uuid.NewString(),
				Email:     user.Email,
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
				IsDelete:  false,
			},
			wantErrCode: pgerrcode.UniqueViolation,
		},
		{
			name: "duplicate user_id",
			user: model.User{
				UserID:    user.UserID,
				Email:     "test.hal.cinema.2@example.com",
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
				IsDelete:  false,
			},
			wantErrCode: pgerrcode.UniqueViolation,
		},
		{
			name: "null email",
			user: model.User{
				UserID:    uuid.NewString(),
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
				IsDelete:  false,
			},
			wantErrCode: pgerrcode.NotNullViolation,
		},
		{
			name: "null user_id",
			user: model.User{
				Email:     "test.hal.cinema.3@example.com",
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
				IsDelete:  false,
			},
			wantErrCode: pgerrcode.NotNullViolation,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			_, err := userRepo.CreateUser(context.Background(), &tc.user)
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

func TestGetUserByIDAndValidUser(t *testing.T) {
	if err := test.NewContainer(t); err != nil {
		t.Fatal(err)
	}

	db, err := invoke[*gorm.DB]()
	if err != nil {
		t.Fatal(err)
	}

	factrues, err := invoke[*factory.Factories]()
	if err != nil {
		t.Fatal(err)
	}

	userRepo := repository.NewUserRepo(db)
	user := factrues.User.Create(
		model.User{
			UserID:    uuid.NewString(),
			Email:     "test.hal.cinema.1@example.com",
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
			IsDelete:  false,
		},
	)

	testCases := []struct {
		name        string
		userID      string
		wantUser    model.User
		isFound     bool
		wantErrCode string
	}{
		{
			name:     "found user",
			userID:   user.UserID,
			wantUser: *user,
			isFound:  true,
		},
		{
			name:     "not found user",
			userID:   "1",
			wantUser: model.User{},
			isFound:  false,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			found, err := userRepo.ValidUser(context.Background(), tc.userID)
			if err != nil {
				t.Fatal(err)
			}

			if found != tc.isFound {
				t.Fatalf("got %v; want %v", found, tc.isFound)
			}

			user, err := userRepo.GetUserByID(context.Background(), tc.userID)
			if err != nil {
				t.Fatal(err)
			}

			if user.UserID != tc.wantUser.UserID {
				t.Fatalf("got %v; want %v", user.UserID, tc.wantUser.UserID)
			}

			if user.Email != tc.wantUser.Email {
				t.Fatalf("got %v; want %v", user.Email, tc.wantUser.Email)
			}

			if user.IsDelete != tc.wantUser.IsDelete {
				t.Fatalf("got %v; want %v", user.IsDelete, tc.wantUser.IsDelete)
			}

		})
	}
}
