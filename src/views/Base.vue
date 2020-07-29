<template>
  <!-- <div class="home"> -->
  <router-view/>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
// import Home from '@/components/Home.vue'

export default {
  name: 'Base',
  components: {
    // Home
  }
}
</script>

<style lang="scss">
@use '../css/classes' as c;

div.base-div {
  margin: 4rem auto;
  min-width: 80rem;
  width: 80rem;
  align-items: center;
  // justify-content: center;

  h1 {
    @extend .ts-k-red;
    // text-shadow: -2rem 2rem 0 red;
  }

  h2 {
    font-size: 4rem;
  }
}

</style>
