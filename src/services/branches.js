const branchesRepository = require('../repositories/branches/index')

const getBranches = async () => {
  const branches = await branchesRepository.getBranches()
  return branches
}

const createBranches = async () => {
  const branches = await branchesRepository.createBranches()
  return branches
}



module.exports = { getBranches, createBranches }