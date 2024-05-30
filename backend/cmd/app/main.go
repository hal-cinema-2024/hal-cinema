package main

import (
	"context"
	"database/sql"
	"flag"
	"net/http"
	"strings"

	"github.com/hal-cinema-2024/backend/pkg/log"

	"github.com/hal-cinema-2024/backend/cmd/config"
	"github.com/hal-cinema-2024/backend/internal/container"
	"github.com/hal-cinema-2024/backend/internal/pkg/otel"
	"github.com/hal-cinema-2024/backend/internal/server"
)

type envFlag []string

func (e *envFlag) String() string {
	return strings.Join(*e, ",")
}

func (e *envFlag) Set(v string) error {
	*e = append(*e, v)
	return nil
}

func init() {
	// Usage: eg. go run main.go -e .env -e hoge.env -e fuga.env ...
	var envFile envFlag
	flag.Var(&envFile, "e", "path to .env file \n eg. -e .env -e another.env . ")
	flag.Parse()

	if err := config.LoadEnv(envFile...); err != nil {
		log.Fatal(context.Background(), "lod Env Error", "error", err)
	}
}

func main() {
	if err := run(); err != nil {
		log.Fatal(context.Background(), "failed to run", "error", err)
	}
}

func run() error {
	shutdown, err := otel.InitProvider()
	if err != nil {
		return err
	}
	defer shutdown()

	if err := container.NewContainer(); err != nil {
		return err
	}

	var (
		db  *sql.DB
		srv http.Handler
	)

	if err := container.Invoke(func(sqlDB *sql.DB) {
		db = sqlDB
	}); err != nil {
		return err
	}

	if err := container.Invoke(func(handler http.Handler) {
		srv = handler
	}); err != nil {
		return err
	}

	defer db.Close()

	if err := server.New(config.Config.App.Addr, srv).RunWithGraceful(); err != nil {
		log.Error(context.Background(), "failed to listen server", "error", err)
		return err
	}
	return nil
}
