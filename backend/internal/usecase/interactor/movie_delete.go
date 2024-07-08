package interactor

import (
	"context"
	"sync"
)

func (mi *MovieInteractor) DeleteMovie(ctx context.Context, movieID string) error {
	var wg sync.WaitGroup

	_, imagePaths, err := mi.Repositories.GetMovieByID(ctx, movieID)
	if err != nil {
		return err
	}
	errChan := make(chan error, len(imagePaths))

	// 指定の画像を削除
	for _, imagePath := range imagePaths {
		wg.Add(1)
		go func(imagePath string) {
			defer wg.Done()
			err := mi.cloudStorage.DeleteBlob(ctx, imagePath)
			if err != nil {
				errChan <- err
				return
			}
		}(imagePath)
	}

	go func() {
		wg.Wait()
		close(errChan)
	}()

	for err := range errChan {
		return err
	}

	wg.Wait()

	err = mi.Repositories.DeleteMovie(ctx, movieID)
	if err != nil {
		return err
	}

	return nil
}
