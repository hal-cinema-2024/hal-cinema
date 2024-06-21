run:
	cd backend && make rund
	cd admin && npm run dev &
	cd website && npm run dev &
	
down:
	cd backend && make down

setup: 
	proto use
	cd admin && npm ci
	cd website && npm ci
	cd backend && cp .env.example .env

goMigrate:
	migrate create -ext sql -dir backend/cmd/migrate/schema -seq ${name}