const prisma = require("../config/prisma");

const createUser = (data) => {
  return prisma.user.create({
    data
  });
};

const getUsers = () => {
  return prisma.user.findMany();
};

module.exports = {
  createUser,
  getUsers
};
