const branchesService = require('../services/branches')

const getBranches = async (req, res) => {
  try {
    const fingBranches = await branchesService.getBranches()
    return res.json(fingBranches)
  } catch (error) {
    console.error(error)
    return res.status(424).json(error)
  }
}

const createBranches = async (req, res) => {
  try {
    const { name, location, contact, services } = req.body
    const newBranches = { name, location, contact, services }
    console.log('This controllers')
    console.log('......................', newBranches)
    const branches = await branchesService.createBranches(newBranches)
    return res.json(branches)
  } catch (error) {
    console.error(error)
    return res.status(424).json(error)
  }
}

const updateBranches = async (req, res) => {
  try {
    const branchesId = req.params.id
    const { name, location, contact, services } = req.body
    const updatedBranches = { name, location, contact, services, branchesId }
    const branches = await branchesService.updateBranches(updatedBranches)
    return res.json(branches)
  } catch (error) {
    console.error(error)
    return res.status(424).json(error)
  }
}

const deleteBranches = async (req, res) => {
  try {
    const branchesId = req.params.id
    const branches = await branchesService.deleteBranches(branchesId)
    return res.json(branches)
  } catch (error) {
    console.error(error)
    return res.status(424).json(error)
  }
}

module.exports = { getBranches, createBranches, updateBranches, deleteBranches }