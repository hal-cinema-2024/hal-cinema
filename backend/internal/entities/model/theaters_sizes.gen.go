// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameTheatersSize = "theaters_sizes"

// TheatersSize mapped from table <theaters_sizes>
type TheatersSize struct {
	TheaterSizeID int32  `gorm:"column:theater_size_id;primaryKey" json:"theater_size_id"`
	Name          string `gorm:"column:name;not null" json:"name"`
	Capacity      int32  `gorm:"column:capacity;not null" json:"capacity"`
}

// TableName TheatersSize's table name
func (*TheatersSize) TableName() string {
	return TableNameTheatersSize
}
