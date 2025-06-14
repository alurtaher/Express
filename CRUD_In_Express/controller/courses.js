const {courses} = require("../dataBase/db.js")

const allcourses = (req, res) => {
  const courseNames = courses.map(c => c.name).join(', ');
  res.send(`Courses: ${courseNames}`);
}

const courseDetailById = (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (course) {
    res.send(`Course: ${course.name}, Description: ${course.description}`);
  } else {
    res.send("Course not found");
  }
}

module.exports = {
    allcourses,
    courseDetailById
}