package google

import (
	"context"
	"time"

	"github.com/google/uuid"
	"github.com/hal-cinema-2024/backend/internal/adapter/gateways/authz"
	"github.com/hal-cinema-2024/backend/internal/adapter/gateways/model"
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
)

type Login struct {
	authz        authz.OAuth2
	Repositories dai.DataAccess
}

func NewGoogleLogin(
	authz authz.OAuth2,
) *Login {
	return &Login{
		authz: authz,
	}
}

type LoginResult struct {
	SessionID string
	UserID    string
	Icon      string
}

func (gl *Login) Login(ctx context.Context, authorizationCode string) (*LoginResult, error) {
	token, err := gl.authz.FetchToken(ctx, authorizationCode)
	if err != nil {
		return nil, err
	}

	userInfo, err := gl.authz.GetUserInfo(ctx, token)
	if err != nil {
		return nil, err
	}

	// userが存在するかチェック
	found, err := gl.Repositories.ValidUser(ctx, userInfo.UserID)
	if err != nil {
		return nil, err
	}

	// 居ないなら作る
	if !found {
		_, err := gl.Repositories.CreateUser(ctx, &model.User{
			UserID:    userInfo.UserID,
			Email:     userInfo.Email,
			IconPath:  userInfo.Icon,
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
			IsDelete:  false,
		})

		if err != nil {
			return nil, err
		}
	}

	sessionID, err := uuid.NewRandom()
	if err != nil {
		return nil, err
	}

	// Tokenを更新
	_, err = gl.Repositories.SyncSession(ctx, &model.Session{
		SessionID:    sessionID.String(),
		UserID:       userInfo.UserID,
		Token:        token.AccessToken,
		ExpirationTime: int32(token.Expiry.Unix()),
		RefreshToken: token.RefreshToken,
	})

	if err != nil {
		return nil, err
	}

	return &LoginResult{
		SessionID: sessionID.String(),
		UserID:    userInfo.UserID,
		Icon:      userInfo.Icon,
	}, nil
}
