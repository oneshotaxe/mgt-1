<template lang="pug">
  v-layout
    v-row
      v-col
        v-text-field(label="Номер" v-model="model.num")
        v-select(label="Маршрут" v-model="model.route" :items="routes")
      v-col
</template>

<script>
export default {
  props: ['model'],
  async created () {
    const { data } = await this.$axios.post('/routes/read')
    this.routes = data.map(b => ({ text: b.num, value: b._id }))
  },
  data () {
    return {
      routes: []
    }
  }
}
</script>