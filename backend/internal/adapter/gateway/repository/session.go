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

func (r *SessionRepo) GetSessionByID(ctx context.Context, sessionID, userAgent string) (*model.Session, bool, error) {
	var (
		session model.Session
		count   int64
	)
	result := r.db.Model(&session).Where("session_id = ?", sessionID).Where("user_agent = ?", userAgent).Find(&session).Count(&count)
	if result.Error != nil {
		return nil, false, result.Error
	}

	if count == 0 {
		return nil, false, nil
	}
	return &session, true, nil
}
