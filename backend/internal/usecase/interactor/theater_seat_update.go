package interactor

import (
	"context"
	"errors"
	"fmt"
)

func (i *TheaterSeatInteractor) UpdateTheatersSeat(ctx context.Context, theaterSeatsID, seatName string) error {
	if err := i.Repositories.UpdateTheaterSeatByID(ctx, theaterSeatsID, seatName); err != nil {
		return errors.Join(err, fmt.Errorf("failed to update theater seats"))
	}
	return nil
}
