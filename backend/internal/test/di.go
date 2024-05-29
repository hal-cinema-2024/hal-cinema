package test

import (
	"testing"

	"github.com/hal-cinema-2024/backend/internal/driver/db"
	"github.com/hal-cinema-2024/backend/internal/test/factory"
	"go.uber.org/dig"
)

var container *dig.Container

type provideArg struct {
	constructor any
	opts        []dig.ProvideOption
}

func NewContainer(t *testing.T) error {
	container = dig.New()

	args := []provideArg{
		{constructor: db.Connect, opts: []dig.ProvideOption{}},
		{constructor: db.NewGORM, opts: []dig.ProvideOption{}},
		{constructor: factory.NewFactories(t), opts: []dig.ProvideOption{}},
	}

	for _, arg := range args {
		if err := container.Provide(arg.constructor, arg.opts...); err != nil {
			return err
		}
	}

	return nil
}

func Invoke(f any) error {
	return container.Invoke(f)
}