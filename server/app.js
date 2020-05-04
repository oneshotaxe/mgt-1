const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const { createRouter } = require('./CrudRouter')

const app = express()

app.use(bodyParser.json())

mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb://localhost/base',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  function (err) {
    if (err) throw err;
  }
)

const {
  driverSchema,
  busSchema,
  routeSchema,
  waySchema
} = require('./schemas')

const Bus = mongoose.model('bus', busSchema)
const Driver = mongoose.model('driver', driverSchema)
const Route = mongoose.model('route', routeSchema)
const Way = mongoose.model('way', waySchema)

app.use('/buses', createRouter('bus'))
app.use('/drivers', createRouter('driver'))
app.use('/routes', createRouter('route'))
app.use('/ways', createRouter('way'))

module.exports = app
