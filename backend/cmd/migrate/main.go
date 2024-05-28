package main

import (
	"flag"
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/golang-migrate/migrate/v4"
	"github.com/hal-cinema-2024/backend/cmd/config"
	"github.com/hal-cinema-2024/backend/cmd/migrate/migration"
	"github.com/hal-cinema-2024/backend/internal/driver/db"
)

var migratefile string

type envFlag []string

func (e *envFlag) String() string {
	return strings.Join(*e, ",")
}

func (e *envFlag) Set(v string) error {
	*e = append(*e, v)
	return nil
}

func init() {
	var envFile envFlag
	flag.StringVar(&migratefile, "f", "", "migrate file path")
	flag.Var(&envFile, "e", "path to .env file \n eg. -e .env -e another.env . ")
	flag.Parse()

	if err := config.LoadEnv(envFile...); err != nil {
		log.Fatal("Error loading .env file")
	}
	log.Println(config.Config.App.Env)
}

func main() {
	if err := run(); err != nil {
		log.Fatalln(err)
		os.Exit(1)
	}
}

func run() error {
	db := db.Connect()
	defer db.Close()

	// migrate
	m, err := migration.Migrate(db, "file://"+migratefile, nil)
	if err != nil {
		return fmt.Errorf("migrate new error: %w", err)
	}

	// migrate up
	if err := m.Up(); err != nil {
		// 変更がない場合は無視
		if err != migrate.ErrNoChange {
			return fmt.Errorf("'migrate up' error: %w", err)
		}
	}

	log.Println("'migrate up' successful")
	return nil
}
