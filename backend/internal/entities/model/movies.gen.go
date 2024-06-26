// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

import (
	"time"
)

const TableNameMovie = "movies"

// Movie mapped from table <movies>
type Movie struct {
	MovieID       string    `gorm:"column:movie_id;primaryKey" json:"movie_id"`
	Name          string    `gorm:"column:name;not null" json:"name"`
	Director      string    `gorm:"column:director;not null" json:"director"`
	Summary       string    `gorm:"column:summary;not null" json:"summary"`
	ThumbnailPath string    `gorm:"column:thumbnail_path;not null" json:"thumbnail_path"`
	Link          string    `gorm:"column:link;not null" json:"link"`
	Term          int32     `gorm:"column:term;not null;comment:上映時間" json:"term"` // 上映時間
	ReleaseDate   time.Time `gorm:"column:release_date;not null" json:"release_date"`
	EndDate       time.Time `gorm:"column:end_date;not null" json:"end_date"`
}

// TableName Movie's table name
func (*Movie) TableName() string {
	return TableNameMovie
}
