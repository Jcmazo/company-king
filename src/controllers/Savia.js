'use strict'

class Savia {
  static async getSavia (req, res) {
    return res.send({ hello: 'hello from sample connector, Savia' })
  }
}

module.exports = Savia
