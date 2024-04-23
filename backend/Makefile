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