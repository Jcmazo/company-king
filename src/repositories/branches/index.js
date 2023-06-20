const branchesSchema = require('../../models/branches.schema');

const getBranches = async () => {
  try {
    const branches = await branchesSchema.find()
    return branches
  } catch (error) {
    console.log(error)
    return { error: 'Error get branches' }
  }
}

const createBranches = async (dataBranche) => {
  try {
    console.log('------------', dataBranche)
    const branches = branchesSchema(dataBranche)
    return branches
      .save()
      .then((data) => {
        console.log(data)
        return 'branche created successfully'
      })
  } catch (err) {
    console.error('Error creating branche', err)
    return err
  }
}

module.exports = {getBranches,createBranches}