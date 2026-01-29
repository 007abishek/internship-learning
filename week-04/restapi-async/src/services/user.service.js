let users = [];

exports.getUsers = async () => {
  return users;
};

exports.createUser = async (name) => {
  const user = {
    id: Date.now().toString(),
    name
  };
  users.push(user);
  return user;
};

exports.getUserById = async (id) => {
  return users.find(user => user.id === id);
};

exports.deleteUser = async (id) => {
  users = users.filter(user => user.id !== id);
};
