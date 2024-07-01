package dai

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type OrderRepo interface {
	CreateOrder(ctx context.Context, order *model.Order) error
	GetOrder(ctx context.Context, orderID string) (*model.Order, error)
	GetOrdersByUserID(ctx context.Context, userID string) ([]*model.Order, error)
	UpdateOrder(ctx context.Context, order *model.Order) error
	DeleteOrder(ctx context.Context, orderID string) error
	DeleteOrderByUserID(ctx context.Context, userID string) error
}
