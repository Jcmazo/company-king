'use strict'

const ProductsController = require('../controllers/products')

const api = '/api/v1/products'

async function productsRoutes(app) {
  app.get(`${api}`, ProductsController.getProducts)
  app.post(`${api}`, ProductsController.createProducts)
  app.put(`${api}/:id`, ProductsController.updateProducts)
  app.delete(`${api}/del/:id`, ProductsController.deleteProducts)
}

module.exports = productsRoutes;