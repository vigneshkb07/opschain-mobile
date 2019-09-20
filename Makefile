get-started:
	docker-compose up -d
get-started-with-build:
	docker-compose build && docker-compose up -d
test-api:
	docker run --rm --net opschain_network opschain-mobile_test run test