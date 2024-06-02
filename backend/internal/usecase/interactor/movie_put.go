package interactor

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

func (mi *MovieInteractor) UpdateMovie(ctx context.Context, movie *model.Movie) error {
	err := mi.Repositories.UpdateMovie(ctx, movie)
	if err != nil {
		return err
	}

	return nil
}
