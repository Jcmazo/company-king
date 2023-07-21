const employeeSchema = require('../../models/employee.schema')

const getEmployee = async () => {
  try {
    const employee = await employeeSchema.find()
    return employee
  } catch (error) {
    console.log(error)
    return { error: 'Error get employee' }
  }
}

const createEmployee = async (dataEmployee) => {
  const employee = employeeSchema(dataEmployee)
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

const updateEmployee = async (dataEmployee) => {
  return await employeeSchema
    .updateOne({ _id: dataEmployee.employeeId },
      { $set: dataEmployee })
    .then((data) => {
      console.log(data)
      return 'employee update successfully'
    })
    .catch((err) => {
      console.error('Error update employee', err)
      return err
    })
}

const deleteEmployee = async (dataEmployee) => {
  return await employeeSchema
    .deleteOne({ _id: dataEmployee })
    .then((data) => {
      console.log(data)
      return 'employee delete successfully'
    })
    .catch((err) => {
      console.error('Error delete employee', err)
      return err
    })
}

module.exports = { getEmployee, createEmployee, updateEmployee, deleteEmployee }
