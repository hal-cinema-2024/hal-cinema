// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNamePriceType = "price_types"

// PriceType mapped from table <price_types>
type PriceType struct {
	PriceTypeID int32  `gorm:"column:price_type_id;primaryKey" json:"price_type_id"`
	Name        string `gorm:"column:name;not null" json:"name"`
	Price       int32  `gorm:"column:price;not null" json:"price"`
}

// TableName PriceType's table name
func (*PriceType) TableName() string {
	return TableNamePriceType
}
