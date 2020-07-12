import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7b7043f3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _147a58fd = () => interopDefault(import('..\\pages\\index\\backup\\download.vue' /* webpackChunkName: "pages_index_backup_download" */))
const _195b0d36 = () => interopDefault(import('..\\pages\\index\\backup\\upload.vue' /* webpackChunkName: "pages_index_backup_upload" */))
const _b5b90948 = () => interopDefault(import('..\\pages\\index\\downloads\\magazine.vue' /* webpackChunkName: "pages_index_downloads_magazine" */))
const _0222035a = () => interopDefault(import('..\\pages\\index\\downloads\\magazineMini.vue' /* webpackChunkName: "pages_index_downloads_magazineMini" */))
const _d56b3e08 = () => interopDefault(import('..\\pages\\index\\downloads\\report.vue' /* webpackChunkName: "pages_index_downloads_report" */))
const _404b0512 = () => interopDefault(import('..\\pages\\_prefix.vue' /* webpackChunkName: "pages__prefix" */))
const _ed668b04 = () => interopDefault(import('..\\pages\\_prefix\\new.vue' /* webpackChunkName: "pages__prefix_new" */))
const _e592fe7a = () => interopDefault(import('..\\pages\\_prefix\\profile\\_id.vue' /* webpackChunkName: "pages__prefix_profile__id" */))

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
    component: _7b7043f3,
    name: "index",
    children: [{
      path: "backup/download",
      component: _147a58fd,
      name: "index-backup-download"
    }, {
      path: "backup/upload",
      component: _195b0d36,
      name: "index-backup-upload"
    }, {
      path: "downloads/magazine",
      component: _b5b90948,
      name: "index-downloads-magazine"
    }, {
      path: "downloads/magazineMini",
      component: _0222035a,
      name: "index-downloads-magazineMini"
    }, {
      path: "downloads/report",
      component: _d56b3e08,
      name: "index-downloads-report"
    }]
  }, {
    path: "/:prefix",
    component: _404b0512,
    name: "prefix",
    children: [{
      path: "new",
      component: _ed668b04,
      name: "prefix-new"
    }, {
      path: "profile/:id?",
      component: _e592fe7a,
      name: "prefix-profile-id"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
