const mongoose = require('mongoose')
const fs = require('fs')

const createModels = require('../server/createModels')

async function main() {
  const db = JSON.parse(await fs.readFileSync('./parse/db.json'))

  mongoose.set('useFindAndModify', false)
  const conn = mongoose.createConnection('mongodb://localhost/mgt',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )

  createModels(conn)

  const Driver = conn.models.driver
  const Bus = conn.models.bus
  const Route = conn.models.route
  const Way = conn.models.way

  await Driver.deleteMany()
  await Bus.deleteMany()
  await Route.deleteMany()
  await Way.deleteMany()

  await Promise.all(
    db.routes.map(async r => {
      const route = new Route({
        num: r.title
      })
      await route.save()
      for (let i=0; i<r.ways.length; i++) {
        const way = new Way({
          num: r.ways[i].title,
          route: route._id,
          times: r.ways[i].times
        })
        await way.save()
      }
    })
  )

  const ways = await Way.find().populate('route')

  await Promise.all(
    db.buses.map(async b => {
      const newWay = ways.find(w => w.num == b.way.num && w.route.num == b.way.route)
      console.log(newWay)
      const bus = new Bus({
        num: b.num,
        way: newWay ? newWay._id : null
      })
      await bus.save()
      for (let i=0; i<b.drivers.length; i++) {
        const driver = new Driver({
          num: b.drivers[i].num,
          bus: bus._id,
          name: b.drivers[i].name
        })
        await driver.save()
      }
    })
  )

  conn.close()
}

main()