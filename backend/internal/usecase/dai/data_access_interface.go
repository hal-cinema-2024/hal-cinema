package dai

import (
	"context"
)

type DataAccess interface {
	UserRepo
	SessionRepo
	MovieRepo
	StorageRepo

	Transaction(ctx context.Context, fn func(context.Context, DataAccess) error) error
}
