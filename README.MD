# Hapi JS RESTful + MongoDB
- Clone the repo.
- Go to directory using a terminal.
- Install dependencies
  ```bash
    npm install
  ```
- Start the app:
  ```bash
    npm start
  ```
- Go to http://localhost:3500
- Create a new user
  ```bash
    POST: http://localhost:3500/auth/signup
  ```
  Allowed key:
  - name
  - userName
  - email
  - password
- List of users
  ```bash
    GET: http://localhost:3500/users
  ```
- Login (Get the JWT token valid for 7days)
  ```bash
    POST: http://localhost:3500/auth/signin
  ```
  Allowed key:
  - userEmailOrUsername
  - password