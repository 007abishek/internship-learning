const User = require("../models/user.model");

const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const user = await User.createUser({ name, email });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.getUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getUsers
};
