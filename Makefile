run:
	cd backend && make run-backned-d
	cd frontend && npm run dev
	
setup: 
	proto use
	cd frontend && npm ci
	cd backend && cp .env.example .env