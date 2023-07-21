const brancheService = require('../services/branches')

const getBranche = async (req, res) => {
  try {
    const findBranche = await brancheService.getBranche()
    return res.json(findBranche)
  } catch (err) {
    console.error(err)
    return res.status(424).json(err)
  }
}

const createBranche = async (req, res) => {
  try {
    const { name, location, contact, services } = req.body
    const newBranche = { name, location, contact, services }
    const branche = await brancheService.createBranche(newBranche)
    return res.json(branche)
  } catch (err) {
    console.error(err)
    return res.status(424).json(err)
  }
}

const updateBranche = async (req, res) => {
  try {
    const brancheId = req.params.id
    const { name, location, contact, services } = req.body
    const newBranche = { name, location, contact, services, brancheId }
    const branche = await brancheService.updateBranche(newBranche)
    return res.json(branche)
  } catch (err) {
    console.error(err)
    return res.status(424).json(err)
  }
}

const deleteBranche = async (req, res) => {
  try {
    const brancheId = req.params.id
    const branche = await brancheService.deleteBranche(brancheId)
    return res.json(branche)
  } catch (err) {
    console.error(err)
    return res.status(424).json(err)
  }
}

module.exports = { getBranche, createBranche, updateBranche, deleteBranche }
