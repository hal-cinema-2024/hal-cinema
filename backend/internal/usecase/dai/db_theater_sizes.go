package dai

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type TheaterSizeRepo interface {
	GetTheaterSizeByID(ctx context.Context, theaterSizeID int32) (*model.TheatersSize, error)
	GetTheaterSizes(ctx context.Context) (map[int32]*model.TheatersSize, error)
}
