'use strict'
require('./aliases');
require('dotenv').config();
const initMongoConnection = require('./src/DB/index')
const initApp = require('./src/app')
const app = initApp()

//logger.info('starting up siigo-connector ms')
app.listen(process.env.PORT, () => {
  initMongoConnection(process.env.MONGO_URI)

  console.log(`Server running on port ${process.env.PORT}`)
  //logger.info(`Server running on port ${process.env.PORT}`)
})
