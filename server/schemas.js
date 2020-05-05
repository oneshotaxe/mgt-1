const mongoose = require('mongoose')
const moment = require('moment')
const graphics = require('./graphics.json')

const Types = mongoose.Schema.Types

const graphicSchema = new mongoose.Schema({
  format: { type: Types.String, default: graphics[0].format },
  name: { type: Types.String, default: graphics[0].name },
  date: { type: Types.String, default: graphics[0].date },
  items: { type: [Types.String], default: graphics[0].format.split('') },
  status: Types.String,
  exceptions: [{ date: Types.String, status: Types.String }]
})

graphicSchema.methods.addItems = function () {
  this.items = this.items.concat(this.format.split(''))
}

graphicSchema.methods.removeItems = function () {
  if (this.items.length == this.format.length) {
    return
  }
  this.items = this.items.splice(0, this.items.length - this.format.length)
}

const workStatuses = ['Р', '1', '2']
const exceptionStatuses = ['Р', '1', '2', 'В', 'О', 'Б']

graphicSchema.methods.setTemplate = function (graphicName) {
  const graphic = graphics.find(value => value.name == graphicName)

  this.format = graphic.format
  this.name = graphic.name
  this.date = graphic.date
  this.items = graphic.format.split('')
}

graphicSchema.methods.rollStatus = function (index) {
  const currentStatus = this.items[index]
  this.items = this.items.map((value, i) => {
    if (i != index) {
      return value
    }
    return _nextItemInArr(workStatuses, currentStatus)
  })
}

graphicSchema.methods.rollException = function (status) {
  if (!status.exception) {
    const nextStatus = _nextItemInArr(exceptionStatuses, status.value)
    this.exceptions.push({ date: status.date, status: nextStatus })
  } else {
    const nextStatus = _nextItemInArr(exceptionStatuses, status.exception)
    this.exceptions = this.exceptions.map((value) => {
      if (value.date != status.date) {
        return value
      }
      if (status.value == nextStatus) {
        return null
      }
      console.log(nextStatus)
      return { date: status.date, status: nextStatus }
    }).filter(value => value)
  }
}

function _nextItemInArr(arr, curItem) {
  const curIndex = arr.findIndex(value => value == curItem)
  const nextIndex = (curIndex + 1) % arr.length
  return arr[nextIndex]
}

graphicSchema.methods.statusesByDate = function (date, count) {
  const statuses = []
  const graphic = this.items
  const initDate = moment(this.date)
  const currentDate = moment(date)
  const exceptions = this.exceptions

  for (let i = 0; i < count; i++) {
    const diff = currentDate.diff(initDate, 'days')
    const dateAsStr = currentDate.format('YYYY-MM-DD')
    const exception = exceptions.find(value => value.date == dateAsStr)

    const item = {
      date: dateAsStr,
      value: graphic[mod(diff, graphic.length)] || null,
      exception: exception && exception.status
    }

    statuses.push(item)
    currentDate.add(1, 'days')
  }

  return statuses
}

function mod(l, r) {
  return ((l % r) + r) % r
}

const driverSchema = new mongoose.Schema({
  name: Types.String,
  num: Types.String,
  graphic: { type: graphicSchema, default: () => new mongoose.Document({}, graphicSchema) },
  bus: { type: Types.ObjectId, ref: 'bus' }
})

const busSchema = new mongoose.Schema({
  num: Types.String,
  color: Types.String,
  mark: Types.String,
  capacity: Types.String,
  status: Types.String,
  way: Types.String
})

const waySchema = new mongoose.Schema({
  title: { type: Types.String, default: '' },
  times: {
    durationFirstSmene: { type: Types.String, default: '' },
    durationSecondSmene: { type: Types.String, default: '' },
    outPark: { type: Types.String, default: '' },
    change: { type: Types.String, default: '' },
    endWork: { type: Types.String, default: '' },
    lunchFirstSmene: { type: Types.String, default: '' },
    lunchSecondSmene: { type: Types.String, default: '' }
  },
  isTwoSmene: Types.Boolean,
  isWeekend: Types.Boolean,
  isWeekday: Types.Boolean,
  isSummer: Types.Boolean,
  isWinter: Types.Boolean,
  capacities: Array,
  colors: Array,
  route: { type: Types.ObjectId, ref: 'route' }
})

const routeSchema = new mongoose.Schema({
  title: Types.String
})

module.exports = {
  busSchema,
  driverSchema,
  routeSchema,
  waySchema
}
