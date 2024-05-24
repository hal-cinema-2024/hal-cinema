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

down:
	docker compose down

migrate_up:
	DATABASE_HOST=localhost DATABASE_PORT=5432 DATABASE_USER=postgres DATABASE_PASSWORD=postgres DATABASE_NAME=hal_cinema go run cmd/migrate/main.go -f cmd/migrate/schema/