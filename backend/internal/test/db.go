package test

import (
	"database/sql"
	"log"
	"path/filepath"
	"runtime"

	"github.com/hal-cinema-2024/backend/cmd/migrate/migration"
)

func Migrate(db *sql.DB) (func() error, error) {
	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)
	schema := filepath.Join(dir, "..", "..", "cmd/migrate/schema")
	mig, err := migration.Migrate(db, "file:"+schema, nil)
	if err != nil {
		log.Println("init migrate error :", err)
		return nil, err
	}

	if err := mig.Up(); err != nil {
		log.Println("migrate up error :", err)
		return nil, err
	}

	return func() error {
		if err := mig.Down(); err != nil {
			log.Println("migrate down error :", err)
			return err
		}

		return nil
	}, nil
}
