'use strict'

const { logger } = require('savia-utils')
const { connection: { initMongoConnection } } = require('savia-mongoose')

const initApp = require('./src/app')

const initRabbit = require('./src/rabbit')

const app = initApp()

logger.info('starting up siigo-connector ms')

app.listen(process.env.PORT, () => {
  initRabbit()
    .then(() => {
      logger.info('rabbitMQ has initialized')
    })
    .catch((err) => {
      logger.fatal(err)
      process.exit(1)
    })

  initMongoConnection({
    logger,
    env: process.env.NODE_ENV,
    uri: process.env.MONGO_URI,
    dbName: process.env.DB_NAME
  }).catch(err => {
    logger.fatal(err)
    process.exit(1)
  })

  logger.info(`Server running on port ${process.env.PORT}`)
})

function handleFatalError (err) {
  logger.fatal(err.message)
  logger.fatal(err.stack)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)
