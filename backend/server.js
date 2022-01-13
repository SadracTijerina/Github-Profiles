const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status = error || 500;
  res.json({ message: error.message || "An unknown occurred!" });
});

app.listen(5000);
