const db = require("../config/knex");

const createUser = async (data) => {
  const [user] = await db("users")
    .insert(data)
    .returning("*");
  return user;
};

const getUsers = async () => {
  return db("users").select("*");
};

module.exports = {
  createUser,
  getUsers
};
