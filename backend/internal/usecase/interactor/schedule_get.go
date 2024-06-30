package interactor

import (
	"context"
	"errors"
	"fmt"
	"log"
	"time"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type GetScheduleResult struct {
	ScheduleID  string    `json:"scheduleId"`
	MovieID     string    `json:"movieID"`
	MovieName   string    `json:"movieName"`
	Theater     string    `json:"theater"`
	StartTime   time.Time `json:"startTime"`
	EndTime     time.Time `json:"endTime"`
	IsAvailable bool      `json:"isAvailable"`
}

func (i *ScheduleInteractor) GetSchedules(ctx context.Context, startDate time.Time, movieId ...string) ([]GetScheduleResult, error) {
	schedules, err := i.Repositories.GetSchedules(ctx, startDate, movieId...)
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get schedules"))
	}

	log.Println(schedules)

	var (
		movieIDs    []string
		scheduleIds []string
		theaterIDs  []string
	)
	theaterMaps := make(map[string]struct{})

	for _, schedule := range schedules {
		movieIDs = append(movieIDs, schedule.MovieID)
		scheduleIds = append(scheduleIds, schedule.ScheduleID)
		theaterMaps[schedule.TheaterID] = struct{}{}
	}

	for theaterID := range theaterMaps {
		theaterIDs = append(theaterIDs, theaterID)
	}

	movies, err := i.Repositories.GetMoviesByID(ctx, movieIDs)
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get movies"))
	}

	moviesMap := make(map[string]*model.Movie, len(movies))
	for _, movie := range movies {
		moviesMap[movie.MovieID] = movie
	}

	theaterMap, err := i.Repositories.GetTheatersByID(ctx, theaterIDs)
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get theaters"))
	}

	theaterSizes, err := i.Repositories.GetTheaterSizes(ctx)
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get theater sizes"))
	}

	theaterSeats, err := i.Repositories.GetTheatersSeatsByScheduleIDs(ctx, scheduleIds)
	if err != nil {
		return nil, errors.Join(err, fmt.Errorf("failed to get theater seats"))
	}

	var result []GetScheduleResult
	for _, schedule := range schedules {
		var isAvailable bool
		seat, ok := theaterSeats[schedule.ScheduleID]
		if !ok {
			isAvailable = true
		} else {
			isAvailable = len(seat) == int(theaterSizes[schedule.TheaterID].Capacity)
		}
		result = append(result, GetScheduleResult{
			ScheduleID:  schedule.ScheduleID,
			MovieID:     schedule.MovieID,
			MovieName:   moviesMap[schedule.MovieID].Name,
			Theater:     theaterMap[schedule.TheaterID].Name,
			StartTime:   schedule.StartDate,
			EndTime:     schedule.StartDate.Add(time.Duration(moviesMap[schedule.MovieID].Term) * time.Minute),
			IsAvailable: isAvailable,
		})
	}

	return result, nil
}
