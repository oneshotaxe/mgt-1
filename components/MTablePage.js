import Vue from 'vue'

import MCrudDialog from '@/components/MCrudDialog'

export default Vue.component('m-table-page', {
  components: { MCrudDialog },
  props: {
    getDataInForm: {
      type: Function,
      default: async () => ({})
    },
    Model: null,
    headers: {
      type: Array,
      default: () => []
    }
  },
  data: function () {
    return {
      list: [],
      curItem: this.Model.default,
      dataInForm: {}
    }
  },
  created: async function () {
    this.list = await this.Model.read()
  },
  methods: {
    async openDialog() {
      this.dataInForm = await this.getDataInForm()
      this.$refs.dialog.open()
    },
    create: async function () {
      this.curItem = this.Model.default
      await this.openDialog()
    },
    open: async function (_id) {
      this.curItem = await this.Model.readById({ _id })
      await this.openDialog()
    },
    remove: async function () {
      await this.Model.delete(this.curItem._id)
      this.removeItemFromList()
      this.$refs.dialog.close()
    },
    save: async function () {
      if (this.curItem.isNew) {
        await this.Model.create(this.curItem)
        this.appendItemInList()
      } else {
        await this.Model.update(this.curItem)
        this.updateItemFromList()
      }
      this.$refs.dialog.close()
    },
    appendItemInList: function () {
      this.list.push(this.curItem)
    },
    updateItemFromList: function () {
      this.list = this.list.map(item => {
        if (item.id == this.curItem.id) {
          return this.curItem
        }
        return item
      })
    },
    removeItemFromList: function () {
      this.list = this.list.filter(item => item.id != this.curItem.id)
    },
    selectSlotsForTable(slots) {
      const itemSlots = {}
      for (let key in slots) {
        if (key.startsWith('item')) {
          itemSlots[key] = slots[key]
        }
      }
      return itemSlots
    }
  },
  render: function (h) {
    return h('v-container', [
      h('m-table', {
        props: {
          items: this.list,
          headers: this.headers
        },
        on: {
          'click:new': this.create,
          'click:open': this.open
        },
        scopedSlots: this.selectSlotsForTable(this.$scopedSlots)
      }),
      h('m-crud-dialog', {
        ref: 'dialog',
        on: {
          'click:remove': this.remove,
          'click:save': this.save
        },
        scopedSlots: {
          form: (props) => {
            return this.$scopedSlots.form({ ...this.dataInForm, item: this.curItem })
          }
        }
      })
    ])
  }
})

Vue.component('m-table', {
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
        props: {
          text: true,
          to: '/'
        }
      }, 'Back'),
      h('v-btn', {
        on: {
          'click': () => { this.$emit('click:new') }
        }
      }, 'New')
    ])
  }
})