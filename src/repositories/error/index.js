'use strict'

const { models, repositories: { BaseRepository } } = require('savia-mongoose')

/**
 * @class
 *
 * Data base actions to error entity.
 */
class ErrorRepository extends BaseRepository {
  constructor () {
    super(models.ErrorModel)
  }
}

module.exports = new ErrorRepository()
