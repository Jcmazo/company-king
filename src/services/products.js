const productRepository = require('../repositories/products/index')

const createProduct = async (dataproduct) => {
  const product = await productRepository.createProduct(dataproduct)
  return product
}

const getProduct = async () => {
  const product = await productRepository.getProduct()
  return product
}

const updateProduct = async (dataproduct) => {
  const product = await productRepository.updateProduct(dataproduct)
  return product
}

const deleteProduct = async (dataproduct) => {
  const product = await productRepository.deleteProduct(dataproduct)
  return product
}

module.exports = { getProduct, createProduct, updateProduct, deleteProduct }
