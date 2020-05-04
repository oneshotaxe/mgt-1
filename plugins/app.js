import Vue from 'vue'
import Axios from 'axios'

import { driverSchema, busSchema, routeSchema, waySchema } from '@/server/schemas'
import Model from '@/vendor/Model'

Vue.prototype.models = {
  Driver: new Model(Axios.create({ baseURL: 'http://localhost:3000/drivers' }), driverSchema),
  Bus: new Model(Axios.create({ baseURL: 'http://localhost:3000/bus' }), busSchema),
  Route: new Model(Axios.create({ baseURL: 'http://localhost:3000/route' }), routeSchema),
  Way: new Model(Axios.create({ baseURL: 'http://localhost:3000/way' }), waySchema),
}