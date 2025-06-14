const { students } = require("../dataBase/db.js");
const allStudents = (req, res) => {
  const studentNames = students.map((s) => s.name).join(", ");
  res.send(`Students: ${studentNames}`);
};

const findById = (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (student) {
    res.send(`Student: ${student.name}`);
  } else {
    res.send("Student not found");
  }
};

module.exports = { allStudents, findById };
