package main

import (
	"flag"
	"log"
	"os"
	"strings"

	"github.com/hal-cinema-2024/backend/cmd/config"
	"github.com/hal-cinema-2024/backend/internal"
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
		log.Fatal("Error loading .env file")
	}
}

func main() {
	if err := run(); err != nil {
		log.Println("failed to run: ", err)
		os.Exit(1)
	}
}

func run() error {
	srv, db := internal.NewContainer()
	defer db.Close()

	if err := server.New(config.Config.App.Addr, srv).RunWithGraceful(); err != nil {
		log.Printf("failed to listen server: %v \n", err)
		return err
	}
	return nil
}
