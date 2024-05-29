// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

import (
	"time"
)

const TableNameSchedule = "schedules"

// Schedule mapped from table <schedules>
type Schedule struct {
	ScheduleID string    `gorm:"column:schedule_id;primaryKey" json:"schedule_id"`
	TheaterID  string    `gorm:"column:theater_id;not null" json:"theater_id"`
	MovieID    string    `gorm:"column:movie_id;not null" json:"movie_id"`
	StartDate  time.Time `gorm:"column:start_date;not null" json:"start_date"`
}

// TableName Schedule's table name
func (*Schedule) TableName() string {
	return TableNameSchedule
}