<template lang="pug">
m-table-page(
  :headers="headers"
  :Model="models.Driver"
  :getDataInForm="getDataInForm"
)
  template(v-slot:form="{ item, buses }")
    driver-form(:item="item")
</template>

<script>
import MTablePage from '@/components/MTablePage'
import { DriverForm } from '@/components/Forms'

export default {
  components: { MTablePage, DriverForm },
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