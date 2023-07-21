const productSchema = require('../../models/product.schema')

const getProduct = async () => {
  try {
    const product = await productSchema.find()
    return product
  } catch (err) {
    console.log(err)
    return err
  }
}

const createProduct = async (dataProduct) => {
  try {
    const product = productSchema(dataProduct)
    return product
      .save()
      .then((data) => {
        console.log(data)
        return 'product created successfully'
      })
  } catch (err) {
    console.log('Error creatind product')
    return err
  }
}

const updateProduct = async (dataProduct) => {
  try {
    return await productSchema
      .updateOne({ _id: dataProduct.productId }, { $set: dataProduct })
      .then((data) => {
        console.log(data)
        return 'product updated successfully'
      })
  } catch (err) {
    console.log('Error updating product')
    return err
  }
}

const deleteProduct = async (dataProduct) => {
  try {
    return await productSchema
      .deleteOne({ _id: dataProduct })
      .then((data) => {
        console.log(data)
        return 'product deleted successfully'
      })
  } catch (err) {
    console.log('Error deleting product')
    return err
  }
}

module.exports = { getProduct, createProduct, updateProduct, deleteProduct }
