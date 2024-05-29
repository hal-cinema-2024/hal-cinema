package main

import (
	"database/sql"
	"flag"
	"log"
	"os"
	"strings"

	"github.com/hal-cinema-2024/backend/cmd/config"
	"github.com/hal-cinema-2024/backend/internal/container"
	"github.com/hal-cinema-2024/backend/internal/framework/server"
	"github.com/hal-cinema-2024/backend/internal/router"
	"github.com/hal-cinema-2024/backend/pkg/otel"
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
		log.Fatal("Error loading .env file")
	}
	log.Println(config.Config.App.Env)
}

func main() {
	if err := run(); err != nil {
		log.Println("failed to run: ", err)
		os.Exit(1)
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

	db := container.Invoke[*sql.DB]()

	srv := router.NewRouter()

	defer db.Close()

	if err := server.New(config.Config.App.Addr, srv).RunWithGraceful(); err != nil {
		log.Printf("failed to listen server: %v \n", err)
		return err
	}
	return nil
}
