<template>
  <div class="home">
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'Base',
  components: {
    // Home
  }
}
</script>

<style scoped lang="scss">
div.base-div {
  margin: 4rem auto;
  width: 80rem;
}
</style>
