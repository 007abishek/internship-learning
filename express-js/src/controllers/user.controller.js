const getUsers = (req, res) => {
  res.json({
    users: ["Abhishek", "John", "Jane"],
  });
};

const createUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  res.status(201).json({
    message: "User created",
    user: name,
  });
};

module.exports = {
  getUsers,
  createUser,
};
