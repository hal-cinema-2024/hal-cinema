run:
	cd backend && make rund
	cd admin && npm run dev
	cd website && npm run dev
	
setup: 
	proto use
	cd admin && npm ci
	cd website && npm ci
	cd backend && cp .env.example .env