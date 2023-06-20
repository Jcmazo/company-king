'use strict'

const BranchesController = require('../controllers/branches')

//const api = '/api/v1/branches'

async function branchesRoutes(app) {
  app.get('/api/v1/branches', BranchesController.getBranches)
  app.post('/api/v1/branches', BranchesController.createBranches)
}

module.exports = branchesRoutes;