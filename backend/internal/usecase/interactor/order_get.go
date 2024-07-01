package interactor

import (
	"context"
	"errors"
	"fmt"
	"time"
)

type GetOrderParam struct {
	OrderID string
	UserID  string
}

type SeatDetail struct {
	TheaterSeatID string `json:"theaterSeatID"`
	SeatName      string `json:"seatName"`
	PriceType     string `json:"priceType"`
	Price         int32  `json:"price"`
}

type GetOrderResult struct {
	MovieID           string       `json:"movieId"`
	MovieName         string       `json:"movieName"`
	TheaterID         int32        `json:"theaterId"`
	TheaterName       string       `json:"theaterName"`
	ScreeningDatetime time.Time    `json:"screeningDatetime"`
	TotalPrice        int32        `json:"totalPrice"`
	SeatDetails       []SeatDetail `json:"seatDetails"`
	User              struct {
		UserID       string `json:"userId"`
		UserName     string `json:"userName"`
		UserNameKana string `json:"userNameKana"`
		Email        string `json:"email"`
	} `json:"user"`
}

func (i *OrderInteractor) GetOrder(ctx context.Context, param GetOrderParam) (*GetOrderResult, error) {
	order, err := i.Repositories.GetOrder(ctx, param.OrderID)
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get order"))
	}
	if order.UserID != param.UserID {
		return nil, fmt.Errorf("invalid user: %s", param.UserID)
	}

	user, err := i.Repositories.GetUserByID(ctx, order.UserID)
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get user"))
	}

	theaterSeats, err := i.Repositories.GetTheaterSeatsByOrderID(ctx, order.OrderID)
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get seats"))
	}

	priceType, err := i.Repositories.GetPriceTypes(ctx)
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get price type"))
	}

	var seatDetails []SeatDetail
	var totalPrice int32
	for _, seat := range theaterSeats {
		totalPrice += priceType[seat.PriceType].Price
		seatDetails = append(seatDetails, SeatDetail{
			TheaterSeatID: seat.TheaterSeatID,
			SeatName:      seat.SeatName,
			PriceType:     priceType[seat.PriceType].Name,
			Price:         priceType[seat.PriceType].Price,
		})
	}

	schedule, err := i.Repositories.GetScheduleByID(ctx, order.ScheduleID)
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get schedule by id"))
	}

	movie, _, err := i.Repositories.GetMovieByID(ctx, schedule.MovieID)
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get movie"))
	}

	theater, err := i.Repositories.GetTheaterByID(ctx, schedule.TheaterID)
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get theater"))
	}

	return &GetOrderResult{
		MovieID:           movie.MovieID,
		MovieName:         movie.Name,
		TheaterID:         schedule.TheaterID,
		TheaterName:       theater.Name,
		ScreeningDatetime: schedule.StartDate,
		TotalPrice:        totalPrice,
		SeatDetails:       seatDetails,
		User: struct {
			UserID       string "json:\"userId\""
			UserName     string "json:\"userName\""
			UserNameKana string "json:\"userNameKana\""
			Email        string "json:\"email\""
		}{
			UserID:       user.UserID,
			UserName:     fmt.Sprintf("%s %s", user.FirstName, user.LastName),
			UserNameKana: fmt.Sprintf("%s %s", user.FirstNameReading, user.LastNameReading),
			Email:        user.Email,
		},
	}, nil
}
