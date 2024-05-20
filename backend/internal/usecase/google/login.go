package google

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/gateways/authz"
)

type Login struct {
	authz authz.OAuth2
}

func NewGoogleLogin(
	authz authz.OAuth2,
) *Login {
	return &Login{
		authz: authz,
	}
}

func (gl *Login) Login(ctx context.Context, authorizationCode string) (*authz.UserInfo, error) {
	token, err := gl.authz.FetchToken(ctx, authorizationCode)
	if err != nil {
		return nil, err
	}

	userInfo, err := gl.authz.GetUserInfo(ctx, token)
	if err != nil {
		return nil, err
	}

	// TODO: Tokenを保存する

	return userInfo, nil
}
