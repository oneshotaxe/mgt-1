import Vue from 'vue'

export default Vue.component('m-table', {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Array,
      default: () => []
    }
  },
  render: function (h) {
    return h('v-row', [
      h('v-col', [
        h('m-table-toolbar', {
          on: {
            'click:new': () => { this.$emit('click:new') }
          }
        }),
        h('v-data-table', {
          scopedSlots: this.$scopedSlots,
          props: {
            items: this.items,
            headers: this.headers
          },
          on: {
            'click:row': (row) => { this.$emit('click:open', row._id) }
          }
        })
      ])
    ])
  }
})

Vue.component('m-table-toolbar', {
  render: function (h) {
    return h('v-toolbar', {
      props: {
        flat: true
      }
    }, [
      h('v-toolbar-title', 'Title'),
      h('v-spacer'),
      h('v-btn', {
        on: {
          'click': () => { this.$emit('click:new') }
        }
      }, 'New')
    ])
  }
})