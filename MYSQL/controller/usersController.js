const connection = require("../utils/dbconnection.js");

const addNewUser = function (req, res) {
  const { name, email } = req.body;
  const query = "INSERT INTO users (name, email) VALUES (?, ?)";
  connection.execute(query, [name, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ id: result.insertId, name, email });
  });
};

const getAllUsers = function (req, res) {
  const query = 'SELECT * FROM users';
  connection.execute(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  })
};

module.exports = {
  addNewUser,
  getAllUsers,
};
