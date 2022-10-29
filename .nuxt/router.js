import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _030b54ac = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _51920d76 = () => interopDefault(import('..\\pages\\index\\backup\\download.vue' /* webpackChunkName: "pages_index_backup_download" */))
const _18d0e822 = () => interopDefault(import('..\\pages\\index\\backup\\upload.vue' /* webpackChunkName: "pages_index_backup_upload" */))
const _a812c32a = () => interopDefault(import('..\\pages\\index\\downloads\\agreement.vue' /* webpackChunkName: "pages_index_downloads_agreement" */))
const _0eb64843 = () => interopDefault(import('..\\pages\\index\\downloads\\magazine.vue' /* webpackChunkName: "pages_index_downloads_magazine" */))
const _d21a008c = () => interopDefault(import('..\\pages\\index\\downloads\\magazineMini.vue' /* webpackChunkName: "pages_index_downloads_magazineMini" */))
const _e3a5aae6 = () => interopDefault(import('..\\pages\\index\\downloads\\magazineNew.vue' /* webpackChunkName: "pages_index_downloads_magazineNew" */))
const _09ad88ba = () => interopDefault(import('..\\pages\\index\\downloads\\report.vue' /* webpackChunkName: "pages_index_downloads_report" */))
const _4d64cb8b = () => interopDefault(import('..\\pages\\_prefix.vue' /* webpackChunkName: "pages__prefix" */))
const _71d917a5 = () => interopDefault(import('..\\pages\\_prefix\\new.vue' /* webpackChunkName: "pages__prefix_new" */))
const _6772ff7c = () => interopDefault(import('..\\pages\\_prefix\\profile\\_id.vue' /* webpackChunkName: "pages__prefix_profile__id" */))

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
    component: _030b54ac,
    name: "index",
    children: [{
      path: "backup/download",
      component: _51920d76,
      name: "index-backup-download"
    }, {
      path: "backup/upload",
      component: _18d0e822,
      name: "index-backup-upload"
    }, {
      path: "downloads/agreement",
      component: _a812c32a,
      name: "index-downloads-agreement"
    }, {
      path: "downloads/magazine",
      component: _0eb64843,
      name: "index-downloads-magazine"
    }, {
      path: "downloads/magazineMini",
      component: _d21a008c,
      name: "index-downloads-magazineMini"
    }, {
      path: "downloads/magazineNew",
      component: _e3a5aae6,
      name: "index-downloads-magazineNew"
    }, {
      path: "downloads/report",
      component: _09ad88ba,
      name: "index-downloads-report"
    }]
  }, {
    path: "/:prefix",
    component: _4d64cb8b,
    name: "prefix",
    children: [{
      path: "new",
      component: _71d917a5,
      name: "prefix-new"
    }, {
      path: "profile/:id?",
      component: _6772ff7c,
      name: "prefix-profile-id"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
