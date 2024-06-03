package factory

import (
	"github.com/k-yomo/fixtory/v2"
	"gorm.io/gorm"
)

type Factory[T any] struct {
	factory   *fixtory.Factory[T]
	bluePrint fixtory.BluePrintFunc[T]
	db        *gorm.DB
}

// Create creates a model with given traits
func (f Factory[T]) Create(traits ...T) *T {
	model := f.factory.NewBuilder(f.bluePrint, traits...).Build()
	result := f.db.Create(model)
	if result.Error != nil {
		panic(result.Error)
	}

	return model
}

// Create2 creates two models with given traits
func (f Factory[T]) Create2(traits ...T) []T {
	model1, model2 := f.factory.NewBuilder(f.bluePrint, traits...).Build2()
	models := []T{*model1, *model2}
	result := f.db.Create(models)
	if result.Error != nil {
		panic(result.Error)
	}
	return models
}
