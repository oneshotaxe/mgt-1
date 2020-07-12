<template lang="pug">
  v-layout
    v-row
      v-col
        v-text-field(label="Номер" v-model="model.num")
        v-select(label="Цвет" v-model="model.color" :items="colors")
        v-select(label="Выход" v-model="model.way" :items="ways")
      v-col
</template>

<script>
export default {
  props: ['model'],
  data () {
    return {
      ways: [],
      colors: [
        'Синий',
        'Голубой',
        'Зеленый'
      ]
    }
  },
  async created () {
    const { data } = await this.$axios.post('/ways/read')
    this.ways = data.map(b => ({ text: b.num, value: b._id }))
  }
}
</script>