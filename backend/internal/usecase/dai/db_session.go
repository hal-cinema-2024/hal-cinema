package dai

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type SessionRepo interface {
	GetSessionByID(ctx context.Context, sessionID, userAgent string) (*model.Session, bool, error)
	SyncSession(ctx context.Context, session *model.Session) (*model.Session, error)
}
