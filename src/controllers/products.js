'use strict'

const productService = require('../services/products')

const getProduct = async (req, res) => {
  try {
    const findpPoduct = await productService.getProduct()
    return res.json(findpPoduct)
  } catch (err) {
    console.error(err)
    return res.status(424).json(err)
  }
}

const createProduct = async (req, res) => {
  try {
    const { name, price, amount } = req.body
    const newProduct = { name, price, amount }
    const product = await productService.createProduct(newProduct)
    return res.json(product)
  } catch (err) {
    console.error(err)
    return res.status(424).json(err)
  }
}

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id
    const { name, price, amount } = req.body
    const updatedproduct = { name, price, amount, productId }
    const product = await productService.updateProduct(updatedproduct)
    return res.json(product)
  } catch (err) {
    console.error(err)
    return res.status(424).json(err)
  }
}

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id
    const product = await productService.deleteProduct(productId)
    return res.json(product)
  } catch (err) {
    console.error(err)
    return res.status(424).json(err)
  }
}

module.exports = { getProduct, createProduct, updateProduct, deleteProduct }
