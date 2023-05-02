<h1 align="center">GeeksForGeeks API 👋</h1>
<p align="center">
    <img src = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png">
	<h3 align="center">An unofficial API for GeeksForGeeks for developers to fetch user details.</h3>
</p>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> API to Fetch GFG User Details

## Endpoints

To access the API, there is only 1 endpoint, *https://gfgstats.onrender.com/?userName=<YOUR_GFG_USERNAME>*

`Sample URL` - https://gfgstats.onrender.com/?userName=namandeepsingh557

## Instructions to run on your local system

- Pre-requisites:

  - Node install in your local machine

    - Install all the required libraries using the command

    `npm install`

- Directions to execute
  - `npm run dev`
  - Open the browser of your choice and visit your localhost, either *http://127.0.0.1:3001/?userName=namandeepsingh557* or _http://localhost:3001/?userName=namandeepsingh557_
  - See the API Response, understand it and build something with it.

---

### Sample API Responses

#### Success Response

```
  {
    "status": "Success",
    "message": "Data Fetched Successfully",
    "data": {
    "Easy": 1,
    "Medium": 13,
    "Hard": 62,
    "Basic": 107,
    "School": 21,
    "TotalProblemSolved": 204,
    "UserName": "namandeepsingh557"
    }
  }
```

#### Error Response

```
  {
    "status": "Error",
    "message": "Invalid UserName or not solved any problem on geeksforgeeks"
  }
```

---

## Build

```sh
npm run build
```

## Usage

```sh
npm run start
```

## Author

👤 **Namandeep Singh**

- Github: [@namandeep-123](https://github.com/namandeep-123)
- LinkedIn: [@inamandeep](https://linkedin.com/in/inamandeep)

## Show your support

Give a ⭐️ if this project helped you!

---
