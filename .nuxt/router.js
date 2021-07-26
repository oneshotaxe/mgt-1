import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3562274f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _dbd6c54e = () => interopDefault(import('..\\pages\\index\\backup\\download.vue' /* webpackChunkName: "pages_index_backup_download" */))
const _6e32b892 = () => interopDefault(import('..\\pages\\index\\backup\\upload.vue' /* webpackChunkName: "pages_index_backup_upload" */))
const _71cef664 = () => interopDefault(import('..\\pages\\index\\downloads\\agreement.vue' /* webpackChunkName: "pages_index_downloads_agreement" */))
const _285c8980 = () => interopDefault(import('..\\pages\\index\\downloads\\magazine.vue' /* webpackChunkName: "pages_index_downloads_magazine" */))
const _04ec5a77 = () => interopDefault(import('..\\pages\\index\\downloads\\magazineMini.vue' /* webpackChunkName: "pages_index_downloads_magazineMini" */))
const _686f0430 = () => interopDefault(import('..\\pages\\index\\downloads\\magazineNew.vue' /* webpackChunkName: "pages_index_downloads_magazineNew" */))
const _6a0eafc0 = () => interopDefault(import('..\\pages\\index\\downloads\\report.vue' /* webpackChunkName: "pages_index_downloads_report" */))
const _4551816e = () => interopDefault(import('..\\pages\\_prefix.vue' /* webpackChunkName: "pages__prefix" */))
const _241cd0bc = () => interopDefault(import('..\\pages\\_prefix\\new.vue' /* webpackChunkName: "pages__prefix_new" */))
const _3be3a7c2 = () => interopDefault(import('..\\pages\\_prefix\\profile\\_id.vue' /* webpackChunkName: "pages__prefix_profile__id" */))

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
    component: _3562274f,
    name: "index",
    children: [{
      path: "backup/download",
      component: _dbd6c54e,
      name: "index-backup-download"
    }, {
      path: "backup/upload",
      component: _6e32b892,
      name: "index-backup-upload"
    }, {
      path: "downloads/agreement",
      component: _71cef664,
      name: "index-downloads-agreement"
    }, {
      path: "downloads/magazine",
      component: _285c8980,
      name: "index-downloads-magazine"
    }, {
      path: "downloads/magazineMini",
      component: _04ec5a77,
      name: "index-downloads-magazineMini"
    }, {
      path: "downloads/magazineNew",
      component: _686f0430,
      name: "index-downloads-magazineNew"
    }, {
      path: "downloads/report",
      component: _6a0eafc0,
      name: "index-downloads-report"
    }]
  }, {
    path: "/:prefix",
    component: _4551816e,
    name: "prefix",
    children: [{
      path: "new",
      component: _241cd0bc,
      name: "prefix-new"
    }, {
      path: "profile/:id?",
      component: _3be3a7c2,
      name: "prefix-profile-id"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
