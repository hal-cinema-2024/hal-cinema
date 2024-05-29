package dai

import (
	"context"

	"gorm.io/gorm"
)

type DataAccess interface {
	UserRepo
	SessionRepo

	Tx(ctx context.Context, tx func(tx *gorm.DB) error) error
}
