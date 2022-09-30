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

- To test the end points, go to https://github.com/mherman22/jwt-node-express-tut/blob/master/requests/requests.rest and run send the request