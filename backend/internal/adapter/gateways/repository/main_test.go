package repository_test

import (
	"log"
	"os"
	"testing"

	"github.com/hal-cinema-2024/backend/internal/test"
)

func TestMain(m *testing.M) {
	if err := test.LoadEnv(); err != nil {
		log.Println(err)
		os.Exit(1)
	}

	r := m.Run()
	os.Exit(r)
}

func invoke[T any]() (T, error) {
	var i T
	if err := test.Invoke(func(d T) {
		i = d
	}); err != nil {
		return i, err
	}
	return i, nil
}
