'use strict'

const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const bodyParser = require('body-parser')

const initRoutes = require('./routes')

function initApp () {
  const app = express()

  app.use(cors())
  app.use(helmet())
  app.use(bodyParser.json())

  initRoutes(app)

  return app
}

module.exports = initApp
