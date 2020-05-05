import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5df0784f = () => interopDefault(import('..\\pages\\buses.vue' /* webpackChunkName: "pages_buses" */))
const _c9df34a8 = () => interopDefault(import('..\\pages\\drivers.vue' /* webpackChunkName: "pages_drivers" */))
const _0022a479 = () => interopDefault(import('..\\pages\\routes.vue' /* webpackChunkName: "pages_routes" */))
const _fc28055a = () => interopDefault(import('..\\pages\\ways.vue' /* webpackChunkName: "pages_ways" */))
const _7b7043f3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/buses",
    component: _5df0784f,
    name: "buses"
  }, {
    path: "/drivers",
    component: _c9df34a8,
    name: "drivers"
  }, {
    path: "/routes",
    component: _0022a479,
    name: "routes"
  }, {
    path: "/ways",
    component: _fc28055a,
    name: "ways"
  }, {
    path: "/",
    component: _7b7043f3,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
