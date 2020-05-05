<template lang="pug">
m-table-page(
  :headers="headers"
  :Model="models.Bus"
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
        { text: 'Num', value: 'num' },
        { text: 'Color', value: 'color' },
        { text: 'Mark', value: 'mark' },
        { text: 'Capacity', value: 'capacity' }
      ]
    }
  }
}
</script>