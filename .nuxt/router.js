import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _642e0d1d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _a6a828b2 = () => interopDefault(import('..\\pages\\index\\backup\\download.vue' /* webpackChunkName: "pages_index_backup_download" */))
const _f9757b40 = () => interopDefault(import('..\\pages\\index\\backup\\upload.vue' /* webpackChunkName: "pages_index_backup_upload" */))
const _0da3fc1c = () => interopDefault(import('..\\pages\\index\\downloads\\agreement.vue' /* webpackChunkName: "pages_index_downloads_agreement" */))
const _d4041f1c = () => interopDefault(import('..\\pages\\index\\downloads\\magazine.vue' /* webpackChunkName: "pages_index_downloads_magazine" */))
const _64bcf869 = () => interopDefault(import('..\\pages\\index\\downloads\\magazineMini.vue' /* webpackChunkName: "pages_index_downloads_magazineMini" */))
const _39f9dffe = () => interopDefault(import('..\\pages\\index\\downloads\\magazineNew.vue' /* webpackChunkName: "pages_index_downloads_magazineNew" */))
const _034b2392 = () => interopDefault(import('..\\pages\\index\\downloads\\report.vue' /* webpackChunkName: "pages_index_downloads_report" */))
const _1e89a888 = () => interopDefault(import('..\\pages\\_prefix.vue' /* webpackChunkName: "pages__prefix" */))
const _cdc7a3d8 = () => interopDefault(import('..\\pages\\_prefix\\new.vue' /* webpackChunkName: "pages__prefix_new" */))
const _11be9426 = () => interopDefault(import('..\\pages\\_prefix\\profile\\_id.vue' /* webpackChunkName: "pages__prefix_profile__id" */))

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
    component: _642e0d1d,
    name: "index",
    children: [{
      path: "backup/download",
      component: _a6a828b2,
      name: "index-backup-download"
    }, {
      path: "backup/upload",
      component: _f9757b40,
      name: "index-backup-upload"
    }, {
      path: "downloads/agreement",
      component: _0da3fc1c,
      name: "index-downloads-agreement"
    }, {
      path: "downloads/magazine",
      component: _d4041f1c,
      name: "index-downloads-magazine"
    }, {
      path: "downloads/magazineMini",
      component: _64bcf869,
      name: "index-downloads-magazineMini"
    }, {
      path: "downloads/magazineNew",
      component: _39f9dffe,
      name: "index-downloads-magazineNew"
    }, {
      path: "downloads/report",
      component: _034b2392,
      name: "index-downloads-report"
    }]
  }, {
    path: "/:prefix",
    component: _1e89a888,
    name: "prefix",
    children: [{
      path: "new",
      component: _cdc7a3d8,
      name: "prefix-new"
    }, {
      path: "profile/:id?",
      component: _11be9426,
      name: "prefix-profile-id"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
