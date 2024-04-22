package internal

import (
	"database/sql"
	"net/http"

	"github.com/hal-cinema-2024/backend/internal/router"
	"go.uber.org/dig"
)

var Container *dig.Container

type provideArg struct {
	constructor any
	opts        []dig.ProvideOption
}

func NewContainer() (http.Handler, *sql.DB) {
	Container = dig.New()

	args := []provideArg{
		// {constructor: db.Connect, opts: []dig.ProvideOption{}},
		{constructor: router.NewRouter, opts: []dig.ProvideOption{}},
	}

	for _, arg := range args {
		if err := Container.Provide(arg.constructor, arg.opts...); err != nil {
			panic(err)
		}
	}

	var (
		srv http.Handler
		db  *sql.DB
	)
	Container.Invoke(func(h http.Handler) {
		srv = h
	})
	Container.Invoke(func(d *sql.DB) {
		db = d
	})

	return srv, db
}
