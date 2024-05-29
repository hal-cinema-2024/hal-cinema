package repository

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"gorm.io/gorm"
)

type SessionRepo struct {
	db *gorm.DB
}

func NewSessionRepo(gorm *gorm.DB) *SessionRepo {
	return &SessionRepo{
		db: gorm,
	}
}

func (s *SessionRepo) SyncSession(ctx context.Context, session *model.Session) (*model.Session, error) {
	if err := s.db.WithContext(ctx).Save(session).Error; err != nil {
		return nil, err
	}
	return session, nil
}
