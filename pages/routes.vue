<template lang="pug">
m-table-page(
  :headers="headers"
  :Model="models.Route"
)
  template(v-slot:form="{ item }")

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
  }
}
</script>