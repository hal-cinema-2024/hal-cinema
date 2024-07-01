package main

import (
	"encoding/json"
	"time"
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

type Schedule struct {
	ScheduleID  string    `json:"scheduleId"`
	StartTime   time.Time `json:"startTime"`
	EndTime     time.Time `json:"endTime"`
	IsAvailable bool      `json:"isAvailable"`
}

type ScheduleTheater struct {
	MovieID         string                `json:"movieId"`
	MovieName       string                `json:"movieName"`
	TheaterSchedule map[string][]Schedule `json:"theaterSchedule"`
}

func main() {
	data, err := json.Marshal([]*GetScheduleResult{
		{
			ScheduleID:  "1",
			MovieID:     "1",
			MovieName:   "movie1",
			Theater:     "theater1",
			StartTime:   time.Now(),
			EndTime:     time.Now().Add(time.Hour),
			IsAvailable: true,
		},
		{
			ScheduleID:  "2",
			MovieID:     "1",
			MovieName:   "movie1",
			Theater:     "theater2",
			StartTime:   time.Now(),
			EndTime:     time.Now().Add(time.Hour),
			IsAvailable: false,
		},
		{
			ScheduleID:  "3",
			MovieID:     "2",
			MovieName:   "movie2",
			Theater:     "theater1",
			StartTime:   time.Now(),
			EndTime:     time.Now().Add(time.Hour),
			IsAvailable: true,
		},
		{
			ScheduleID:  "4",
			MovieID:     "2",
			MovieName:   "movie2",
			Theater:     "theater2",
			StartTime:   time.Now(),
			EndTime:     time.Now().Add(time.Hour),
			IsAvailable: false,
		},
		{
			ScheduleID:  "5",
			MovieID:     "3",
			MovieName:   "movie3",
			Theater:     "theater1",
			StartTime:   time.Now(),
			EndTime:     time.Now().Add(time.Hour),
			IsAvailable: true,
		},
		{
			ScheduleID:  "6",
			MovieID:     "3",
			MovieName:   "movie3",
			Theater:     "theater2",
			StartTime:   time.Now(),
			EndTime:     time.Now().Add(time.Hour),
			IsAvailable: false,
		},
	})

	if err != nil {
		panic(err)
	}

	println(string(data))

	d2, err := json.Marshal([]*ScheduleTheater{
		{
			MovieID:   "1",
			MovieName: "movie1",
			TheaterSchedule: map[string][]Schedule{
				"theater1": {
					{
						ScheduleID:  "1",
						StartTime:   time.Now(),
						EndTime:     time.Now().Add(time.Hour),
						IsAvailable: true,
					},
				},
				"theater2": {
					{
						ScheduleID:  "2",
						StartTime:   time.Now(),
						EndTime:     time.Now().Add(time.Hour),
						IsAvailable: false,
					},
				},
			},
		},
		{
			MovieID:   "2",
			MovieName: "movie2",
			TheaterSchedule: map[string][]Schedule{
				"theater1": {
					{
						ScheduleID:  "3",
						StartTime:   time.Now(),
						EndTime:     time.Now().Add(time.Hour),
						IsAvailable: true,
					},
				},
				"theater2": {
					{
						ScheduleID:  "4",
						StartTime:   time.Now(),
						EndTime:     time.Now().Add(time.Hour),
						IsAvailable: false,
					},
				},
			},
		},
		{
			MovieID:   "3",
			MovieName: "movie3",
			TheaterSchedule: map[string][]Schedule{
				"theater1": {
					{
						ScheduleID:  "5",
						StartTime:   time.Now(),
						EndTime:     time.Now().Add(time.Hour),
						IsAvailable: true,
					},
				},
				"theater2": {
					{
						ScheduleID:  "6",
						StartTime:   time.Now(),
						EndTime:     time.Now().Add(time.Hour),
						IsAvailable: false,
					},
				},
			},
		},
	})

	if err != nil {
		panic(err)
	}

	println(string(d2))
}
