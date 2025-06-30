const student = require('./student')
const identitycard = require('./identitycard')
const department = require('./department')
const courses = require('./courses')
const {studentCourses} = require('./student-Courses')

//One to one relationship
student.hasOne(identitycard)
identitycard.belongsTo(student)

//One to many relationship
department.hasMany(student)
student.belongsTo(department)

//Many to many relationship
student.belongsToMany(courses,{through:studentCourses})
courses.belongsToMany(student,{through:studentCourses})


module.exports = {
    student,
    identitycard,
    department,
    courses,
    studentCourses
}