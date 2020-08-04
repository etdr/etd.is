<template>
  <div id="yield-div">
    <p>etd is a</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Yield'
}
</script>

<style lang="scss">
@use '../css/classes' as c;

#yield-div {
  width: 80rem;
  margin: 4rem auto;
  align-items: center;

  h1 {
    @extend .ts-k-orange;
  }
}
</style>
