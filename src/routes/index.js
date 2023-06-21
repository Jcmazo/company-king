'use strict'

const initSaviaRoutes = require('./savia')
const initEmployeesRoutes = require('./employees')
const initBranchesRoutes = require('./branches')
const initProductsRoutes = require('./products')
function initRoutes (app) {
  initSaviaRoutes(app)
  initEmployeesRoutes(app)
  initBranchesRoutes(app)
  initProductsRoutes(app)
}

module.exports = initRoutes
