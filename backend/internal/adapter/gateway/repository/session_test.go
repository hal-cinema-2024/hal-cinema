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

func TestSyncSession(t *testing.T) {
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

	sessionRepo := repository.NewSessionRepo(db)

	user1 := factrues.User.Create(model.User{
		UserID:    uuid.NewString(),
		Email:     "test.hal.cinema.1@example.com",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
		IsDelete:  false,
	})

	user2 := factrues.User.Create(model.User{
		UserID:    uuid.NewString(),
		Email:     "test.hal.cinema.2@example.com",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
		IsDelete:  false,
	})

	session1 := factrues.Session.Create(model.Session{
		SessionID:      uuid.NewString(),
		UserAgent:      "test-user-agent",
		UserID:         user1.UserID,
		Token:          "test-token",
		ExpirationTime: int32(time.Now().Add(time.Hour * 1).Unix()),
	})

	testCases := []struct {
		name        string
		session     model.Session
		wantErrCode string
	}{
		{
			name: "success - already exist session",
			session: model.Session{
				SessionID:      session1.SessionID,
				UserAgent:      session1.UserAgent,
				UserID:         session1.UserID,
				Token:          "new-test-token",
				ExpirationTime: int32(time.Now().Add(time.Hour * 2).Unix()),
			},
			wantErrCode: "",
		},
		{
			name: "success - newSession  session",
			session: model.Session{
				SessionID:      uuid.NewString(),
				UserAgent:      "test-user-agent",
				UserID:         user2.UserID,
				Token:          "test-token",
				ExpirationTime: int32(time.Now().Add(time.Hour * 24).Unix()),
			},
			wantErrCode: "",
		},
		{
			name: "fail - user not found",
			session: model.Session{
				SessionID:      uuid.NewString(),
				UserAgent:      "test-user-agent",
				UserID:         user2.UserID,
				Token:          "test-token",
				ExpirationTime: int32(time.Now().Add(time.Hour * 24).Unix()),
			},
			wantErrCode: pgerrcode.ForeignKeyViolation,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			session, err := sessionRepo.SyncSession(context.Background(), &tc.session)
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

			if session.SessionID != tc.session.SessionID {
				t.Errorf("got %v; want %v", session.SessionID, tc.session.SessionID)
			}

			if session.UserID != tc.session.UserID {
				t.Errorf("got %v; want %v", session.UserID, tc.session.UserID)
			}

			if session.Token != tc.session.Token {
				t.Errorf("got %v; want %v", session.Token, tc.session.Token)
			}

			if session.ExpirationTime == 0 {
				t.Errorf("got %v; want %v", session.ExpirationTime, tc.session.ExpirationTime)
			}

		})
	}
}

func TestGetSessionByID(t *testing.T) {
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

	sessionRepo := repository.NewSessionRepo(db)

	user := factrues.User.Create(model.User{
		UserID:    uuid.NewString(),
		Email:     "test.hal.cinema.1@example.com",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
		IsDelete:  false,
	})

	session := factrues.Session.Create(model.Session{
		SessionID:      uuid.NewString(),
		UserAgent:      "test-user-agent",
		UserID:         user.UserID,
		Token:          "test-token",
		ExpirationTime: int32(time.Now().Add(time.Hour * 1).Unix()),
	})

	testCases := []struct {
		name        string
		sessionID   string
		wantSession model.Session
		found       bool
		wantErrCode string
	}{
		{
			name:      "success",
			sessionID: session.SessionID,
			wantSession: model.Session{
				SessionID:      session.SessionID,
				UserAgent:      session.UserAgent,
				UserID:         session.UserID,
				Token:          session.Token,
				ExpirationTime: session.ExpirationTime,
			},
			found:       true,
			wantErrCode: "",
		},
		{
			name:        "fail - session not found",
			sessionID:   uuid.NewString(),
			wantSession: model.Session{},
			found:       false,
			wantErrCode: "",
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			session, err := sessionRepo.GetSessionByID(context.Background(), tc.sessionID, session.UserAgent)
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

			if errors.Is(err, herror.ErrResourceNotFound) == tc.found {
				t.Fatalf("got %v; want %v", errors.Is(err, herror.ErrResourceNotFound), tc.found)
			}

			if !errors.Is(err, herror.ErrResourceNotFound) {
				if session.SessionID != tc.wantSession.SessionID {
					t.Errorf("got %v; want %v", session.SessionID, tc.wantSession.SessionID)
				}
				if session.UserID != tc.wantSession.UserID {
					t.Errorf("got %v; want %v", session.UserID, tc.wantSession.UserID)
				}
				if session.Token != tc.wantSession.Token {
					t.Errorf("got %v; want %v", session.Token, tc.wantSession.Token)
				}
			}
		})
	}
}
