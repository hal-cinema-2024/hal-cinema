.PHONY build
build:
	docker compose build

.PHONY run-backend
run-backned: build
	docker compose up

.PHONY run-backend-d
run-backned: build
	docker compose up -d

.PHONY run
run: run-backend
	cd frontend && npm run start
