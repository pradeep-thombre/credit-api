# CREDIT USERS API

> This api is used for create the users, Login users, update users, fetch profile of user, upload CSV file and fetch data.

## Technologies Used

- Nodejs
- Expressjs
- MongoDB for database

## Prerequisites

- MongoDB
- Node.js 
- Command Line Tools
- Visual Studio Code
- Postman for testing

## TASK

- Login api (with authentication token)
- Signup api with photo upload(with authentication token)
- Get Current Profile.
- Update existing profile details and user also update its profile including photo as well.
- Upload .csv or .xlxs user wise with details (Age, Mobile, Place, City, State, Country and so on. Header will be pass in csv or xls Dynamic any Key Dynamic with any value) and save data in db and show the Details in get profile api.
- List all user with their related data.

## Installation

##### # Get the latest snapshot

`git clone https://github.com/pradeep-thombre/credit-api.git`

##### # Change directory

`cd credit-api`

##### # Install NPM dependencies

`npm install`

##### # Then simply start your app

`npm start`


## How to use 
- For registering user use - {URL}/users/register
  -Enter following details
    1. name
    2. mail
    3. city
    4. age
    5. password
    6. confirm_password
    7. phone
    8. state
    9. country

- For log in user use - {URL}/users/login
  -Enter following details
    1. name
    2. password

- For registering patients use - {URL}/users/update/:id
  -Enter following details
    pass id as param
    1. name
    2. mail
    3. city
    4. age
    5. password
    6. confirm_password
    7. phone
    8. state
    9. country

- For fetching  use - {URL}/profile/:id
  -Enter following details
    pass id as param

- For fetching  use - {URL}/uploadCSV
  -Enter following details
    pass CSV as file

- For seeing all users - {URL}/all

