const productsRepository = require('../repositories/products/index')

const createProducts = async (dataProducts) => {
  const products = await productsRepository.createProducts(dataProducts)
  return products
}

const getProducts = async () => {
  const products = await productsRepository.getProducts()
  return products
}

const updateProducts = async (dataProducts) => {
  console.log('-------------',dataProducts)
  const updatedProducts = await productsRepository.updateProducts(dataProducts)
  return updatedProducts
}

const deleteProducts = async (dataProducts)=>{
  const product = await productsRepository.deleteProducts(dataProducts)
    return product
}

module.exports = { getProducts, createProducts ,updateProducts,deleteProducts}