const connection = require("../utils/dbconnection.js");

const allStudentsData = (req, res) => {
  const query = `select * from student`;
  connection.execute(query, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
};

const addNewStudent = (req, res) => {
  const { name, email, age } = req.body;
  const query = "INSERT INTO student (name, email, age) VALUES (?, ?, ?)";
  connection.execute(query, [name, email, age], (err, result) => {
    if (err) {
      console.error("Error inserting student:", err);
      return res.status(500).send(err);
    }
    console.log("Student added:", result.insertId);
    res.send({ id: result.insertId, name, email, age });
  });
};

const getStudentDataById = (req,res)=>{
    const id = req.params.id;
    const query = `select * from student where id = ?`
    connection.execute(query,[id],(err,result)=>{
        if(err){
            res.status().send(err)
        }
        if(result.length === 0){
            res.status(404).send("No students Found")
        }
        res.status(200).send(result[0])
    })
}

const updateStudentDataById = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const query = 'UPDATE student SET name = ?, email = ? WHERE id = ?';
  connection.query(query, [name, email, id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).send('Student not found');
    console.log('Student updated:', id);
    res.send({ id, name, email });
  });
};
 
const deleteStudentById = (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM student WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).send('Student not found');
    console.log('Student deleted:', id);
    res.send({ message: 'Student deleted successfully' });
  });
};

module.exports = {
  allStudentsData,
  addNewStudent,
  getStudentDataById,
  updateStudentDataById,
  deleteStudentById
};
