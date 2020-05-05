<template lang="pug">
m-table-page(
  :headers="headers"
  :Model="models.Way"
  :getDataInForm="getDataInForm"
)
  template(v-slot:form="{ item, ways }")

</template>

<script>
import MTablePage from '@/components/MTablePage'

export default {
  components: { MTablePage },
  data: function () {
    return {
      headers: [
        { text: 'Title', value: 'title' }
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