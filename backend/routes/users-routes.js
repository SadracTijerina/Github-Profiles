const express = require("express");

const HttpError = require("../models/http-error");

const router = express.Router();

const DUMMY_USERS = [
  {
    id: "u1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg/800px-%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg",
    title: "Sadrac Tijerina",
    description: "Hoping to land a job with this amazing company!",
    repoCount: 33,
    followerCount: 44,
  },
  {
    id: "u2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg/800px-%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg",
    title: "Sadrac",
    description: "Hoping to land a job with this amazing company!",
    repoCount: 3,
    followerCount: 44,
  },
  {
    id: "u3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg/800px-%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg",
    title: "bob",
    description: "Hoping to land a job with this amazing company!",
    repoCount: 33,
    followerCount: 4,
  },
  {
    id: "u4",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg/800px-%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg",
    title: "Sadrac Tijerina",
    description: "Hoping to land a job with this amazing company!",
    repoCount: 0,
    followerCount: 44,
  },
];

router.get("/", (req, res, next) => {
  res.json({ message: "homepage works" });
});

router.get("/search/:name", (req, res, next) => {
  const name = req.params.name;
  const user = DUMMY_USERS.find((p) => {
    // capital letters matter in name to pull data so I need to make sure to set all data pulled is lowercase or uppercase
    return p.title === name;
  });

  if (!user) {
    return next(new HttpError("No users were found.", 404));
  }

  res.json({ user: user });
});

router.get("/history", (req, res, next) => {
  console.log("GET Request in history");
  res.json({ message: "history works!" });
});

module.exports = router;
