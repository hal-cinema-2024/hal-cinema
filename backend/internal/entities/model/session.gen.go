// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameSession = "session"

// Session mapped from table <session>
type Session struct {
	SessionID      string `gorm:"column:session_id;primaryKey" json:"session_id"`
	UserAgent      string `gorm:"column:user_agent;not null" json:"user_agent"`
	UserID         string `gorm:"column:user_id;not null" json:"user_id"`
	Token          string `gorm:"column:token;not null" json:"token"`
	ExpirationTime int32  `gorm:"column:expiration_time;not null" json:"expiration_time"`
}

// TableName Session's table name
func (*Session) TableName() string {
	return TableNameSession
}
