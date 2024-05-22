FORCE:

build: FORCE
	npm run build
	docker build . -t achilles-portfolio:latest

deploy: FORCE
	heroku container:login
	docker tag achilles-portfolio registry.heroku.com/achilles-portfolio/web
	docker push registry.heroku.com/achilles-portfolio/web
	heroku container:release web -a achilles-portfolio

release: build deploy
