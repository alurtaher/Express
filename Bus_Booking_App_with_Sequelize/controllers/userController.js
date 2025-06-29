const User = require('../models/user.js');

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.json(user);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};