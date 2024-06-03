package interactor

import (
	"context"
	"fmt"
	"time"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

func (ui *SessionInteractor) GetUserBySessionID(ctx context.Context, sessionID string) (*model.User, error) {
	session, found, err := ui.Repositories.GetSessionByID(ctx, sessionID)
	if err != nil {
		return nil, err
	}

	if !found {
		return nil, fmt.Errorf("session not found")
	}

	// check expire time(int)
	if int(session.ExpirationTime) < int(time.Now().Unix()) {
		return nil, err
	}

	user, err := ui.Repositories.GetUserByID(ctx, session.UserID)
	if err != nil {
		return nil, err
	}

	return user, nil
}
