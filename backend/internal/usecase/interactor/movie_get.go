package interactor

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

func (mi *MovieInteractor) GetMovie(ctx context.Context, movieID string) (*model.Movie, []string, error) {
	movie, moviePaths, err := mi.Repositories.GetMovieByID(ctx, movieID)
	if err != nil {
		return nil, nil, err
	}

	return movie, moviePaths, nil
}

func (mi *MovieInteractor) GetMovies(ctx context.Context) ([]*model.Movie, error) {
	movies, err := mi.Repositories.GetMovies(ctx)
	if err != nil {
		return nil, err
	}

	return movies, nil
}
