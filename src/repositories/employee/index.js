const EmployeeSchema = require('@models/employee.schema');

const createEmployee = async(dataEmployee) => {
  console.log('------------',dataEmployee)
  const employee = EmployeeSchema(dataEmployee)
  return employee
  .save()
  .then((data) => {
    console.log(data)
    return 'employee created successfully'
})
  .catch((err) => {
    console.error('Error creating employee', err)
    return err
  })
}

module.exports = {createEmployee}