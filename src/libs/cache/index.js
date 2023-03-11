'use strict'

const { Cache } = require('savia-utils')

const cache = new Cache(300, false)

module.exports = cache
