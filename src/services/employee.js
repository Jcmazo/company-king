const employeeRepository =require('../repositories/employee/index')

const getEmployee = async () =>{
  const employee = await employeeRepository.getEmployee()
  return employee
}

const createEmployee = async (dataEmployee) =>{
  const employee = await employeeRepository.createEmployee(dataEmployee)
  return employee
}

const updateEmployee = async (dataEmployee) =>{
  const employee = await employeeRepository.updateEmployee(dataEmployee)
  return employee
}

const deleteEmployee = async (dataEmployee) =>{
  const employee = await employeeRepository.deleteEmployee(dataEmployee)
  return employee
}
  module.exports = {getEmployee,createEmployee,updateEmployee,deleteEmployee}