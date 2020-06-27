<template>
  <router-view/>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'meta'
})
</script>

<style lang="scss">
@use '../css/classes' as c;

div.meta-page {
  margin: 4rem auto;
  width: 80rem;

  h1 {
    @extend .ts-k-blue;
  }
}
</style>
