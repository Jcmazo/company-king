const brancheSchema = require('../../models/branches.schema');

const getBranche = async () => {
  try {
    const branche = await brancheSchema.find()
    return branche
  } catch (error) {
    console.log(error)
    return { error: 'Error get branche' }
  }
}

const createBranche = async (dataBranche) => {
  try {
    console.log('------------', dataBranche)
    const branche = brancheSchema(dataBranche)
    return branche
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

const updateBranche = async (databranche) =>{
  try {
    console.log('------------',databranche)
    return await brancheSchema
     .updateOne({ _id : databranche.brancheId},
      { $set: databranche})
     .then((data) => {
        console.log(data)
        return 'branche updated successfully'
      })
  } catch (err) {
    console.error('Error updating branche', err)
    return err
  }
}

const deleteBranche = async (databranche) =>{
  try {
    console.log('------------',databranche)
    return await brancheSchema
    .deleteOne({ _id : databranche})
    .then((data) => {
        console.log(data)
        return 'branche deleted successfully'
      })
  } catch (err) {
    console.error('Error deleting branche', err)
    return err
  }
}

module.exports = {getBranche,createBranche,updateBranche,deleteBranche}