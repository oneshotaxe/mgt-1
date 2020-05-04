const mongoose = require('mongoose/lib/browser')

class Model {
  axios = null
  schema = null
  constructor(axios, schema) {
    this.axios = axios
    this.schema = schema
  }

  newItem(source) {
    const doc = new mongoose.Document(source, this.schema)
    doc.isNew = false
    return doc
  }

  get default () {
    const doc = this.newItem({})
    doc.isNew = true
    return doc
  }

  async create(model) {
    const { data } = await this.axios.post('/create', model)
    return this.newItem(data)
  }

  async update(model) {
    const { data } = await this.axios.post('/update', model)
    return this.newItem(data)
  }

  async read(options = {}) {
    const { data } = await this.axios.post('/read', options)
    return data.map(source => this.newItem(source))
  }

  async readById(options = {}) {
    const { data } = await this.axios.post('/readById', options)
    return this.newItem(data)
  }

  async delete(_id) {
    await this.axios.post('/delete', { _id })
  }
}

module.exports = Model
