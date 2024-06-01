package test

import (
	"log"
	"path/filepath"
	"runtime"

	"github.com/hal-cinema-2024/backend/cmd/config"
)

func LoadEnv() error {
	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)
	envPath := filepath.Join(dir, "..", "..", ".env.test")

	if err := config.LoadEnv(envPath); err != nil {
		log.Fatal("Error loading .env file for test")
		return err
	}

	return nil
}
