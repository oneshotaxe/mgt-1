<template lang="pug">
v-container
  v-row
    v-col
    v-col
      v-subheader Data
      v-list
        v-list-item(to="/drivers") Drivers
        v-list-item(to="/buses") Buses
        v-list-item(to="/routes") Routes
        v-list-item(to="/ways") Ways
</template>

<script>
export default {
  
}
</script>