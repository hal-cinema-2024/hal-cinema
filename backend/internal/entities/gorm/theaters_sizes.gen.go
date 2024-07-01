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

func newTheatersSize(db *gorm.DB, opts ...gen.DOOption) theatersSize {
	_theatersSize := theatersSize{}

	_theatersSize.theatersSizeDo.UseDB(db, opts...)
	_theatersSize.theatersSizeDo.UseModel(&model.TheatersSize{})

	tableName := _theatersSize.theatersSizeDo.TableName()
	_theatersSize.ALL = field.NewAsterisk(tableName)
	_theatersSize.TheaterSizeID = field.NewInt32(tableName, "theater_size_id")
	_theatersSize.Name = field.NewString(tableName, "name")
	_theatersSize.Capacity = field.NewInt32(tableName, "capacity")

	_theatersSize.fillFieldMap()

	return _theatersSize
}

type theatersSize struct {
	theatersSizeDo theatersSizeDo

	ALL           field.Asterisk
	TheaterSizeID field.Int32
	Name          field.String
	Capacity      field.Int32

	fieldMap map[string]field.Expr
}

func (t theatersSize) Table(newTableName string) *theatersSize {
	t.theatersSizeDo.UseTable(newTableName)
	return t.updateTableName(newTableName)
}

func (t theatersSize) As(alias string) *theatersSize {
	t.theatersSizeDo.DO = *(t.theatersSizeDo.As(alias).(*gen.DO))
	return t.updateTableName(alias)
}

func (t *theatersSize) updateTableName(table string) *theatersSize {
	t.ALL = field.NewAsterisk(table)
	t.TheaterSizeID = field.NewInt32(table, "theater_size_id")
	t.Name = field.NewString(table, "name")
	t.Capacity = field.NewInt32(table, "capacity")

	t.fillFieldMap()

	return t
}

func (t *theatersSize) WithContext(ctx context.Context) *theatersSizeDo {
	return t.theatersSizeDo.WithContext(ctx)
}

func (t theatersSize) TableName() string { return t.theatersSizeDo.TableName() }

func (t theatersSize) Alias() string { return t.theatersSizeDo.Alias() }

func (t theatersSize) Columns(cols ...field.Expr) gen.Columns {
	return t.theatersSizeDo.Columns(cols...)
}

func (t *theatersSize) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := t.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (t *theatersSize) fillFieldMap() {
	t.fieldMap = make(map[string]field.Expr, 3)
	t.fieldMap["theater_size_id"] = t.TheaterSizeID
	t.fieldMap["name"] = t.Name
	t.fieldMap["capacity"] = t.Capacity
}

func (t theatersSize) clone(db *gorm.DB) theatersSize {
	t.theatersSizeDo.ReplaceConnPool(db.Statement.ConnPool)
	return t
}

func (t theatersSize) replaceDB(db *gorm.DB) theatersSize {
	t.theatersSizeDo.ReplaceDB(db)
	return t
}

type theatersSizeDo struct{ gen.DO }

func (t theatersSizeDo) Debug() *theatersSizeDo {
	return t.withDO(t.DO.Debug())
}

func (t theatersSizeDo) WithContext(ctx context.Context) *theatersSizeDo {
	return t.withDO(t.DO.WithContext(ctx))
}

func (t theatersSizeDo) ReadDB() *theatersSizeDo {
	return t.Clauses(dbresolver.Read)
}

func (t theatersSizeDo) WriteDB() *theatersSizeDo {
	return t.Clauses(dbresolver.Write)
}

func (t theatersSizeDo) Session(config *gorm.Session) *theatersSizeDo {
	return t.withDO(t.DO.Session(config))
}

func (t theatersSizeDo) Clauses(conds ...clause.Expression) *theatersSizeDo {
	return t.withDO(t.DO.Clauses(conds...))
}

func (t theatersSizeDo) Returning(value interface{}, columns ...string) *theatersSizeDo {
	return t.withDO(t.DO.Returning(value, columns...))
}

func (t theatersSizeDo) Not(conds ...gen.Condition) *theatersSizeDo {
	return t.withDO(t.DO.Not(conds...))
}

func (t theatersSizeDo) Or(conds ...gen.Condition) *theatersSizeDo {
	return t.withDO(t.DO.Or(conds...))
}

func (t theatersSizeDo) Select(conds ...field.Expr) *theatersSizeDo {
	return t.withDO(t.DO.Select(conds...))
}

func (t theatersSizeDo) Where(conds ...gen.Condition) *theatersSizeDo {
	return t.withDO(t.DO.Where(conds...))
}

func (t theatersSizeDo) Order(conds ...field.Expr) *theatersSizeDo {
	return t.withDO(t.DO.Order(conds...))
}

func (t theatersSizeDo) Distinct(cols ...field.Expr) *theatersSizeDo {
	return t.withDO(t.DO.Distinct(cols...))
}

func (t theatersSizeDo) Omit(cols ...field.Expr) *theatersSizeDo {
	return t.withDO(t.DO.Omit(cols...))
}

func (t theatersSizeDo) Join(table schema.Tabler, on ...field.Expr) *theatersSizeDo {
	return t.withDO(t.DO.Join(table, on...))
}

func (t theatersSizeDo) LeftJoin(table schema.Tabler, on ...field.Expr) *theatersSizeDo {
	return t.withDO(t.DO.LeftJoin(table, on...))
}

func (t theatersSizeDo) RightJoin(table schema.Tabler, on ...field.Expr) *theatersSizeDo {
	return t.withDO(t.DO.RightJoin(table, on...))
}

func (t theatersSizeDo) Group(cols ...field.Expr) *theatersSizeDo {
	return t.withDO(t.DO.Group(cols...))
}

func (t theatersSizeDo) Having(conds ...gen.Condition) *theatersSizeDo {
	return t.withDO(t.DO.Having(conds...))
}

func (t theatersSizeDo) Limit(limit int) *theatersSizeDo {
	return t.withDO(t.DO.Limit(limit))
}

func (t theatersSizeDo) Offset(offset int) *theatersSizeDo {
	return t.withDO(t.DO.Offset(offset))
}

func (t theatersSizeDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *theatersSizeDo {
	return t.withDO(t.DO.Scopes(funcs...))
}

func (t theatersSizeDo) Unscoped() *theatersSizeDo {
	return t.withDO(t.DO.Unscoped())
}

func (t theatersSizeDo) Create(values ...*model.TheatersSize) error {
	if len(values) == 0 {
		return nil
	}
	return t.DO.Create(values)
}

func (t theatersSizeDo) CreateInBatches(values []*model.TheatersSize, batchSize int) error {
	return t.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (t theatersSizeDo) Save(values ...*model.TheatersSize) error {
	if len(values) == 0 {
		return nil
	}
	return t.DO.Save(values)
}

func (t theatersSizeDo) First() (*model.TheatersSize, error) {
	if result, err := t.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.TheatersSize), nil
	}
}

func (t theatersSizeDo) Take() (*model.TheatersSize, error) {
	if result, err := t.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.TheatersSize), nil
	}
}

func (t theatersSizeDo) Last() (*model.TheatersSize, error) {
	if result, err := t.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.TheatersSize), nil
	}
}

func (t theatersSizeDo) Find() ([]*model.TheatersSize, error) {
	result, err := t.DO.Find()
	return result.([]*model.TheatersSize), err
}

func (t theatersSizeDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.TheatersSize, err error) {
	buf := make([]*model.TheatersSize, 0, batchSize)
	err = t.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (t theatersSizeDo) FindInBatches(result *[]*model.TheatersSize, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return t.DO.FindInBatches(result, batchSize, fc)
}

func (t theatersSizeDo) Attrs(attrs ...field.AssignExpr) *theatersSizeDo {
	return t.withDO(t.DO.Attrs(attrs...))
}

func (t theatersSizeDo) Assign(attrs ...field.AssignExpr) *theatersSizeDo {
	return t.withDO(t.DO.Assign(attrs...))
}

func (t theatersSizeDo) Joins(fields ...field.RelationField) *theatersSizeDo {
	for _, _f := range fields {
		t = *t.withDO(t.DO.Joins(_f))
	}
	return &t
}

func (t theatersSizeDo) Preload(fields ...field.RelationField) *theatersSizeDo {
	for _, _f := range fields {
		t = *t.withDO(t.DO.Preload(_f))
	}
	return &t
}

func (t theatersSizeDo) FirstOrInit() (*model.TheatersSize, error) {
	if result, err := t.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.TheatersSize), nil
	}
}

func (t theatersSizeDo) FirstOrCreate() (*model.TheatersSize, error) {
	if result, err := t.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.TheatersSize), nil
	}
}

func (t theatersSizeDo) FindByPage(offset int, limit int) (result []*model.TheatersSize, count int64, err error) {
	result, err = t.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = t.Offset(-1).Limit(-1).Count()
	return
}

func (t theatersSizeDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = t.Count()
	if err != nil {
		return
	}

	err = t.Offset(offset).Limit(limit).Scan(result)
	return
}

func (t theatersSizeDo) Scan(result interface{}) (err error) {
	return t.DO.Scan(result)
}

func (t theatersSizeDo) Delete(models ...*model.TheatersSize) (result gen.ResultInfo, err error) {
	return t.DO.Delete(models)
}

func (t *theatersSizeDo) withDO(do gen.Dao) *theatersSizeDo {
	t.DO = *do.(*gen.DO)
	return t
}
