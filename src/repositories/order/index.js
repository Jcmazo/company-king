'use strict'

const { models, repositories: { BaseRepository } } = require('savia-mongoose')

/**
 * @class
 *
 * Data base actions to order entity.
 */
class OrderRepository extends BaseRepository {
  constructor () {
    super(models.OrderModel)
  }
}

module.exports = new OrderRepository()
