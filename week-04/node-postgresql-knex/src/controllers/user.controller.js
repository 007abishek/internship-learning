const User = require("../models/user.model");

const createUser = async (req, res) => {
  const user = await User.createUser(req.body);
  res.status(201).json(user);
};

const getUsers = async (req, res) => {
  const users = await User.getUsers();
  res.json(users);
};

module.exports = {
  createUser,
  getUsers
};
