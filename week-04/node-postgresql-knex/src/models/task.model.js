const db = require("../config/knex");

const createTask = async (data) => {
  const [task] = await db("tasks")
    .insert(data)
    .returning("*");
  return task;
};

const getTasks = async () => {
  return db("tasks")
    .join("users", "tasks.user_id", "users.id")
    .select(
      "tasks.id",
      "tasks.title",
      "tasks.completed",
      "tasks.user_id",
      "users.name as user"
    );
};

module.exports = {
  createTask,
  getTasks
};
