const connection = require("../utils/dbconnection.js");
const Student = require("../models/student.js");
const IdentityCard = require("../models/identitycard.js");

const allStudentsData = (req, res) => {
  const query = `select * from student`;
  connection.execute(query, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
};

//It is used to perform the insert operation
const addNewStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = await Student.create({
      name: name,
      email: email,
    });
    res.status(201).send(`Student name with ${name} is created Successfully`);
  } catch (error) {
    res.status(500).send("Unable to make Entry");
  }
};

const getStudentDataById = (req, res) => {
  const id = req.params.id;
  const query = `select * from student where id = ?`;
  connection.execute(query, [id], (err, result) => {
    if (err) {
      res.status().send(err);
    }
    if (result.length === 0) {
      res.status(404).send("No students Found");
    }
    res.status(200).send(result[0]);
  });
};

//It is used to perform the update operation
const updateStudentDataById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;

    const student = await Student.findByPk(id);
    if (!student) {
      res.status(404).send("Student not found");
    }
    student.name = name;
    await student.save();
    res.status(200).send(`Student ${name} updated Successfully`);
  } catch (error) {
    res.status(500).send("User has not been updated");
  }
};

//It is used to perform the update operation
const deleteStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findByPk(id);
    if (!student) {
      res.status(404).send("Student not found");
    }
    await student.destroy();
    res.status(200).send(`Student ${student.name} deleted Successfully`);
  } catch (error) {
    res.status(500).send("User has not been deleted");
  }
};

const addingValuesToStudentAndIdentityCard = async (req, res) => {
  try {
    const student = await Student.create(req.body.student);
    const idCard = await IdentityCard.create({
      ...req.body.IdentityCard,
      studentId: student.id,
    });
    res.status(201).send(student, idCard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  allStudentsData,
  addNewStudent,
  getStudentDataById,
  updateStudentDataById,
  deleteStudentById,
  addingValuesToStudentAndIdentityCard
};
