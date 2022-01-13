const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/users-routes");

const app = express();

app.use("/api/users", userRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status = error || 500;
  res.json({ message: error.message || "An unknown occurred!" });
});

app.listen(5000);
