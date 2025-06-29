const student = require('./student')
const identitycard = require('./identitycard')
const department = require('./department')


//One to one relationship
student.hasOne(identitycard)
identitycard.belongsTo(student)

//One to many relationship
department.hasMany(student)
student.belongsTo(department)


module.exports = {
    student,
    identitycard,
    department
}