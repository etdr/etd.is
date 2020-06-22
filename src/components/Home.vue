<template>
  <div class="base-page">
    <div id="topblock">
    </div>
    <h1>Eli T. Drumm</h1>
    <h3>data and development in interesting patterns</h3>
  </div>
</template>

<script lang="ts">
export default {
  name: 'home'
}
</script>

<style scoped lang="scss">
h1 {
  margin: 8rem 2rem 1rem;
  font-size: 14rem;
  color: #eeeeee;
}

h3 {
  font-size: 2.8rem;
  margin: -2rem 2rem 0;
  color: #eeeeee
}

#topblock {
  position: absolute;
  z-index: -10;
  margin: -60rem 0 0;
  min-width: 100%;
  min-height: 90rem;
  background-color: #333333;
  transform: skew(0, -20deg);
}
</style>
