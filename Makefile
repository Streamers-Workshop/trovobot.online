#!make
MAKEFLAGS += --silent
include .env
export $(shell sed 's/=.*//' .env)

PROJECT="Trovobot.online Service"

all: install test server

install: ;@echo "Installing ${PROJECT}"; \
				cd /server/; \
				npm install

install-prod: ;@echo "Installing ${PROJECT}"; \
				cd /server/; \
				npm install --only=production

test: ;@echo "Testing ${PROJECT}"; \
				cd /server/; \
			npm run test

server: ;@echo "Starting ${PROJECT}"; \
				cd /server/; \
				npm run pm2

update: ;@echo "Updating ${PROJECT}"; \
				git pull --rebase; \
				cd /server/; \
				clean; \
				npm install

clean: ;@echo "Removing ${PROJECT}'s node_modules"; \
				cd /server/; \
				rm -rf node_modules

docker-run: ;@echo "Starting Docker for ${PROJECT}"; \
			docker-compose -f docker-compose.yml up

docker-stop: ;@echo "Stopping Docker for ${PROJECT}"; \
			docker-compose -f docker-compose.yml down


.PHONY: all
.PHONY: Install
.PHONY: install-prod
.PHONY: test
.PHONY: server
.PHONY: update
.PHONY: clean
.PHONY: docker-run
.PHONY: docker-stop
