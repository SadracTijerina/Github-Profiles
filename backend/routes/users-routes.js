const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/users-controllers");

router.get("/", (req, res, next) => {
  res.json({ message: "homepage works" });
});

router.get("/search/:name", userControllers.searchUserByUsername);

router.get("/history", userControllers.getHistory);

router.post("/history", userControllers.createHistory);

router.delete("/history/:id", userControllers.deleteHistory);

module.exports = router;
