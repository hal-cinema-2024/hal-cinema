// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package gorm

import (
	"context"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"

	"gorm.io/plugin/dbresolver"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

func newPriceType(db *gorm.DB, opts ...gen.DOOption) priceType {
	_priceType := priceType{}

	_priceType.priceTypeDo.UseDB(db, opts...)
	_priceType.priceTypeDo.UseModel(&model.PriceType{})

	tableName := _priceType.priceTypeDo.TableName()
	_priceType.ALL = field.NewAsterisk(tableName)
	_priceType.PriceTypeID = field.NewInt32(tableName, "price_type_id")
	_priceType.Name = field.NewString(tableName, "name")
	_priceType.Price = field.NewInt32(tableName, "price")

	_priceType.fillFieldMap()

	return _priceType
}

type priceType struct {
	priceTypeDo priceTypeDo

	ALL         field.Asterisk
	PriceTypeID field.Int32
	Name        field.String
	Price       field.Int32

	fieldMap map[string]field.Expr
}

func (p priceType) Table(newTableName string) *priceType {
	p.priceTypeDo.UseTable(newTableName)
	return p.updateTableName(newTableName)
}

func (p priceType) As(alias string) *priceType {
	p.priceTypeDo.DO = *(p.priceTypeDo.As(alias).(*gen.DO))
	return p.updateTableName(alias)
}

func (p *priceType) updateTableName(table string) *priceType {
	p.ALL = field.NewAsterisk(table)
	p.PriceTypeID = field.NewInt32(table, "price_type_id")
	p.Name = field.NewString(table, "name")
	p.Price = field.NewInt32(table, "price")

	p.fillFieldMap()

	return p
}

func (p *priceType) WithContext(ctx context.Context) *priceTypeDo {
	return p.priceTypeDo.WithContext(ctx)
}

func (p priceType) TableName() string { return p.priceTypeDo.TableName() }

func (p priceType) Alias() string { return p.priceTypeDo.Alias() }

func (p priceType) Columns(cols ...field.Expr) gen.Columns { return p.priceTypeDo.Columns(cols...) }

func (p *priceType) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := p.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (p *priceType) fillFieldMap() {
	p.fieldMap = make(map[string]field.Expr, 3)
	p.fieldMap["price_type_id"] = p.PriceTypeID
	p.fieldMap["name"] = p.Name
	p.fieldMap["price"] = p.Price
}

func (p priceType) clone(db *gorm.DB) priceType {
	p.priceTypeDo.ReplaceConnPool(db.Statement.ConnPool)
	return p
}

func (p priceType) replaceDB(db *gorm.DB) priceType {
	p.priceTypeDo.ReplaceDB(db)
	return p
}

type priceTypeDo struct{ gen.DO }

func (p priceTypeDo) Debug() *priceTypeDo {
	return p.withDO(p.DO.Debug())
}

func (p priceTypeDo) WithContext(ctx context.Context) *priceTypeDo {
	return p.withDO(p.DO.WithContext(ctx))
}

func (p priceTypeDo) ReadDB() *priceTypeDo {
	return p.Clauses(dbresolver.Read)
}

func (p priceTypeDo) WriteDB() *priceTypeDo {
	return p.Clauses(dbresolver.Write)
}

func (p priceTypeDo) Session(config *gorm.Session) *priceTypeDo {
	return p.withDO(p.DO.Session(config))
}

func (p priceTypeDo) Clauses(conds ...clause.Expression) *priceTypeDo {
	return p.withDO(p.DO.Clauses(conds...))
}

func (p priceTypeDo) Returning(value interface{}, columns ...string) *priceTypeDo {
	return p.withDO(p.DO.Returning(value, columns...))
}

func (p priceTypeDo) Not(conds ...gen.Condition) *priceTypeDo {
	return p.withDO(p.DO.Not(conds...))
}

func (p priceTypeDo) Or(conds ...gen.Condition) *priceTypeDo {
	return p.withDO(p.DO.Or(conds...))
}

func (p priceTypeDo) Select(conds ...field.Expr) *priceTypeDo {
	return p.withDO(p.DO.Select(conds...))
}

func (p priceTypeDo) Where(conds ...gen.Condition) *priceTypeDo {
	return p.withDO(p.DO.Where(conds...))
}

func (p priceTypeDo) Order(conds ...field.Expr) *priceTypeDo {
	return p.withDO(p.DO.Order(conds...))
}

func (p priceTypeDo) Distinct(cols ...field.Expr) *priceTypeDo {
	return p.withDO(p.DO.Distinct(cols...))
}

func (p priceTypeDo) Omit(cols ...field.Expr) *priceTypeDo {
	return p.withDO(p.DO.Omit(cols...))
}

func (p priceTypeDo) Join(table schema.Tabler, on ...field.Expr) *priceTypeDo {
	return p.withDO(p.DO.Join(table, on...))
}

func (p priceTypeDo) LeftJoin(table schema.Tabler, on ...field.Expr) *priceTypeDo {
	return p.withDO(p.DO.LeftJoin(table, on...))
}

func (p priceTypeDo) RightJoin(table schema.Tabler, on ...field.Expr) *priceTypeDo {
	return p.withDO(p.DO.RightJoin(table, on...))
}

func (p priceTypeDo) Group(cols ...field.Expr) *priceTypeDo {
	return p.withDO(p.DO.Group(cols...))
}

func (p priceTypeDo) Having(conds ...gen.Condition) *priceTypeDo {
	return p.withDO(p.DO.Having(conds...))
}

func (p priceTypeDo) Limit(limit int) *priceTypeDo {
	return p.withDO(p.DO.Limit(limit))
}

func (p priceTypeDo) Offset(offset int) *priceTypeDo {
	return p.withDO(p.DO.Offset(offset))
}

func (p priceTypeDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *priceTypeDo {
	return p.withDO(p.DO.Scopes(funcs...))
}

func (p priceTypeDo) Unscoped() *priceTypeDo {
	return p.withDO(p.DO.Unscoped())
}

func (p priceTypeDo) Create(values ...*model.PriceType) error {
	if len(values) == 0 {
		return nil
	}
	return p.DO.Create(values)
}

func (p priceTypeDo) CreateInBatches(values []*model.PriceType, batchSize int) error {
	return p.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (p priceTypeDo) Save(values ...*model.PriceType) error {
	if len(values) == 0 {
		return nil
	}
	return p.DO.Save(values)
}

func (p priceTypeDo) First() (*model.PriceType, error) {
	if result, err := p.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.PriceType), nil
	}
}

func (p priceTypeDo) Take() (*model.PriceType, error) {
	if result, err := p.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.PriceType), nil
	}
}

func (p priceTypeDo) Last() (*model.PriceType, error) {
	if result, err := p.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.PriceType), nil
	}
}

func (p priceTypeDo) Find() ([]*model.PriceType, error) {
	result, err := p.DO.Find()
	return result.([]*model.PriceType), err
}

func (p priceTypeDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.PriceType, err error) {
	buf := make([]*model.PriceType, 0, batchSize)
	err = p.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (p priceTypeDo) FindInBatches(result *[]*model.PriceType, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return p.DO.FindInBatches(result, batchSize, fc)
}

func (p priceTypeDo) Attrs(attrs ...field.AssignExpr) *priceTypeDo {
	return p.withDO(p.DO.Attrs(attrs...))
}

func (p priceTypeDo) Assign(attrs ...field.AssignExpr) *priceTypeDo {
	return p.withDO(p.DO.Assign(attrs...))
}

func (p priceTypeDo) Joins(fields ...field.RelationField) *priceTypeDo {
	for _, _f := range fields {
		p = *p.withDO(p.DO.Joins(_f))
	}
	return &p
}

func (p priceTypeDo) Preload(fields ...field.RelationField) *priceTypeDo {
	for _, _f := range fields {
		p = *p.withDO(p.DO.Preload(_f))
	}
	return &p
}

func (p priceTypeDo) FirstOrInit() (*model.PriceType, error) {
	if result, err := p.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.PriceType), nil
	}
}

func (p priceTypeDo) FirstOrCreate() (*model.PriceType, error) {
	if result, err := p.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.PriceType), nil
	}
}

func (p priceTypeDo) FindByPage(offset int, limit int) (result []*model.PriceType, count int64, err error) {
	result, err = p.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = p.Offset(-1).Limit(-1).Count()
	return
}

func (p priceTypeDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = p.Count()
	if err != nil {
		return
	}

	err = p.Offset(offset).Limit(limit).Scan(result)
	return
}

func (p priceTypeDo) Scan(result interface{}) (err error) {
	return p.DO.Scan(result)
}

func (p priceTypeDo) Delete(models ...*model.PriceType) (result gen.ResultInfo, err error) {
	return p.DO.Delete(models)
}

func (p *priceTypeDo) withDO(do gen.Dao) *priceTypeDo {
	p.DO = *do.(*gen.DO)
	return p
}
