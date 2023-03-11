'use strict'

const Boom = require('@hapi/boom')

const { Global, Error: ErrorEnum } = require('savia-enums')
const { logger, utils: { parsePayload, retryRequest: request } } = require('savia-utils')

const cache = require('../libs/cache')
const orderRepository = require('../repositories/order')
const errorRepository = require('../repositories/error')
const SampleHelperService = require('../helpers/SampleHelperService')

/**
 * @class Order
 *
 * sample service
 */
class Order {
  /**
   * Create or update from rabbit event.
   *
   * @param {Rabbit} event
   *
   * @returns {Promise<Boolean>}
   */
  static async createOrUpdateFromRabbit (event) {
    const { data } = parsePayload(event.content)

    try {
      switch (data.action) {
        case 'CREATE':
          await Order.create(data)
          break
        default:
          logger.info('the action is not allowed')
          break
      }
    } catch (err) {
      logger.error(err)
      await errorRepository.create({
        payload: data,
        message: err.message,
        companyId: data.order.company.id,
        stackTrace: err.stack || undefined,
        entity: Global.Entity.ORDER.formattedKey,
        microservice: ErrorEnum.Microservice.SIIGO.formattedKey
      })
    }

    return true
  }

  /**
   * Create from a rabbit event
   *
   * @param {OrderResponse} data
   *
   * @returns {Promise<Boolean>}
   */
  static async create ({ order, items, tracking, customer }) {
    let response = false

    try {
      const { statusCode, body } = await request(SampleHelperService.createRecord, {  }, retryStatus)
      const result = await body.json()

      if(statusCode === 200 || statusCode === 201) {
        await Promise.all([
          orderRepository.update(order.id, { invoiceId: result.number, invoiceIdERP: result.id, invoicingStatus: 'INVOICED' }),
          orderTrackingRepository.create({ ...tracking, orderId: order.id, companyId: order.company.id }),
        ])
      }

      response = true
      logger.info('record was created')
    } catch (err) {
      logger.error(err)
      let message = err.message
      let stackTrace = err.stack

      if (err.Errors) {
        message = err.Errors[0].Message
        stackTrace = 'an error has ocurred'
      }

      await errorRepository.create({
        message,
        stackTrace,
        companyId: order.company.id,
        payload: { order, items, tracking },
        entity: Global.Entity.ORDER.formattedKey,
        microservice: ErrorEnum.Microservice.SIIGO.formattedKey
      })
    }

    return response
  }

}

module.exports = Order
