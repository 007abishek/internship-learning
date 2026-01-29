const prisma = require("../config/prisma");

const createTask = (data) => {
  return prisma.task.create({
    data
  });
};

const getTasks = () => {
  return prisma.task.findMany({
    include: { user: true }
  });
};

module.exports = {
  createTask,
  getTasks
};
