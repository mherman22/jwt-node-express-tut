## jwt-node-express-tut
This is a simple implementation of jwt authentication using;-
- nodejs
- express server
- mongoose
- mongodb
- bycrptjs
- Rest Client vscode extension for testing

## How to run the server?
### pre-requisites 
- Ensure you have installed node, npm and mongodb on your system.

### steps to follow
- clone this repository
- cd into repository
- run `npm install`
- set your `.env` file, for example as shown below
``` 
    MONGO_URL_DB = 'mongodb://xxxxxxxxx/database_name'
    API_PORT = 4001
    JWT_SECRET = 'generated jwt secret token'
    REFRESH_TOKEN = 'generated refresh token'
```
- Then use `npm run start-dev:server` to run the server

## To generate the SECRETKEY and REFRESH_TOKEN to use in .env file
- Open the terminal in the project root directory.
- run `node`
- Then enter `require('crypto').randomBytes(64).toString('hex')`.
- Press Enter.
- Repeat step number 3 to generate the refresh token

## Test Endpoints
- To test the end points, go to https://github.com/mherman22/jwt-node-express-tut/blob/master/requests/requests.rest and run send the request

## Example of a request and response
### Request (Login request)
```
POST http://localhost:4001/login HTTP/1.1
content-type: application/json

{
    "email":"sheenaharyndah33@gmail.com",
    "password":"Herman!23_ug"
}
```
### Response
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 436
ETag: W/"1b4-C9SEjFShFNi03cjgG6k1qEy6lgU"
Date: Mon, 03 Oct 2022 06:39:59 GMT
Connection: close

{
  "_id": "6336d415cf0cd7f46bdba1a7",
  "first_name": "Sheenah",
  "last_name": "aryndah",
  "email": "sheenaharyndah33@gmail.com",
  "password": "$2a$10$Cm8.6qxEiWPvqo99g4St8.SKje397qmAOveDO6/xGxQujbeiTAIwe",
  "__v": 0,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMzNmQ0MTVjZjBjZDdmNDZiZGJhMWE3IiwiZW1haWwiOiJzaGVlbmFoYXJ5bmRhaDMzQGdtYWlsLmNvbSIsImlhdCI6MTY2NDc3OTE5OSwiZXhwIjoxNjY0Nzg2Mzk5fQ.kX4vtkeqtCXFXngppSFxAdsvmIa6PVRp4RvY8eOkxrg"
}
```
