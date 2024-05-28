// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNamePermission = "permissions"

// Permission mapped from table <permissions>
type Permission struct {
	PermissionID string `gorm:"column:permission_id;primaryKey" json:"permission_id"`
	URI          string `gorm:"column:uri;not null" json:"uri"`
	ReqMethod    string `gorm:"column:req_method;not null" json:"req_method"`
	Effect       bool   `gorm:"column:effect;not null;comment:許可or不許可" json:"effect"` // 許可or不許可
}

// TableName Permission's table name
func (*Permission) TableName() string {
	return TableNamePermission
}
