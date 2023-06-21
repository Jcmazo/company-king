const branchesRepository = require('../repositories/branches/index')

const getBranches = async () => {
  const branches = await branchesRepository.getBranches()
  return branches
}

const createBranches = async (dataBranche) => {
  const branches = await branchesRepository.createBranches(dataBranche)
  console.log('This services')
  console.log('....................',dataBranche)
  return branches
}

const updateBranches = async (dataBranche) => {
  const branches = await branchesRepository.updateBranches(dataBranche)
  console.log('This services')
  console.log('....................',dataBranche)
  return branches
}

const deleteBranches = async (dataBranches) => {
  const branches = await branchesRepository.deleteBranches(dataBranches)
    console.log('This services')
    console.log('....................',dataBranches)
    return branches
}

module.exports = { getBranches,createBranches,updateBranches,deleteBranches }