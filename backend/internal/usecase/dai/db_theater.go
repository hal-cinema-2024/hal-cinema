package dai

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type TheaterRepo interface {
	GetTheaterByID(ctx context.Context, theaterID int32) (*model.Theater, error)
	GetTheatersByID(ctx context.Context, theaterID []int32) (map[int32]*model.Theater, error)
}
