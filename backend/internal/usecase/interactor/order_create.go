package interactor

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/framework/hconst"
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
)

type SeatSelect struct {
	PriceType hconst.PriceType `json:"priceType"`
	SeatName  string           `json:"seatName"`
}

type CreateOrderParam struct {
	ScheduleID  string
	UserID      string
	SeatSelects []SeatSelect
}

func (i *OrderInteractor) CreateOrder(ctx context.Context, param CreateOrderParam) error {
	orderID, err := uuid.NewV7()
	if err != nil {
		return errors.Join(err, fmt.Errorf("failed to generate order id"))
	}

	var theaterSeatsIDs []string
	for range param.SeatSelects {
		theaterSeatsID, err := uuid.NewV7()
		if err != nil {
			return errors.Join(err, fmt.Errorf("failed to generate order id"))
		}
		theaterSeatsIDs = append(theaterSeatsIDs, theaterSeatsID.String())
	}

	err = i.Repositories.Transaction(ctx, func(ctx context.Context, da dai.DataAccess) error {
		if err := da.CreateOrder(ctx, &model.Order{
			OrderID:   orderID.String(),
			UserID:    param.UserID,
			IsPaid:    false,
			CreatedAt: time.Now(),
		}); err != nil {
			return errors.Join(err, fmt.Errorf("failed to create order"))
		}

		var theaterSeats []*model.TheatersSeat
		for i, seatSelect := range param.SeatSelects {
			theaterSeats = append(theaterSeats, &model.TheatersSeat{
				TheaterSeatID: theaterSeatsIDs[i],
				OrderID:       orderID.String(),
				PriceType:     seatSelect.PriceType.Int32(),
				ScheduleID:    param.ScheduleID,
				SeatName:      seatSelect.SeatName,
			})
		}

		if err := da.CreateTheatersSeats(ctx, theaterSeats); err != nil {
			return errors.Join(err, fmt.Errorf("failed to create theaters seats"))
		}

		return nil
	})
	if err != nil {
		return errors.Join(err, fmt.Errorf("failed to transaction"))
	}

	return nil
}
