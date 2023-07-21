'use strict'

const BranchesController = require('../controllers/branches')

const api = '/api/v1/branches'

async function branchesRoutes (app) {
  app.get(`${api}`, BranchesController.getBranche)
  app.post(`${api}`, BranchesController.createBranche)
  app.put(`${api}/:id`, BranchesController.updateBranche)
  app.delete(`${api}/del/:id`, BranchesController.deleteBranche)
}

module.exports = branchesRoutes
