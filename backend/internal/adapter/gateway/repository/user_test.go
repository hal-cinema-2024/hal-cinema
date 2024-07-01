package repository_test

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/google/uuid"
	"github.com/hal-cinema-2024/backend/internal/adapter/gateway/repository"
	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/framework/herror"
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

	factories, err := invoke[*factory.Factories]()
	if err != nil {
		t.Fatal(err)
	}

	userRepo := repository.NewUserRepo(db)

	user := factories.User.Create(model.User{
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

func TestGetUsers(t *testing.T) {
	if err := test.NewContainer(t); err != nil {
		t.Fatal(err)
	}

	db, err := invoke[*gorm.DB]()
	if err != nil {
		t.Fatal(err)
	}

	factories, err := invoke[*factory.Factories]()
	if err != nil {
		t.Fatal(err)
	}

	userRepo := repository.NewUserRepo(db)
	user1 := factories.User.Create(
		model.User{
			UserID:           uuid.NewString(),
			Email:            "test.hal.cinema.1@example.com",
			FirstName:        "first name",
			LastName:         "last name",
			FirstNameReading: "first name reading",
			LastNameReading:  "last name reading",
			Age:              10,
			Gender:           0,
			CreatedAt:        time.Now(),
			UpdatedAt:        time.Now(),
			IsDelete:         false,
		},
	)
	user2 := factories.User.Create(
		model.User{
			UserID:           uuid.NewString(),
			Email:            "test.hal.cinema.2@example.com",
			FirstName:        "first name",
			LastName:         "last name",
			FirstNameReading: "first name reading",
			LastNameReading:  "last name reading",
			Age:              10,
			Gender:           0,
			CreatedAt:        time.Now(),
			UpdatedAt:        time.Now(),
			IsDelete:         false,
		},
	)

	testCases := []struct {
		name      string
		wantUsers []model.User
	}{
		{
			name: "success",
			wantUsers: []model.User{
				*user1,
				*user2,
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			_, err := userRepo.GetUsers(context.Background(), 0, 10)
			if err != nil {
				t.Fatal(err)
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

	factories, err := invoke[*factory.Factories]()
	if err != nil {
		t.Fatal(err)
	}

	userRepo := repository.NewUserRepo(db)
	user := factories.User.Create(
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
			user, err := userRepo.GetUserByID(context.Background(), tc.userID)
			if err != nil {
				if !errors.Is(err, herror.ErrResourceNotFound) {
					t.Fatal(err)
				}
			}

			if errors.Is(err, herror.ErrResourceNotFound) == tc.isFound {
				t.Fatalf("got %v; want %v", errors.Is(err, herror.ErrResourceNotFound), tc.isFound)
			}

			if !errors.Is(err, herror.ErrResourceNotFound) {
				if user.UserID != tc.wantUser.UserID {
					t.Fatalf("got %v; want %v", user.UserID, tc.wantUser.UserID)
				}

				if user.Email != tc.wantUser.Email {
					t.Fatalf("got %v; want %v", user.Email, tc.wantUser.Email)
				}

				if user.IsDelete != tc.wantUser.IsDelete {
					t.Fatalf("got %v; want %v", user.IsDelete, tc.wantUser.IsDelete)
				}
			}
		})
	}
}

func TestUpdateUser(t *testing.T) {
	if err := test.NewContainer(t); err != nil {
		t.Fatal(err)
	}

	db, err := invoke[*gorm.DB]()
	if err != nil {
		t.Fatal(err)
	}

	factories, err := invoke[*factory.Factories]()
	if err != nil {
		t.Fatal(err)
	}

	userRepo := repository.NewUserRepo(db)
	user1 := factories.User.Create(
		model.User{
			UserID:           uuid.NewString(),
			Email:            "test.hal.cinema.1@example.com",
			FirstName:        "first name",
			LastName:         "last name",
			FirstNameReading: "first name reading",
			LastNameReading:  "last name reading",
			Age:              10,
			Gender:           0,
			CreatedAt:        time.Now(),
			UpdatedAt:        time.Now(),
			IsDelete:         false,
		},
	)
	user2 := factories.User.Create(
		model.User{
			UserID:           uuid.NewString(),
			Email:            "test.hal.cinema.2@example.com",
			FirstName:        "first name",
			LastName:         "last name",
			FirstNameReading: "first name reading",
			LastNameReading:  "last name reading",
			Age:              10,
			Gender:           0,
			CreatedAt:        time.Now(),
			UpdatedAt:        time.Now(),
			IsDelete:         false,
		},
	)
	user3 := factories.User.Create(
		model.User{
			UserID:           uuid.NewString(),
			Email:            "test.hal.cinema.3@example.com",
			FirstName:        "first name",
			LastName:         "last name",
			FirstNameReading: "first name reading",
			LastNameReading:  "last name reading",
			Age:              10,
			Gender:           0,
			CreatedAt:        time.Now(),
			UpdatedAt:        time.Now(),
			IsDelete:         false,
		},
	)
	user4 := factories.User.Create(
		model.User{
			UserID:           uuid.NewString(),
			Email:            "test.hal.cinema.4@example.com",
			FirstName:        "first name",
			LastName:         "last name",
			FirstNameReading: "first name reading",
			LastNameReading:  "last name reading",
			Age:              10,
			Gender:           0,
			CreatedAt:        time.Now(),
			UpdatedAt:        time.Now(),
			IsDelete:         false,
		},
	)
	user5 := factories.User.Create(
		model.User{
			UserID:           uuid.NewString(),
			Email:            "test.hal.cinema.5@example.com",
			FirstName:        "first name",
			LastName:         "last name",
			FirstNameReading: "first name reading",
			LastNameReading:  "last name reading",
			Age:              10,
			Gender:           0,
			CreatedAt:        time.Now(),
			UpdatedAt:        time.Now(),
			IsDelete:         false,
		},
	)
	user6 := factories.User.Create(
		model.User{
			UserID:           uuid.NewString(),
			Email:            "test.hal.cinema.6@example.com",
			FirstName:        "first name",
			LastName:         "last name",
			FirstNameReading: "first name reading",
			LastNameReading:  "last name reading",
			Age:              10,
			Gender:           0,
			CreatedAt:        time.Now(),
			UpdatedAt:        time.Now(),
			IsDelete:         false,
		},
	)
	user7 := factories.User.Create(
		model.User{
			UserID:           uuid.NewString(),
			Email:            "test.hal.cinema.7@example.com",
			FirstName:        "first name",
			LastName:         "last name",
			FirstNameReading: "first name reading",
			LastNameReading:  "last name reading",
			Age:              10,
			Gender:           0,
			CreatedAt:        time.Now(),
			UpdatedAt:        time.Now(),
			IsDelete:         false,
		},
	)
	testCases := []struct {
		name       string
		changeUser model.User
		wantUser   model.User
		wantErr    error
	}{
		{
			name: "success - change first name",
			changeUser: model.User{
				UserID:    user1.UserID,
				FirstName: "changed first name",
			},
			wantUser: model.User{
				UserID:           user1.UserID,
				FirstName:        "changed first name",
				LastName:         user1.LastName,
				FirstNameReading: user1.FirstNameReading,
				LastNameReading:  user1.LastNameReading,
				Age:              user1.Age,
				Gender:           user1.Gender,
				UpdatedAt:        time.Now(),
			},
			wantErr: nil,
		},
		{
			name: "success - change last name",
			changeUser: model.User{
				UserID:   user2.UserID,
				LastName: "changed last name",
			},
			wantUser: model.User{
				UserID:           user2.UserID,
				FirstName:        user2.FirstName,
				LastName:         "changed last name",
				FirstNameReading: user2.FirstNameReading,
				LastNameReading:  user2.LastNameReading,
				Age:              user2.Age,
				Gender:           user2.Gender,
				UpdatedAt:        time.Now(),
			},
			wantErr: nil,
		},
		{
			name: "success - change first name reading",
			changeUser: model.User{
				UserID:           user3.UserID,
				FirstNameReading: "changed first name reading",
			},
			wantUser: model.User{
				UserID:           user3.UserID,
				FirstName:        user3.FirstName,
				LastName:         user3.LastName,
				FirstNameReading: "changed first name reading",
				LastNameReading:  user3.LastNameReading,
				Age:              user3.Age,
				Gender:           user3.Gender,
				UpdatedAt:        time.Now(),
			},
			wantErr: nil,
		},
		{
			name: "success - change last name reading",
			changeUser: model.User{
				UserID:          user4.UserID,
				LastNameReading: "changed last name reading",
			},
			wantUser: model.User{
				UserID:           user4.UserID,
				FirstName:        user4.FirstName,
				LastName:         user4.LastName,
				FirstNameReading: user4.FirstNameReading,
				LastNameReading:  "changed last name reading",
				Age:              user4.Age,
				Gender:           user4.Gender,
				UpdatedAt:        time.Now(),
			},
			wantErr: nil,
		},
		{
			name: "success - change age",
			changeUser: model.User{
				UserID: user5.UserID,
				Age:    20,
			},
			wantUser: model.User{
				UserID:           user5.UserID,
				FirstName:        user5.FirstName,
				LastName:         user5.LastName,
				FirstNameReading: user5.FirstNameReading,
				LastNameReading:  user5.LastNameReading,
				Age:              20,
				Gender:           user5.Gender,
				UpdatedAt:        time.Now(),
			},
			wantErr: nil,
		},
		{
			name: "success - change gender",
			changeUser: model.User{
				UserID: user6.UserID,
				Gender: 1,
			},
			wantUser: model.User{
				UserID:           user6.UserID,
				FirstName:        user6.FirstName,
				LastName:         user6.LastName,
				FirstNameReading: user6.FirstNameReading,
				LastNameReading:  user6.LastNameReading,
				Age:              user6.Age,
				Gender:           1,
				UpdatedAt:        time.Now(),
			},
			wantErr: nil,
		},
		{
			name: "success - no change",
			changeUser: model.User{
				UserID: user7.UserID,
			},
			wantUser: model.User{
				UserID:           user7.UserID,
				FirstName:        user7.FirstName,
				LastName:         user7.LastName,
				FirstNameReading: user7.FirstNameReading,
				LastNameReading:  user7.LastNameReading,
				Age:              user7.Age,
				Gender:           user7.Gender,
				UpdatedAt:        time.Now(),
			},
			wantErr: herror.ErrNoChange,
		},
		{
			name: "failed - no found user",
			changeUser: model.User{
				UserID:    "not found user",
				FirstName: user7.FirstName,
			},
			wantUser: model.User{},
			wantErr:  herror.ErrResourceNotFound,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			user, err := userRepo.UpdateUser(context.Background(), tc.changeUser.UserID, &tc.changeUser)
			if err != nil {
				if !errors.Is(err, tc.wantErr) {
					t.Fatalf("got %v; want %v", err, tc.wantErr)
				}

				if !errors.Is(err, herror.ErrNoChange) && !errors.Is(err, herror.ErrResourceNotFound) {
					t.Fatal(err)
				}
				return
			}

			if user.UserID != tc.wantUser.UserID {
				t.Fatalf("got %v; want %v", user.UserID, tc.wantUser.UserID)
			}
			if user.FirstName != tc.wantUser.FirstName {
				t.Fatalf("got %v; want %v", user.FirstName, tc.wantUser.FirstName)
			}
			if user.LastName != tc.wantUser.LastName {
				t.Fatalf("got %v; want %v", user.LastName, tc.wantUser.LastName)
			}
			if user.FirstNameReading != tc.wantUser.FirstNameReading {
				t.Fatalf("got %v; want %v", user.FirstNameReading, tc.wantUser.FirstNameReading)
			}
			if user.LastNameReading != tc.wantUser.LastNameReading {
				t.Fatalf("got %v; want %v", user.LastNameReading, tc.wantUser.LastNameReading)
			}
			if user.Age != tc.wantUser.Age {
				t.Fatalf("got %v; want %v", user.Age, tc.wantUser.Age)
			}
			if user.Gender != tc.wantUser.Gender {
				t.Fatalf("got %v; want %v", user.Gender, tc.wantUser.Gender)
			}
			if user.UpdatedAt.IsZero() {
				t.Fatalf("got %v; want %v", user.UpdatedAt, tc.wantUser.UpdatedAt)
			}
		})
	}
}

func TestDeleteUser(t *testing.T) {
	if err := test.NewContainer(t); err != nil {
		t.Fatal(err)
	}

	db, err := invoke[*gorm.DB]()
	if err != nil {
		t.Fatal(err)
	}

	factories, err := invoke[*factory.Factories]()
	if err != nil {
		t.Fatal(err)
	}

	userRepo := repository.NewUserRepo(db)
	user := factories.User.Create(
		model.User{
			UserID:    uuid.NewString(),
			Email:     "test.hal.cinema.1@example.com",
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
			IsDelete:  false,
		},
	)

	testCases := []struct {
		name    string
		userID  string
		wantErr error
	}{
		{
			name:    "success - delete user",
			userID:  user.UserID,
			wantErr: nil,
		},
		{
			name:    "failed - no found user",
			userID:  "not found user",
			wantErr: herror.ErrResourceNotFound,
		},
		{
			name:    "failed - user is delete",
			userID:  user.UserID,
			wantErr: herror.ErrResourceNotFound,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			err := userRepo.DeleteUser(context.Background(), tc.userID)
			if err != nil {
				if !errors.Is(err, tc.wantErr) {
					t.Error(err)
				}
			} else {
				_, err := userRepo.GetUserByID(context.Background(), tc.userID)
				if err != nil {
					if !errors.Is(err, herror.ErrResourceDeleted) {
						t.Error(err)
					}
					return
				}
			}
		})
	}
}
