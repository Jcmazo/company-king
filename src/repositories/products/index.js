const productsSchema = require('../../models/product.schema');


const getProducts = async () => {
  try {
    const products = await productsSchema.find()
    return products
  } catch (error) {
    console.log(error)
  }
}

const createProducts = async (dataProducts) => {
  try {
    console.log('-------------', dataProducts)
    const products = productsSchema(dataProducts)
    return products
      .save()
      .then((data) => {
        console.log(data)
        return 'product created successfully'
      })
  } catch (error) {
    console.log('Error creatind product')
  }
}

const updateProducts = async (dataProducts) => {
  try {
    console.log('-------------', dataProducts)
    return await productsSchema
      .updateOne({ _id: dataProducts.productsId }, { $set: dataProducts })
      .then((data) => {
        console.log(data)
        return 'product updated successfully'
      })
  } catch (error) {
    console.log('Error updating product')
    return error
  }
}

const deleteProducts = async (dataProducts) => {
  try {
    console.log('-------------', dataProducts)
    return await productsSchema
      .deleteOne({ _id: dataProducts })
      .then((data) => {
        console.log(data)
        return 'product deleted successfully'
      })
  } catch (err) {
    console.log('Error deleting product')
    return err
  }
}


module.exports = { getProducts, createProducts, updateProducts, deleteProducts }