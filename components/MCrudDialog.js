import Vue from 'vue'

export default Vue.component('m-crud-dialog', {
  data: function () {
    return {
      value: false
    }
  },
  methods: {
    open: function () {
      this.value = true
    },
    close: function () {
      this.value = false
    }
  },
  render: function (h) {
    return h('v-dialog',
      {
        props: {
          value: this.value,
          width: 1000
        },
        on: {
          input: (state) => { this.value = state }
        }
      }, [
        h('v-card', [
          h('v-card-title'),
          h('v-card-text', [
            this.$scopedSlots.form()
          ]),
          h('v-card-actions', [
            h('v-btn', {
              on: {
                'click': () => { this.$emit('click:remove') }
              }
            }, 'Remove'),
            h('v-spacer'),
            h('v-btn', {
              on: {
                'click': () => { this.close() }
              }
            },  'Back'),
            h('v-btn', {
              on: {
                'click': () => { this.$emit('click:save') }
              }
            },  'Save')
          ])
        ])
      ]
    )
  }
})
