'use strict'

const { Rabbit } = require('savia-utils')

const OrderService = require('../../services/Order')

/**
 * Subscriber to order queue
 *
 * @param {String} exchange
 */
async function createOrUpdateOrder (exchange) {
  await Rabbit.subscribe(
    exchange,
    'queue-name',
    'erp',
    OrderService.createOrUpdateFromRabbit
  )
}

/**
 * Init order subscribers
 *
 * @param {String} exchange
 */
function initOrderSubscriber (exchange) {
  createOrUpdateOrder(exchange)
}

module.exports = initOrderSubscriber
