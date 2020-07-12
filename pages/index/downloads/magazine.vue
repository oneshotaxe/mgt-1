<template lang="pug">
  v-dialog(width="300" v-model="dialog")
    v-card
      v-card-title {{ title }}
      v-card-text
        v-text-field(label="Дата" v-model="date")
      v-card-actions
        v-spacer
        v-btn(@click="fn") Скачать
</template>

<script>
import FileSaver from 'file-saver'
import { buildMagazine } from '@/vendor/excels'

export default {
  data() {
    return {
      title: 'Журнал',
      dialog: true,
      date: ''
    }
  },
  methods: {
    async fn() {
      const { data } = await this.$axios.post('/magazine')
      
      const buf = await buildMagazine(data)
      await FileSaver.saveAs(new Blob([buf]), 'magazine.xlsx')
      this.$router.push(`/`)
    }
  },
  watch: {
    dialog(val) {
      if (!val) {
        this.$router.push(`/`)
      }
    }
  }
}
</script>