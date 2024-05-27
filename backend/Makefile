test:
	go test ./...

get-u:
	go get -u ./...

build:
	docker compose build

run: build
	docker compose up

rund: build
	docker compose up -d

migrate:
	go run cmd/migrate/main.go -e .env -f cmd/migrate/schema

dsn=postgres://postgres:postgres@localhost:5432/hal_cinema

gen-model: migrate
	go run gorm.io/gen/tools/gentool@latest -c ./gen.tool.yaml