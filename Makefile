build:
	docker compose build

run-backned: build
	docker compose up

run-backned-d: build
	docker compose up -d

run: run-backned-d
	cd frontend && npm run dev

setup: 
	proto use
	cd frontend && npm ci
	cd backend && cp .env.example .env