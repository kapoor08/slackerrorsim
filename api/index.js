const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const routes = require("../routes/errors.route");

const corsOptions = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle preflight requests
app.options("*", cors(corsOptions));

app.use("/api/v1", routes);

app.get("/", (req, res, next) => {
  res.send("Welcome to the SlackErrorSim!");
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`server start on port: http://localhost:${port}`)
);

module.exports = app;
