package container

import (
	"github.com/hal-cinema-2024/backend/internal/adapter/gateway/authz"
	googleAuth "github.com/hal-cinema-2024/backend/internal/adapter/gateway/authz/google"
	"github.com/hal-cinema-2024/backend/internal/adapter/gateway/repository"
	"github.com/hal-cinema-2024/backend/internal/driver/db"
	"github.com/hal-cinema-2024/backend/internal/framework/cookie"
	"github.com/hal-cinema-2024/backend/internal/usecase/interactor/google"
	"go.uber.org/dig"
)

var container *dig.Container

type provideArg struct {
	constructor any
	opts        []dig.ProvideOption
}

func NewContainer() error {
	container = dig.New()

	args := []provideArg{
		{constructor: googleAuth.DefaultOAuth2Config, opts: []dig.ProvideOption{}},
		{constructor: db.Connect, opts: []dig.ProvideOption{}},
		{constructor: db.NewGORM, opts: []dig.ProvideOption{}},
		{constructor: cookie.DefaultCookieOptions, opts: []dig.ProvideOption{}},
		{constructor: cookie.NewCoockieSetter, opts: []dig.ProvideOption{}},
		{constructor: googleAuth.NewOAuth, opts: []dig.ProvideOption{dig.As(new(authz.OAuth2))}},
		{constructor: repository.NewGormRepo, opts: []dig.ProvideOption{}},
		{constructor: google.NewGoogleLogin, opts: []dig.ProvideOption{}},
	}

	for _, arg := range args {
		if err := container.Provide(arg.constructor, arg.opts...); err != nil {
			return err
		}
	}

	return nil
}

func Invoke[T any]() T {
	var r T
	if err := container.Invoke(func(t T) error {
		r = t
		return nil
	}); err != nil {
		panic(err)
	}

	return r
}
