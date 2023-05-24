PROJECT_NAME := digicommerce

dev:
	docker-compose --project-name ${PROJECT_NAME} --file docker-compose.dev.yml up --quiet-pull

prod:
	docker-compose --project-name ${PROJECT_NAME} --file docker-compose.yml up --quiet-pull

rm:
	docker-compose --project-name ${PROJECT_NAME} down

rmi:
	docker-compose --project-name ${PROJECT_NAME} down --rmi local --remove-orphans

rmiv:
	docker-compose --project-name ${PROJECT_NAME} down --rmi local --remove-orphans --volumes

.PHONY: dev prod rm rmi rmiv
clean:
	rm -rf code/node_modules