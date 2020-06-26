<template>
  <footer>
    <p>©{{ new Date().getFullYear() }} Eli T. Drumm</p>
  </footer>
</template>

<style lang="scss" scoped>
@use '../css/vars' as v;

footer {
  flex-grow: 0;
  min-height: 4rem;
  background-color: v.$k-darkgray;
  text-align: center;
  width: 100%;

  p {
    margin: 1rem auto 1rem;
    color: v.$k-midgray;
    font-size: 1.4rem;
  }
}
</style>
