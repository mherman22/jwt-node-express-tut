### To generate the SECRETKEY and REFRESH_TOKEN to use in .env file
- Open the terminal in the project root directory.
- run `node`
- Then enter `require('crypto').randomBytes(64).toString('hex')`.
- Press Enter.
- Repeat step number 3 to generate the refresh token