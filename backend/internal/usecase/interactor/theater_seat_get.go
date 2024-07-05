package interactor

import (
	"context"
	"errors"
	"fmt"
	"strings"

	"github.com/hal-cinema-2024/backend/internal/entities"
)

func (i *TheaterSeatInteractor) GetAvailableTheaterSeats(ctx context.Context, orderID string) (map[string][]string, error) {
	theaterSeats, err := i.Repositories.GetTheaterSeatsByOrderID(ctx, orderID)
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get theater seats by order id"))
	}

	schedule, err := i.Repositories.GetScheduleByOrderID(ctx, orderID)
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get schedule by order id"))
	}

	theater, err := i.Repositories.GetTheatersByID(ctx, []int32{schedule.TheaterID})
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get theater by id"))
	}

	availableseat := entities.TheaterLoop(int(theater[schedule.TheaterID].TheaterSizeID))

	for _, theaterSeat := range theaterSeats {
		seats := strings.Split(theaterSeat.SeatName, ":")

		row := availableseat[seats[0]]

		delete(row, seats[1])
		availableseat[seats[0]] = row
	}

	result := make(map[string][]string)
	for k, v := range availableseat {
		r := []string{}
		for k2 := range v {
			r = append(r, k2)
		}
		result[k] = r
	}
	return result, nil
}
