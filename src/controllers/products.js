'use strict'

const productsService = require('../services/products')

const getProducts = async (req, res) =>{
  try {
      const products = await productsService.getProducts()
      return res.json(products)
    } catch (error) {
      console.error(error)
      return res.status(424).json(error)
    }
}

const createProducts = async (req,res) => {
  try {
    const { name, price, amount } = req.body
    const newProducts = { name, price, amount }
    console.log('------------------',newProducts)
    const products = await productsService.createProducts(newProducts)
    return res.json(products)
  } catch (error) {
    console.error(error)
    return res.status(424).json(error)
  }
}

const updateProducts = async (req,res) => {
  try {
    const productsId = req.params.id
    const {name, price, amount } = req.body
    const updatedProducts = {name, price, amount,productsId }
    console.log('------------------',updatedProducts)
    const products = await productsService.updateProducts(updatedProducts)
    return res.json(products)
  } catch (error) {
    console.error(error)
    return res.status(424).json(error)
  } 
}

const deleteProducts = async (req, res)=>{
  try {
    const productId = req.params.id
    const product = await productsService.deleteProducts(productId)
    return res.json(product)
  } catch (error) {
    console.error(error)
    return res.status(424).json(error)
  }
}

module.exports= {getProducts, createProducts,updateProducts,deleteProducts}