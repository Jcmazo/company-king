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
    console.log('This repositori')
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

const updateBranches = async (dataBranches) =>{
  try {
    console.log('This repositori')
    console.log('------------',dataBranches)
    return await branchesSchema
     .updateOne({ _id : dataBranches.branchesId},
      { $set: dataBranches})
     .then((data) => {
        console.log(data)
        return 'branche updated successfully'
      })
  } catch (err) {
    console.error('Error updating branche', err)
    return err
  }
}

const deleteBranches = async (dataBranches) =>{
  try {
    console.log('This repositori')
    console.log('------------',dataBranches)
    return await branchesSchema
    .deleteOne({ _id : dataBranches})
    .then((data) => {
        console.log(data)
        return 'branche deleted successfully'
      })
  } catch (err) {
    console.error('Error deleting branche', err)
    return err
  }
}

module.exports = {getBranches,createBranches,updateBranches,deleteBranches}