'use strict'

const employeeService = require('@services/employee')

const getEmployee  = async (req, res) =>{ 
  try {
    const fingemployee = await employeeService.getEmployee()
    return res.json(fingemployee)
  } catch (error) {
    console.error(error)
    return res.status(424).json(error);
  }
}

const createEmployee = async (req, res) => {
  try {
    const { name, email, age} = req.body
    const newEmploye = { name, email, age }
    const employee = await employeeService.createEmployee(newEmploye)
    return res.json(employee)
  } catch (error) {
    console.error(error)
    return res.status(424).json(error);
  }
}

const updateEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id
    const { name, email, age } = req.body
    const updatedEmployee = { name, email, age, employeeId}
    const employee = await employeeService.updateEmployee(updatedEmployee)
    return res.json(employee)
  } catch (error) {
    console.error(error);
    return res.status(424).json(error)
  }
}

module.exports = {getEmployee, createEmployee,updateEmployee}
