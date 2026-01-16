function isValidUsername(username) {
  return typeof username === "string" && username.length >= 4;
}

function isValidEmail(email) {
  return email.includes("@");
}

module.exports = {
  isValidUsername,
  isValidEmail
};
