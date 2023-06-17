'use strict'

const EmployeesController = require('@controllers/employees')
const validateFields = require('../helpers/validation/employee')

async function employeesRoutes(app){
  app.get('/api/v1/employees',EmployeesController.getEmployee)
  //app.put('/api/v1/employees/:id', EmployeesController.getIdEmployee)
  app.post('/api/v1/employees',validateFields, EmployeesController.createEmployee)
  app.put('/api/v1/employees/:id',validateFields,EmployeesController.updateEmployee)
}

module.exports = employeesRoutes;