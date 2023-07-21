'use strict'

const employeeService = require('../services/employee')

const getEmployee = async (req, res) => {
  try {
    const findEmployee = await employeeService.getEmployee()
    return res.json(findEmployee)
  } catch (err) {
    console.error(err)
    return res.status(424).json(err)
  }
}

const createEmployee = async (req, res) => {
  try {
    const { name, email, age, documentId } = req.body
    const newEmploye = { name, email, age, documentId }
    const employee = await employeeService.createEmployee(newEmploye)
    return res.json(employee)
  } catch (err) {
    console.error(err)
    return res.status(424).json(err)
  }
}

const updateEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id
    const { name, email, age, documentId } = req.body
    const updatedEmployee = { name, email, age, documentId, employeeId }
    const employee = await employeeService.updateEmployee(updatedEmployee)
    return res.json(employee)
  } catch (err) {
    console.error(err)
    return res.status(424).json(err)
  }
}

const deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id
    const employee = await employeeService.deleteEmployee(employeeId)
    return res.json(employee)
  } catch (err) {
    console.error(err)
    return res.status(424).json(err)
  }
}

// const getIdEmployee = sysnc(red, res)

module.exports = { getEmployee, createEmployee, updateEmployee, deleteEmployee }
