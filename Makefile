run:
	cd backend && make rund
	cd frontend && npm run dev
	
setup: 
	proto use
	cd frontend && npm ci
	cd backend && cp .env.example .env