const simulateError500 = (req, res) => {
  console.error("Simulated 500 Error: Internal Server Error");
  res.status(500).json({
    status: "error",
    statusCode: 500,
    message: "We're sorry, but something went wrong!",
    data: [],
  });
};

const simulateError400 = (req, res) => {
  console.error("Simulated 404 Error: Resource Not Found");
  res.status(400).json({
    status: "error",
    statusCode: 400,
    message: "Bad request: Invalid input data!",
    data: [],
  });
};

const simulateError404 = (req, res) => {
  console.error("Simulated 404 Error: Resource Not Found");
  res.status(404).json({
    status: "error",
    statusCode: 404,
    message: "The requested resource was not found!",
    data: [],
  });
};

const simulateError403 = (req, res) => {
  console.error("Simulated 403 Error: Forbidden");
  res.status(403).json({
    status: "error",
    statusCode: 403,
    message: "You do not have permission to access this resource!",
    data: [],
  });
};

const Concurrent400 = (req, res) => {
  const data = req.body;
  console.error("Simulated 400 Error: Bad Request", { receivedData: data });
  res.status(400).json({
    status: "error",
    statusCode: 400,
    message: "Bad request: Invalid input data!",
    data: [],
  });
};

const simulateError422 = (req, res) => {
  const data = req.body;
  console.error("Simulated 422 Error: Unprocessable Entity", {
    receivedData: data,
  });
  res.status(422).json({
    status: "error",
    statusCode: 422,
    message: "Unprocessable entity: Validation failed!",
    data: [],
  });
};

const simulateError429 = (req, res) => {
  const data = req.body;
  console.error("Simulated 429 Error: Too Many Requests", {
    receivedData: data,
  });
  res.status(429).json({
    status: "error",
    statusCode: 429,
    message: "Too many requests: Rate limit exceeded!",
    data: [],
  });
};

const simulateError503 = (req, res) => {
  const data = req.body;
  console.error("Simulated 503 Error: Service Unavailable", {
    receivedData: data,
  });
  res.status(503).json({
    status: "error",
    statusCode: 503,
    message: "Service unavailable: Try again later!",
    data: [],
  });
};

module.exports = {
  simulateError500,
  Concurrent400,
  simulateError404,
  simulateError403,
  simulateError400,
  simulateError422,
  simulateError429,
  simulateError503,
};
