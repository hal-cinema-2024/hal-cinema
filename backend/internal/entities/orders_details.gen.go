// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package entities

import (
	"context"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"

	"gorm.io/plugin/dbresolver"

	"github.com/hal-cinema-2024/backend/internal/model"
)

func newOrdersDetail(db *gorm.DB, opts ...gen.DOOption) ordersDetail {
	_ordersDetail := ordersDetail{}

	_ordersDetail.ordersDetailDo.UseDB(db, opts...)
	_ordersDetail.ordersDetailDo.UseModel(&model.OrdersDetail{})

	tableName := _ordersDetail.ordersDetailDo.TableName()
	_ordersDetail.ALL = field.NewAsterisk(tableName)
	_ordersDetail.OrderDetailID = field.NewString(tableName, "order_detail_id")
	_ordersDetail.OrderID = field.NewString(tableName, "order_id")
	_ordersDetail.TheatersSeatsID = field.NewString(tableName, "theaters_seats_id")
	_ordersDetail.PriceTypeID = field.NewString(tableName, "price_type_id")

	_ordersDetail.fillFieldMap()

	return _ordersDetail
}

type ordersDetail struct {
	ordersDetailDo ordersDetailDo

	ALL             field.Asterisk
	OrderDetailID   field.String
	OrderID         field.String
	TheatersSeatsID field.String
	PriceTypeID     field.String

	fieldMap map[string]field.Expr
}

func (o ordersDetail) Table(newTableName string) *ordersDetail {
	o.ordersDetailDo.UseTable(newTableName)
	return o.updateTableName(newTableName)
}

func (o ordersDetail) As(alias string) *ordersDetail {
	o.ordersDetailDo.DO = *(o.ordersDetailDo.As(alias).(*gen.DO))
	return o.updateTableName(alias)
}

func (o *ordersDetail) updateTableName(table string) *ordersDetail {
	o.ALL = field.NewAsterisk(table)
	o.OrderDetailID = field.NewString(table, "order_detail_id")
	o.OrderID = field.NewString(table, "order_id")
	o.TheatersSeatsID = field.NewString(table, "theaters_seats_id")
	o.PriceTypeID = field.NewString(table, "price_type_id")

	o.fillFieldMap()

	return o
}

func (o *ordersDetail) WithContext(ctx context.Context) *ordersDetailDo {
	return o.ordersDetailDo.WithContext(ctx)
}

func (o ordersDetail) TableName() string { return o.ordersDetailDo.TableName() }

func (o ordersDetail) Alias() string { return o.ordersDetailDo.Alias() }

func (o ordersDetail) Columns(cols ...field.Expr) gen.Columns {
	return o.ordersDetailDo.Columns(cols...)
}

func (o *ordersDetail) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := o.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (o *ordersDetail) fillFieldMap() {
	o.fieldMap = make(map[string]field.Expr, 4)
	o.fieldMap["order_detail_id"] = o.OrderDetailID
	o.fieldMap["order_id"] = o.OrderID
	o.fieldMap["theaters_seats_id"] = o.TheatersSeatsID
	o.fieldMap["price_type_id"] = o.PriceTypeID
}

func (o ordersDetail) clone(db *gorm.DB) ordersDetail {
	o.ordersDetailDo.ReplaceConnPool(db.Statement.ConnPool)
	return o
}

func (o ordersDetail) replaceDB(db *gorm.DB) ordersDetail {
	o.ordersDetailDo.ReplaceDB(db)
	return o
}

type ordersDetailDo struct{ gen.DO }

func (o ordersDetailDo) Debug() *ordersDetailDo {
	return o.withDO(o.DO.Debug())
}

func (o ordersDetailDo) WithContext(ctx context.Context) *ordersDetailDo {
	return o.withDO(o.DO.WithContext(ctx))
}

func (o ordersDetailDo) ReadDB() *ordersDetailDo {
	return o.Clauses(dbresolver.Read)
}

func (o ordersDetailDo) WriteDB() *ordersDetailDo {
	return o.Clauses(dbresolver.Write)
}

func (o ordersDetailDo) Session(config *gorm.Session) *ordersDetailDo {
	return o.withDO(o.DO.Session(config))
}

func (o ordersDetailDo) Clauses(conds ...clause.Expression) *ordersDetailDo {
	return o.withDO(o.DO.Clauses(conds...))
}

func (o ordersDetailDo) Returning(value interface{}, columns ...string) *ordersDetailDo {
	return o.withDO(o.DO.Returning(value, columns...))
}

func (o ordersDetailDo) Not(conds ...gen.Condition) *ordersDetailDo {
	return o.withDO(o.DO.Not(conds...))
}

func (o ordersDetailDo) Or(conds ...gen.Condition) *ordersDetailDo {
	return o.withDO(o.DO.Or(conds...))
}

func (o ordersDetailDo) Select(conds ...field.Expr) *ordersDetailDo {
	return o.withDO(o.DO.Select(conds...))
}

func (o ordersDetailDo) Where(conds ...gen.Condition) *ordersDetailDo {
	return o.withDO(o.DO.Where(conds...))
}

func (o ordersDetailDo) Order(conds ...field.Expr) *ordersDetailDo {
	return o.withDO(o.DO.Order(conds...))
}

func (o ordersDetailDo) Distinct(cols ...field.Expr) *ordersDetailDo {
	return o.withDO(o.DO.Distinct(cols...))
}

func (o ordersDetailDo) Omit(cols ...field.Expr) *ordersDetailDo {
	return o.withDO(o.DO.Omit(cols...))
}

func (o ordersDetailDo) Join(table schema.Tabler, on ...field.Expr) *ordersDetailDo {
	return o.withDO(o.DO.Join(table, on...))
}

func (o ordersDetailDo) LeftJoin(table schema.Tabler, on ...field.Expr) *ordersDetailDo {
	return o.withDO(o.DO.LeftJoin(table, on...))
}

func (o ordersDetailDo) RightJoin(table schema.Tabler, on ...field.Expr) *ordersDetailDo {
	return o.withDO(o.DO.RightJoin(table, on...))
}

func (o ordersDetailDo) Group(cols ...field.Expr) *ordersDetailDo {
	return o.withDO(o.DO.Group(cols...))
}

func (o ordersDetailDo) Having(conds ...gen.Condition) *ordersDetailDo {
	return o.withDO(o.DO.Having(conds...))
}

func (o ordersDetailDo) Limit(limit int) *ordersDetailDo {
	return o.withDO(o.DO.Limit(limit))
}

func (o ordersDetailDo) Offset(offset int) *ordersDetailDo {
	return o.withDO(o.DO.Offset(offset))
}

func (o ordersDetailDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *ordersDetailDo {
	return o.withDO(o.DO.Scopes(funcs...))
}

func (o ordersDetailDo) Unscoped() *ordersDetailDo {
	return o.withDO(o.DO.Unscoped())
}

func (o ordersDetailDo) Create(values ...*model.OrdersDetail) error {
	if len(values) == 0 {
		return nil
	}
	return o.DO.Create(values)
}

func (o ordersDetailDo) CreateInBatches(values []*model.OrdersDetail, batchSize int) error {
	return o.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (o ordersDetailDo) Save(values ...*model.OrdersDetail) error {
	if len(values) == 0 {
		return nil
	}
	return o.DO.Save(values)
}

func (o ordersDetailDo) First() (*model.OrdersDetail, error) {
	if result, err := o.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.OrdersDetail), nil
	}
}

func (o ordersDetailDo) Take() (*model.OrdersDetail, error) {
	if result, err := o.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.OrdersDetail), nil
	}
}

func (o ordersDetailDo) Last() (*model.OrdersDetail, error) {
	if result, err := o.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.OrdersDetail), nil
	}
}

func (o ordersDetailDo) Find() ([]*model.OrdersDetail, error) {
	result, err := o.DO.Find()
	return result.([]*model.OrdersDetail), err
}

func (o ordersDetailDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.OrdersDetail, err error) {
	buf := make([]*model.OrdersDetail, 0, batchSize)
	err = o.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (o ordersDetailDo) FindInBatches(result *[]*model.OrdersDetail, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return o.DO.FindInBatches(result, batchSize, fc)
}

func (o ordersDetailDo) Attrs(attrs ...field.AssignExpr) *ordersDetailDo {
	return o.withDO(o.DO.Attrs(attrs...))
}

func (o ordersDetailDo) Assign(attrs ...field.AssignExpr) *ordersDetailDo {
	return o.withDO(o.DO.Assign(attrs...))
}

func (o ordersDetailDo) Joins(fields ...field.RelationField) *ordersDetailDo {
	for _, _f := range fields {
		o = *o.withDO(o.DO.Joins(_f))
	}
	return &o
}

func (o ordersDetailDo) Preload(fields ...field.RelationField) *ordersDetailDo {
	for _, _f := range fields {
		o = *o.withDO(o.DO.Preload(_f))
	}
	return &o
}

func (o ordersDetailDo) FirstOrInit() (*model.OrdersDetail, error) {
	if result, err := o.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.OrdersDetail), nil
	}
}

func (o ordersDetailDo) FirstOrCreate() (*model.OrdersDetail, error) {
	if result, err := o.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.OrdersDetail), nil
	}
}

func (o ordersDetailDo) FindByPage(offset int, limit int) (result []*model.OrdersDetail, count int64, err error) {
	result, err = o.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = o.Offset(-1).Limit(-1).Count()
	return
}

func (o ordersDetailDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = o.Count()
	if err != nil {
		return
	}

	err = o.Offset(offset).Limit(limit).Scan(result)
	return
}

func (o ordersDetailDo) Scan(result interface{}) (err error) {
	return o.DO.Scan(result)
}

func (o ordersDetailDo) Delete(models ...*model.OrdersDetail) (result gen.ResultInfo, err error) {
	return o.DO.Delete(models)
}

func (o *ordersDetailDo) withDO(do gen.Dao) *ordersDetailDo {
	o.DO = *do.(*gen.DO)
	return o
}
