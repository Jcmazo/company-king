'use strict'

const EmployeesController = require('@controllers/employees');
const validateFields = require('../helpers/validation/employee')

async function employeesRoutes(app){
  app.get('/api/v1/employees',EmployeesController.getEmployees)
  app.post('/api/v1/employees', EmployeesController.createEmployee)
}

module.exports = employeesRoutes;