import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1675a58c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _7e081e84 = () => interopDefault(import('..\\pages\\index\\backup\\download.vue' /* webpackChunkName: "pages_index_backup_download" */))
const _64da887d = () => interopDefault(import('..\\pages\\index\\backup\\upload.vue' /* webpackChunkName: "pages_index_backup_upload" */))
const _c47d0f0e = () => interopDefault(import('..\\pages\\index\\downloads\\agreement.vue' /* webpackChunkName: "pages_index_downloads_agreement" */))
const _0e40f475 = () => interopDefault(import('..\\pages\\index\\downloads\\magazine.vue' /* webpackChunkName: "pages_index_downloads_magazine" */))
const _3c0842ec = () => interopDefault(import('..\\pages\\index\\downloads\\magazineMini.vue' /* webpackChunkName: "pages_index_downloads_magazineMini" */))
const _38a9b91b = () => interopDefault(import('..\\pages\\index\\downloads\\magazineNew.vue' /* webpackChunkName: "pages_index_downloads_magazineNew" */))
const _5d754c55 = () => interopDefault(import('..\\pages\\index\\downloads\\report.vue' /* webpackChunkName: "pages_index_downloads_report" */))
const _8fea8ece = () => interopDefault(import('..\\pages\\_prefix.vue' /* webpackChunkName: "pages__prefix" */))
const _6ac32357 = () => interopDefault(import('..\\pages\\_prefix\\new.vue' /* webpackChunkName: "pages__prefix_new" */))
const _4e9407ec = () => interopDefault(import('..\\pages\\_prefix\\profile\\_id.vue' /* webpackChunkName: "pages__prefix_profile__id" */))

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
    path: "/",
    component: _1675a58c,
    name: "index",
    children: [{
      path: "backup/download",
      component: _7e081e84,
      name: "index-backup-download"
    }, {
      path: "backup/upload",
      component: _64da887d,
      name: "index-backup-upload"
    }, {
      path: "downloads/agreement",
      component: _c47d0f0e,
      name: "index-downloads-agreement"
    }, {
      path: "downloads/magazine",
      component: _0e40f475,
      name: "index-downloads-magazine"
    }, {
      path: "downloads/magazineMini",
      component: _3c0842ec,
      name: "index-downloads-magazineMini"
    }, {
      path: "downloads/magazineNew",
      component: _38a9b91b,
      name: "index-downloads-magazineNew"
    }, {
      path: "downloads/report",
      component: _5d754c55,
      name: "index-downloads-report"
    }]
  }, {
    path: "/:prefix",
    component: _8fea8ece,
    name: "prefix",
    children: [{
      path: "new",
      component: _6ac32357,
      name: "prefix-new"
    }, {
      path: "profile/:id?",
      component: _4e9407ec,
      name: "prefix-profile-id"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
