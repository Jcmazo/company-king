'use strict'

const initSaviaRoutes = require('./savia')
const initEmployeesRoutes = require('./employees')
function initRoutes (app) {
  initSaviaRoutes(app)
  initEmployeesRoutes(app)
}

module.exports = initRoutes
