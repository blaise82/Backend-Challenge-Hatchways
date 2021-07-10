
# Backend-Challenge-Hatchways

API Requirements
All of the following routes are in the API:

**Request:**
>     Route: /api/ping
>      Method: GET

**Response:**
     Response body (JSON):

>   {    "success": true  }
Response status code: 200

Route 2: 
Request: 

> Route: /api/posts  
> Method: GET

Query Parameters:
 1. tags 
 2. sortBy 
 3. direction

## HeadingHow to test it manually
- clone this repo https://github.com/blaise82/Backend-Challenge-Hatchways `git clone https://github.com/blaise82/Backend-Challenge-Hatchways`
- install all nesecary package by running `npm install` in the root directory of the project
- create a .env fine `touch .env` and add PORT=8090
- to start the server run `npm run start`
by now the project will be up and running localy

routes example 
- step 1 solution will be found at `localhost:8090/api/ping`
- step 2 solution will be found at `localhost:8090/api/posts/:tags/:sortBy?/:direction?`
example 
http://localhost:2222/api/posts/history,tech/likes/desc
http://localhost:2222/api/posts/history,tech

