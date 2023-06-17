const EmployeeSchema = require('@models/employee.schema');

const getEmployee = async () => {
  try {
    const employee = await EmployeeSchema.find()
    return employee
  } catch (error) {
    console.log(error)
    return {error:'Error get employee'}
  }
   
}
const createEmployee = async (dataEmployee) => {
  console.log('------------', dataEmployee)
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

const updateEmployee = async (dataEmployee) => {
  console.log('------------', dataEmployee)
  const employee = EmployeeSchema(dataEmployee)
  return employee
    .updateOne({ _id: dataEmployee.employeeId}, {$set:{dataEmployee}})
    .then((data) => {
      console.log(data)
      return 'employee update successfully'
    })
    .catch((err) => {
      console.error('Error update employee', err)
      return err
    })
}


module.exports = {getEmployee, createEmployee, updateEmployee }