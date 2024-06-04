package interactor

import (
	"context"
	"errors"
	"time"

	"github.com/google/uuid"
	"github.com/hal-cinema-2024/backend/internal/adapter/gateway/authz"
	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/framework/herror"
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
)

type GoogleLogin struct {
	authz        authz.OAuth2
	repositories dai.DataAccess
}

func NewGoogleLogin(
	authz authz.OAuth2,
	repositories dai.DataAccess,
) *GoogleLogin {
	return &GoogleLogin{
		authz:        authz,
		repositories: repositories,
	}
}

type LoginResult struct {
	SessionID string
	UserID    string
	Icon      string
}

func (gl *GoogleLogin) Login(ctx context.Context, authorizationCode, userAgent string) (*LoginResult, error) {
	token, err := gl.authz.FetchToken(ctx, authorizationCode)
	if err != nil {
		return nil, err
	}

	userInfo, err := gl.authz.GetUserInfo(ctx, token)
	if err != nil {
		return nil, err
	}

	var found bool = true
	// userが存在するかチェック
	_, err = gl.repositories.GetUserByID(ctx, userInfo.UserID)
	if err != nil {
		if !errors.Is(err, herror.ErrResourceNotFound) {
			return nil, nil
		}
		found = false
	}

	sessionID, err := uuid.NewRandom()
	if err != nil {
		return nil, err
	}

	if err := gl.repositories.Transaction(ctx, func(ctx context.Context, da dai.DataAccess) error {
		// 居ないなら作る
		if !found {
			_, err := gl.repositories.CreateUser(ctx, &model.User{
				UserID:    userInfo.UserID,
				Email:     userInfo.Email,
				IconPath:  userInfo.Icon,
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
				IsDelete:  false,
			})

			if err != nil {
				return err
			}
		}

		// Tokenを更新
		_, err = gl.repositories.SyncSession(ctx, &model.Session{
			SessionID:      sessionID.String(),
			UserAgent:      userAgent,
			UserID:         userInfo.UserID,
			Token:          token.AccessToken,
			ExpirationTime: int32(token.Expiry.Unix()),
			RefreshToken:   token.RefreshToken,
		})

		if err != nil {
			return err
		}

		return nil
	}); err != nil {
		return nil, err
	}

	return &LoginResult{
		SessionID: sessionID.String(),
		UserID:    userInfo.UserID,
		Icon:      userInfo.Icon,
	}, nil
}
