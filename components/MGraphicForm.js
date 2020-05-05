import Vue from 'vue'

export default Vue.component('m-graphic-form', {
  props: {
    graphic: null
  },
  render: function (h) {
    return h('v-row', [
      h('v-col', [
        h('v-toolbar', {
          props: {
            flat: true,
            dense: true
          }
        }, [
          h('v-toolbar-title', 'Graphic'),
          h('v-spacer'),
          h('v-btn', {
            props: {
              elevation: 1,
              fab: true,
              'x-small': true
            }
          }, '+')
        ]),
        h('m-graphic-items', {
          props: {
            graphic: this.graphic
          }
        }),
        h('v-toolbar', {
          props: {
            flat: true,
            dense: true
          }
        }, [
          h('v-btn', {
            props: {
              elevation: 1,
              fab: true,
              'x-small': true
            }
          }, '<'),
          h('v-spacer'),
          h('v-toolbar-title', 'Calendar'),
          h('v-spacer'),
          h('v-btn', {
            props: {
              elevation: 1,
              fab: true,
              'x-small': true
            }
          }, '>'),
        ]),
        h('m-graphic-calendar', {
          props: {
            graphic: this.graphic
          }
        })
      ])
    ])
  }
})

Vue.component('m-graphic-items', {
  props: {
    graphic: null
  },
  render: function (h) {
    return h('v-row', [
      h('v-col', {
        class: ['text-center']
      }, this.graphic.items.map((item, index) => h('m-status-btn', {
        attrs: {
          disabled: item == 'В'
        },
        props: {
          text: item
        },
        on: {
          click: () => { this.graphic.rollStatus(index) }
        }
      })).concat([
        this.graphic.format.length < this.graphic.items.length ?
        h('m-status-btn', {
          attrs: {
            outlined: true,
            color: 'red'
          },
          props: {
            text: '-'
          },
          on: {
            click: () => { this.graphic.removeItems() }
          }
        }) : '',
        h('m-status-btn', {
          attrs: {
            color: 'green'
          },
          props: {
            text: '+'
          },
          on: {
            click: () => { this.graphic.addItems() }
          }
        })
      ]))
    ])
  }
})

Vue.component('m-graphic-calendar', {
  props: {
    graphic: null
  },
  watch: {
    graphic: {
      handler: function () {
        this.updateStatuses()
      },
      deep: true
    }
  },
  data: function () {
    return {
      statuses: []
    }
  },
  created: function () {
    this.updateStatuses()
  },
  methods: {
    updateStatuses: function () {
      this.statuses = this.graphic.statusesByDate('2020-05-04', 14)
    }
  },
  render: function (h) {
    return h('v-row', [
      h('v-col', {
        class: ['text-center']
      }, this.statuses.map(status => h('v-badge', {
        props: {
          content: status.date.slice(-2),
          'offset-x': 20,
          'offset-y': 10
        }
      }, [
        h('m-status-btn', {
          attrs: {
            color: status.exception ? 'primary' : 'black'
          },
          props: {
            text: status.exception || status.value
          },
          on: {
            click: () => { this.graphic.rollException(status) }
          }
        })
      ])))
    ])
  }
})

Vue.component('m-status-btn', {
  props: ['text'],
  render: function (h) {
    return h('v-btn', {
      props: {
        outlined: true,
        'elevation': 1,
        'min-width': 34,
        'width': 34,
        ...this.$attrs
      },
      class: [
        'mx-2',
        'mb-2'
      ],
      on: this.$listeners
    }, this.text)
  }
})