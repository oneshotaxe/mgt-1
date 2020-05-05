import Vue from 'vue'

import MGraphicForm from '@/components/MGraphicForm'

export const DriverForm = Vue.component('driver-form', {
  components: { MGraphicForm },
  props: {
    item: null
  },
  render: function (h) {
    return h('v-row', [
      h('v-col', [
        h('v-text-field', {
          props: {
            label: 'Name',
            value: this.item.name
          },
          on: {
            input: (value) => { this.item.name = value }
          }
        }),
        h('v-text-field', {
          props: {
            label: 'Num',
            value: this.item.num
          },
          on: {
            input: (value) => { this.item.num = value }
          }
        })
      ]),
      h('v-col', [
        h('m-graphic-form', {
          props: {
            graphic: this.item.graphic
          }
        })
      ])
    ])
  }
})

export const BusForm = Vue.component('bus-form', {
  props: {
    item: null
  },
  render: function (h) {
    return h('v-row', [
      h('v-col', [
        
      ])
    ])
  }
})

export const RouteForm = Vue.component('route-form', {
  props: {
    item: null
  },
  render: function (h) {
    return h('v-row', [
      h('v-col', [
        
      ])
    ])
  }
})

export const WayForm = Vue.component('way-form', {
  props: {
    item: null
  },
  render: function (h) {
    return h('v-row', [
      h('v-col', [
        
      ])
    ])
  }
})