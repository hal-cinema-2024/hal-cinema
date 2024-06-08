package main

import (
	"context"
	"encoding/json"
	"flag"
	"log"
	"os"
	"strings"

	"github.com/hal-cinema-2024/backend/cmd/config"
	"github.com/hal-cinema-2024/backend/internal/driver/db"
	"github.com/hal-cinema-2024/backend/internal/entities/model"
)

type envFlag []string

var seederFile string

func (e *envFlag) String() string {
	return strings.Join(*e, ",")
}

func (e *envFlag) Set(v string) error {
	*e = append(*e, v)
	return nil
}

func init() {
	// Usage: eg. go run main.go -e .env -e hoge.env -e fuga.env ...
	var envFile envFlag
	flag.Var(&envFile, "e", "path to .env file \n eg. -e .env -e another.env . ")
	flag.StringVar(&seederFile, "f", "cmd/seeder/seeder.json", "path to seeder file")
	flag.Parse()

	if err := config.LoadEnv(envFile...); err != nil {
		log.Fatal(context.Background(), "lod Env Error", "error", err)
	}
}

func main() {
	if err := run(); err != nil {
		log.Fatal(context.Background(), "failed to run", "error", err)
	}
}

type Seeder struct {
	Permissions     []model.Permission     `json:"permissions"`
	Roles           []model.Role           `json:"roles"`
	RolePermissions []model.RolePermission `json:"role_permissions"`
}

func run() error {
	sqlDB := db.Connect()
	defer sqlDB.Close()

	gormDB := db.NewGORM(sqlDB)

	file, err := os.ReadFile(seederFile)
	if err != nil {
		return err
	}

	var seeder Seeder
	if err := json.Unmarshal(file, &seeder); err != nil {
		return err
	}

	if err := gormDB.Create(&seeder.Permissions).Error; err != nil {
		return err
	}

	if err := gormDB.Create(&seeder.Roles).Error; err != nil {
		return err
	}

	if err := gormDB.Create(&seeder.RolePermissions).Error; err != nil {
		return err
	}

	return nil
}
