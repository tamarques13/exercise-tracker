# Exercise Tracker

A simple **Node.js** REST API for tracking users and their exercises.

## About

This project was built using the **boilerplate code** from the **Exercise Tracker** project in the freeCodeCamp course **“Back End Development and APIs.”**

This microservice allows users to:

- Create a user profile
- Create exercises for users
- Retrieve users
- Retrieve exercise logs

## Usage

### API Endpoint - Examples

#### Create User - POST
| Request | Response |
|----------|-----------|
| `/api/users` | `{"username": "john_doe","_id": "1"}` |
---

#### List All Users - GET
| Request | Response |
|----------|-----------|
| `/api/users/` | `[{"username": "john_doe","_id": "1"}, {"username": "jane_smith","_id": "2"}]` |
---

#### Add Exercise - POST
| Request | Response |
|----------|-----------|
| `/api/users/:_id/exercises` | `{"username": "john_doe","description": "Running","duration": 30,"date": "Mon Nov 17 2025","_id": "1"}` |
---

#### Get Exercise Logs - GET
| Request | Response |
|----------|-----------|
| `/api/users/:_id/logs` | `{"username": "john_doe","_id": "1","count": 2,"log":[{"description":"Running","duration":30,"date":"Mon Nov 17 2025"},{"description":"Cycling","duration":45,"date":"Tue Nov 18 2025"}]}` |
---

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/tamarques13/exercise-tracker.git

# Enter the project directory
cd exercise-tracker

# Install dependencies
npm install

# Run the server
npm start
