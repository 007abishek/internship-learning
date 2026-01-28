const service = require("../services/user.service");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await service.getUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name required" });
    }

    const user = await service.createUser(name);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await service.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await service.deleteUser(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
