const employeeRepository =require('@repositories/employee/index')
const createEmployee = async (dataEmployee) =>{
  const employee = await employeeRepository.createEmployee(dataEmployee)
  return employee;
}

module.exports = { createEmployee }