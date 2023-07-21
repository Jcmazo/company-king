'use strict'

const EmployeesController = require('../controllers/employees')
const validateFields = require('../helpers/validation/employee')

const api = '/api/v1/employees'

async function employeesRoutes (app) {
  app.get(`${api}`, EmployeesController.getEmployee)
  // app.put('/api/v1/employees/:id', EmployeesController.getIdEmployee)
  app.post(`${api}`, validateFields, EmployeesController.createEmployee)
  app.put(`${api}/:id`, validateFields, EmployeesController.updateEmployee)
  app.delete(`${api}/del/:id`, EmployeesController.deleteEmployee)
}
module.exports = employeesRoutes
