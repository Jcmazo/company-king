const brancheRepository = require('../repositories/branches/index')

const getBranche = async () => {
  const branche = await brancheRepository.getBranche()
  return branche
}

const createBranche = async (dataBranche) => {
  const branche = await brancheRepository.createBranche(dataBranche)
  return branche
}

const updateBranche = async (dataBranche) => {
  const branche = await brancheRepository.updateBranche(dataBranche)
  return branche
}

const deleteBranche = async (databranche) => {
  const branche = await brancheRepository.deleteBranche(databranche)
    return branche
}

module.exports = { getBranche,createBranche,updateBranche,deleteBranche }