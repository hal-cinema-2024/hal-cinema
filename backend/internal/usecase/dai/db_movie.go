package dai

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type MovieRepo interface {
	CreateMovie(ctx context.Context, movie *model.Movie, imagePaths []string) (string, error)
	GetMovieByID(ctx context.Context, movieID string) (*model.Movie, []string, error)
	GetMoviesByID(ctx context.Context, movieIDs []string) ([]*model.Movie, error)
	GetMovies(ctx context.Context, pageSize int, pageID int) ([]*model.Movie, error)
	UpdateMovie(ctx context.Context, movie *model.Movie) error
	DeleteMovie(ctx context.Context, movieID string) error
}
