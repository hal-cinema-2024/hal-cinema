package dai

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/adapter/gateways/model"
)

type SessionRepo interface {
	SyncSession(ctx context.Context, session *model.Session) (*model.Session, error)
}
