package repository_test

import (
	"database/sql"
	"log"
	"os"
	"testing"

	"github.com/hal-cinema-2024/backend/cmd/config"
	"github.com/hal-cinema-2024/backend/internal/container"
)

func TestMain(m *testing.M) {
	if err := config.LoadEnv(); err != nil {
		log.Println(err)
		os.Exit(1)
	}

	if err := container.NewTestContainer(); err != nil {
		log.Println(err)
		os.Exit(1)
	}

	db, err := invoke[*sql.DB]()
	if err != nil {
		log.Println(err)
		os.Exit(1)
	}
	defer db.Close()

	r := m.Run()
	os.Exit(r)
}

func invoke[T any]() (T, error) {
	var i T
	if err := container.Invoke(func(d T) {
		i = d
	}); err != nil {
		return i, err
	}
	return i, nil
}
