import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0a1d5df7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _93030bfe = () => interopDefault(import('..\\pages\\index\\backup\\download.vue' /* webpackChunkName: "pages_index_backup_download" */))
const _313b9f3a = () => interopDefault(import('..\\pages\\index\\backup\\upload.vue' /* webpackChunkName: "pages_index_backup_upload" */))
const _97186514 = () => interopDefault(import('..\\pages\\index\\downloads\\agreement.vue' /* webpackChunkName: "pages_index_downloads_agreement" */))
const _b8bce850 = () => interopDefault(import('..\\pages\\index\\downloads\\magazine.vue' /* webpackChunkName: "pages_index_downloads_magazine" */))
const _76b870cf = () => interopDefault(import('..\\pages\\index\\downloads\\magazineMini.vue' /* webpackChunkName: "pages_index_downloads_magazineMini" */))
const _33ca6078 = () => interopDefault(import('..\\pages\\index\\downloads\\report.vue' /* webpackChunkName: "pages_index_downloads_report" */))
const _4fcca3d4 = () => interopDefault(import('..\\pages\\_prefix.vue' /* webpackChunkName: "pages__prefix" */))
const _0c1313fa = () => interopDefault(import('..\\pages\\_prefix\\new.vue' /* webpackChunkName: "pages__prefix_new" */))
const _b5d1da72 = () => interopDefault(import('..\\pages\\_prefix\\profile\\_id.vue' /* webpackChunkName: "pages__prefix_profile__id" */))

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
    component: _0a1d5df7,
    name: "index",
    children: [{
      path: "backup/download",
      component: _93030bfe,
      name: "index-backup-download"
    }, {
      path: "backup/upload",
      component: _313b9f3a,
      name: "index-backup-upload"
    }, {
      path: "downloads/agreement",
      component: _97186514,
      name: "index-downloads-agreement"
    }, {
      path: "downloads/magazine",
      component: _b8bce850,
      name: "index-downloads-magazine"
    }, {
      path: "downloads/magazineMini",
      component: _76b870cf,
      name: "index-downloads-magazineMini"
    }, {
      path: "downloads/report",
      component: _33ca6078,
      name: "index-downloads-report"
    }]
  }, {
    path: "/:prefix",
    component: _4fcca3d4,
    name: "prefix",
    children: [{
      path: "new",
      component: _0c1313fa,
      name: "prefix-new"
    }, {
      path: "profile/:id?",
      component: _b5d1da72,
      name: "prefix-profile-id"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
