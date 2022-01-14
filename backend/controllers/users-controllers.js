const HttpError = require("../models/http-error");
const User = require("../models/users");

const searchUserByUsername = (req, res, next) => {
  const name = req.params.name;
  const user = DUMMY_USERS.find((p) => {
    // capital letters matter in name to pull data so I need to make sure to set all data pulled is lowercase or uppercase
    return p.title === name;
  });

  if (!user) {
    return next(new HttpError("No users were found.", 404));
  }

  res.json({ user: user });
};

const getHistory = async (req, res, next) => {
  let historyUsers;

  try {
    historyUsers = await User.find({}, "-history");
  } catch (err) {
    const error = new HttpError(
      "Fetching history users failed, try again later.",
      500
    );
    return next(error);
  }
  res.json({
    historyUsers: historyUsers.map((user) => user.toObject({ getters: true })),
  });
};

const createHistory = async (req, res, next) => {
  const { id, image, title, description, repoCount, followerCount, history } =
    req.body;

  if (history) {
    const error = new HttpError("User is already in your history.", 500);
    return next(error);
  }

  const createdHistory = new User({
    id: id,
    image: image,
    title: title,
    description: "testing",
    repoCount: 33,
    followerCount: 3,
    history: true,
  });

  try {
    await createdHistory.save();
  } catch (err) {
    const error = new HttpError("Creating user failed, please try again.", 500);
    return next(error);
  }

  res.status(201).json({ history: createdHistory });
};

const deleteHistory = async (req, res, next) => {
  userId = req.params.id;
  let history;

  try {
    history = await User.findById(userId);
  } catch (err) {
    const error = new HttpError("Unable to delete history", 500);
    return next(error);
  }

  try {
    await history.remove();
  } catch (err) {
    const error = new HttpError("Unable to delete history", 500);
    return next(error);
  }

  res.status(200).json({ message: "Deleted user history" });
};

exports.searchUserByUsername = searchUserByUsername;
exports.getHistory = getHistory;
exports.createHistory = createHistory;
exports.deleteHistory = deleteHistory;
