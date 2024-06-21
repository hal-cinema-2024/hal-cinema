package interactor

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
)

func (ui *UserInteractor) DeleteUser(ctx context.Context, userID string) error {
	if err := ui.Repositories.Transaction(ctx, func(ctx context.Context, da dai.DataAccess) error {
		err := ui.Repositories.DeleteUser(ctx, userID)
		if err != nil {
			return err
		}

		// TODO: 予約の取り消し

		return nil
	}); err != nil {
		return err
	}

	return nil
}
