'use strict'

const ProductsController = require('../controllers/products')

const api = '/api/v1/products'

async function productsRoutes(app) {
  app.get(`${api}`, ProductsController.getProduct)
  app.post(`${api}`, ProductsController.createProduct)
  app.put(`${api}/:id`, ProductsController.updateProduct)
  app.delete(`${api}/del/:id`, ProductsController.deleteProduct)
}

module.exports = productsRoutes;