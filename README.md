# 🚨 SlackErrorSim - Error Simulation API

This project is a **Node.js + Express** backend that simulates various HTTP error status codes for testing purposes. It can be integrated with a **Slack Webhook** or monitoring tools to test how your systems respond to different server-side error conditions.

> This is especially useful for testing **incident alerting**, **error monitoring**, and **response behavior** for client applications.

## 📦 Features

- Simulates common HTTP errors:
  - `400` - Bad Request
  - `403` - Forbidden
  - `404` - Not Found
  - `422` - Unprocessable Entity
  - `429` - Too Many Requests
  - `500` - Internal Server Error
  - `503` - Service Unavailable
- Organized with MVC pattern:
  - Clean routing
  - Centralized error controller
- CORS support enabled for all origins
- Express middleware setup (`body-parser`, `urlencoded`, `cors`)
- Ready for integration with **Slack Webhook** or error-handling frontends

---

## 🧱 Project Structure

```
slackerrorsim/
├── api/
│ ├── index.js # Entry point of the app
│ ├── controller/
│ │ └── error.js # All error simulation logic
│ └── routes/
│ └── errors.route.js # Routes to simulate each error
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── vercel.json # Optional: Vercel deployment config
```

## 🧰 Technologies Used

| Technology                            | Description                                                                      |
| ------------------------------------- | -------------------------------------------------------------------------------- |
| **Node.js**                           | JavaScript runtime environment for building scalable server-side applications.   |
| **Express.js**                        | Minimal and flexible Node.js web application framework for building APIs.        |
| **dotenv**                            | Loads environment variables from a `.env` file into `process.env`.               |
| **CORS**                              | Middleware to enable Cross-Origin Resource Sharing (CORS) for all requests.      |
| **Vercel** (optional)                 | Cloud platform for static sites and serverless functions – ideal for deployment. |
| **Slack Webhook** (integration-ready) | Used for sending notifications to Slack channels from the server.                |

## Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your machine.

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/kapoor08/slackerrorsim.git
   cd lack-webhook-demo-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. To start the server, run:
   ```bash
   npm start
   ```

## 📡 Available Endpoints

Base route prefix: `/api/v1`

| HTTP Method | Endpoint     | Status Code | Description                  |
| ----------- | ------------ | ----------- | ---------------------------- |
| `POST`      | `/error/400` | 400         | Simulates a Bad Request      |
| `GET`       | `/error/403` | 403         | Simulates Forbidden Access   |
| `GET`       | `/error/404` | 404         | Simulates Not Found          |
| `PUT`       | `/error/422` | 422         | Simulates Validation Failure |
| `PATCH`     | `/error/429` | 429         | Simulates Rate Limiting      |
| `GET`       | `/error/500` | 500         | Simulates Server Crash       |
| `DELETE`    | `/error/503` | 503         | Simulates Downtime           |

Base route `/` also returns a simple message:
`Welcome to the SlackErrorSim!`

## 🛠 Example Use Case

You can test Slack alerts by using services like:

- Slack Incoming Webhooks
- Postman

Example `curl` call:

```
curl -X GET http://localhost:3000/api/v1/error/500
```

## 🧪 Sample Error Response

```
{
  "status": "error",
  "statusCode": 500,
  "message": "We're sorry, but something went wrong!",
  "data": []
}
```

## 📄 License

This project is licensed under the MIT License.
