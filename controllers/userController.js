const register = (req, res) => {
  res.send(`user registered successfully`);
};
const login = (req, res) => {
  res.send("user login successfully");
};

const logout = (req, res) => {
  res.send("user logout successfully");
};

module.exports = { register, login, logout };
