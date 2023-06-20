'use strict'

const initSaviaRoutes = require('./savia')
const initEmployeesRoutes = require('./employees')
const initBranchesRoutes = require('./branches')
function initRoutes (app) {
  initSaviaRoutes(app)
  initEmployeesRoutes(app)
  initBranchesRoutes(app)
}

module.exports = initRoutes
