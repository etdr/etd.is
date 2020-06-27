<template>
  <div id="yield-div">
    <h1>New portfolio under construction</h1>
    <p>For now, please see the portfolio on my old site at <a href="https://www.dte.li/yield/portfolio.html">dte.li/yield/portfolio.html</a>.</p>
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
