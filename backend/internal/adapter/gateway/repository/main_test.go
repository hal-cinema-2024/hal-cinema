package repository_test

import (
	"context"
	"os"
	"testing"

	"github.com/hal-cinema-2024/backend/internal/test"
	"github.com/hal-cinema-2024/backend/pkg/log"
)

func TestMain(m *testing.M) {
	if err := test.LoadEnv(); err != nil {
		log.Error(context.Background(), err.Error())
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
