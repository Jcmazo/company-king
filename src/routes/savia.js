'use strict'

const SaviaController = require('../controllers/Savia')

async function saviaRoutes (app) {
  app.get('/', SaviaController.getSavia)
}

module.exports = saviaRoutes
