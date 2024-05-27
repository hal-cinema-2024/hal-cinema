package google

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/adapter/gateways/authz"
	"golang.org/x/oauth2"
	v2 "google.golang.org/api/oauth2/v2"
	"google.golang.org/api/option"
)

type OAuth2 struct {
	oac oauth2.Config
}

func NewOAuth(oac oauth2.Config) *OAuth2 {
	return &OAuth2{
		oac: oac,
	}
}

func (o *OAuth2) FetchToken(ctx context.Context, code string) (*oauth2.Token, error) {
	token, err := o.oac.Exchange(ctx, code)
	if err != nil {
		return nil, err
	}

	return token, nil
}

func (o *OAuth2) GetUserInfo(ctx context.Context, token *oauth2.Token) (*authz.UserInfo, error) {
	client := o.oac.Client(ctx, token)

	service, err := v2.NewService(ctx, option.WithHTTPClient(client))
	if err != nil {
		return nil, err
	}

	googleUser, err := service.Userinfo.V2.Me.Get().Context(ctx).Do()
	if err != nil {
		return nil, err
	}

	return &authz.UserInfo{
		UserID: googleUser.Id,
		Email:  googleUser.Email,
		Icon:   googleUser.Picture,
	}, nil
}

var _ authz.OAuth2 = (*OAuth2)(nil)
