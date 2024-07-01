package dai

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type PriceTypeRepo interface {
	GetPriceTypes(ctx context.Context) (map[int32]model.PriceType, error)
}
