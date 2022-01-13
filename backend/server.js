const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use((req, res, bext) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Allow-Control-Allow-Methods, GET, DELETE, POST");
  next();
});

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

mongoose
  .connect(
    "mongodb+srv://reavity:VJF1dka.xrf.xbn2vud@cluster0.toh7o.mongodb.net/mern?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
