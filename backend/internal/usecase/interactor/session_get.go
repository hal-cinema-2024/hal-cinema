package interactor

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/framework/herror"
)

func (ui *SessionInteractor) GetUserBySessionID(ctx context.Context, sessionID, userAgent string) (*model.User, error) {
	session, err := ui.Repositories.GetSessionByID(ctx, sessionID, userAgent)
	if err != nil {
		return nil, err
	}

	// check expire time(int)
	if int(session.ExpirationTime) < int(time.Now().Unix()) {
		return nil, err
	}

	user, err := ui.Repositories.GetUserByID(ctx, session.UserID)
	if err != nil {
		if !errors.Is(err, herror.ErrResourceNotFound) {
			return nil, err
		}
		return nil, fmt.Errorf("user not found")
	}
	return user, nil
}
