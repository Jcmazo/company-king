'use strict'

const { request } = require('undici')

/**
 * @class
 *
 * sample API call class
 */
class SampleHelperService {
  /**
   *
   * @param {String} username
   * @param {String} accessKey
   *
   * @returns {Promise<{
   *  statusCode: Number
   *  headers: object
   *  body: Promise<{
   *    access_token: String
   *  }>
   * }>}
   */
  static auth (username, accessKey) {
    return request(`${process.env.SIIGO_API_URL}/auth`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        access_key: accessKey
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  /**
   * Create a customer on siigo erp
   *
   * @param {SiigoCustomer} customer
   * @param {String} token
   *
   * @returns {Promise<{
   *  statusCode: Number
   *  headers: object
   *  body: Promise<object>
   * }>}
   */
  static createRecord ({ record, token }) {
    return request(`${process.env.SIIGO_API_URL}/v1/customers`, {
      method: 'POST',
      body: JSON.stringify(record),
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json'
      }
    })
  }

  }

module.exports = SampleHelperService
