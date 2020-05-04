<template lang="pug">
m-table-page(
  :headers="headers"
  :Model="models.Driver"
  :getDataInForm="getDataInForm"
)
  template(v-slot:item.num="{ value }") + {{ value }}
  template(v-slot:form="{ item, buses }")
    v-text-field(label="Num" v-model="item.num")
    v-select(:items="buses")
</template>

<script>

import MTablePage from '@/components/MTablePage'

export default {
  components: { MTablePage },
  data: function () {
    return {
      headers: [
        { text: 'Num', value: 'num' },
        { text: 'Name', value: 'name' }
      ]
    }
  },
  methods: {
    getDataInForm: async function () {
      return {}
    }
  }
}
</script>