'use strict'

const BranchesController = require('../controllers/branches')

const api = '/api/v1/branches'

async function branchesRoutes(app) {
  app.get(`${api}`, BranchesController.getBranches)
  app.post(`${api}`, BranchesController.createBranches)
  app.put(`${api}/:id`, BranchesController.updateBranches)
  app.delete(`${api}/del/:id`, BranchesController.deleteBranches)
}

module.exports = branchesRoutes;