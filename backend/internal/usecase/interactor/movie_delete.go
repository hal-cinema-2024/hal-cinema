package interactor

import "context"

func (mi *MovieInteractor) DeleteMovie(ctx context.Context, movieID string) error {
	err := mi.Repositories.DeleteMovie(ctx, movieID)
	if err != nil {
		return err
	}

	return nil
}
