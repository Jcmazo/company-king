const mongoose = require('mongoose')

const initMongoConnection = (uri) => {
  console.log(uri)
  mongoose.connect(uri)
    .then((db) => {
      console.log('Connection established with the database', db.connections[0].name)
    })
    .catch((error) => {
      console.log('An error occurred with the connection to the database', uri, error)
    })
}

module.exports = initMongoConnection
