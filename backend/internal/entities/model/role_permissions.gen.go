// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameRolePermission = "role_permissions"

// RolePermission mapped from table <role_permissions>
type RolePermission struct {
	RoleID       int32 `gorm:"column:role_id;not null" json:"role_id"`
	PermissionID int32 `gorm:"column:permission_id;not null" json:"permission_id"`
}

// TableName RolePermission's table name
func (*RolePermission) TableName() string {
	return TableNameRolePermission
}
