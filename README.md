# chalmers-assessment

## Project Description

Simple RESTful API server that can parse CSV, JSON, and perform no-sql CRUD operations

The endpoints include:
- (GET) /toronto/meals (returns data from mongoDB)
- (GET) /toronto/clothing (returns data from JSON in resources)
- (GET) /barrie/meals (returns MOCK API call)
- (GET) /barrie/clothing (return csv file)

I have also included example endpoints for the remainder of the CRUD operations:
The responses from these endpoints have not been sanitized.
- (POST) /toronto/meals (create new meal)
- (GET) /toronto/meal/:mealId (return specific meal record)
- (DELETE) /toronto/meal/:mealId (remove specific meal record)
- (PUT) /toronto/meal/:mealId (update/overwrite specific meal record)

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run the mongo docker image: `docker-compose up -d`
  - `-d` daemonizes the image
7. Run the server: `npm run start`
8. API server will be running on `http://localhost:8080/`
9. Add a record to the DB `curl -d "service_name=new" "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:8080/toronto/meals`
10. All endpoints are now ready



## Dependencies

- Node ^10.16.3
- NPM ^6.11.3
- express ~4.16.1
- fast-csv ^3.4.0
- mongoose ^5.7.6
