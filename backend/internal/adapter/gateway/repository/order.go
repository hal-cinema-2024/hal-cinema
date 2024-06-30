package repository

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/framework/herror"
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
	"gorm.io/gorm"
)

type OrderRepo struct {
	db *gorm.DB
}

func NewOrderRepo(db *gorm.DB) *OrderRepo {
	return &OrderRepo{db: db}
}

func (r *OrderRepo) CreateOrder(ctx context.Context, order *model.Order) error {
	return r.db.Create(order).Error
}

func (r *OrderRepo) GetOrder(ctx context.Context, orderID string) (*model.Order, error) {
	var order model.Order
	if err := r.db.Where("id = ?", orderID).First(&order).Error; err != nil {
		return nil, err
	}
	return &order, nil
}

func (r *OrderRepo) GetOrdersByUserID(ctx context.Context, userID string) ([]*model.Order, error) {
	var orders []*model.Order
	if err := r.db.Where("user_id = ?", userID).Find(&orders).Error; err != nil {
		return nil, err
	}
	return orders, nil
}

func (r *OrderRepo) UpdateOrder(ctx context.Context, order *model.Order) error {
	if order.OrderID == "" {
		return herror.ErrRequired
	}

	if order.UserID == "" {
		return herror.ErrRequired
	}

	return r.db.Save(order).Error
}

func (r *OrderRepo) DeleteOrder(ctx context.Context, orderID string) error {
	return r.db.Delete(&model.Order{}, orderID).Error
}

var _ dai.OrderRepo = (*OrderRepo)(nil)
