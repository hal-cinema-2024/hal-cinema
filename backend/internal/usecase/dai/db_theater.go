package dai

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type TheaterRepo interface {
	GetTheaterByID(ctx context.Context, theaterID string) (*model.Theater, error)
	GetTheatersByID(ctx context.Context, theaterID []string) (map[string]*model.Theater, error)
}
