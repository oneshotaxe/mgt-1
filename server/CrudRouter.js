const { Router } = require('express')
const mongoose = require('mongoose')

function createRouter(modelName) {
  const router = Router()
  const Model = mongoose.models[modelName]

  router.post('/create', (req, res) => {
    const source = req.body
    const new_doc = new Model(source)
    new_doc.save()
      .then(doc => res.json(doc))
      .catch(err => res.status(500).json(err))
  })

  router.post('/createMany', (req, res) => {
    const source = req.body
    Model.insertMany(source)
      .then(docs => res.json(docs))
      .catch(err => res.status(500).json(err))
  })

  router.post('/read', (req, res) => {
    const options = req.body
    const query = Model.find()
    query.exec()
      .then(docs => {
        res.json(docs)
      })
      .catch(err => res.status(500).json(err))
  })

  router.post('/readById', (req, res) => {
    const _id = req.body._id
    const query = Model.findById({ _id })
    query.exec()
      .then(doc => res.json(doc))
      .catch(err => res.status(500).json(err))
  })

  router.post('/update', (req, res) => {
    const source = req.body
    const _id = source._id
    Model.updateOne({ _id }, source)
      .then(doc => res.json(doc))
      .catch(err => res.status(500).json(err))
  })

  router.post('/delete', (req, res) => {
    const _id = req.body._id
    Model.deleteOne({ _id })
      .then(status => res.json(status))
      .catch(err => res.status(500).json(err))
  })

  router.post('/deleteMany', (req, res) => {
    const conditions = req.body || {}
    Model.deleteMany(conditions)
      .then(status => res.json(status))
      .catch(err => res.status(500).json(err))
  })

  return router
}

module.exports = { createRouter }
