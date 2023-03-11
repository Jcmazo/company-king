'use strict'

const { Rabbit } = require('savia-utils')

// subscribers
const initOrderSubscriber = require('./order/subscribe')

/**
 * Create a rabbit connection and subscriber to queues
 *
 * @returns {Promise<Boolean>}
 */
async function initRabbit () {
  await Rabbit.createChannel(process.env.RABBIT_MQ_URL)
  initOrderSubscriber('exchange')

  return true
}

module.exports = initRabbit
