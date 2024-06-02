package interactor

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

func (mi *MovieInteractor) CreateMovie(ctx context.Context, movie *model.Movie) error {
	err := mi.Repositories.CreateMovie(ctx, movie)
	if err != nil {
		return err
	}

	return nil
}
