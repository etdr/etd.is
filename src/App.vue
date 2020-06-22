<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Base</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
// import Post0 from './_posts/2020-06-22.md'

export default {
  components: { }
}
</script>

<style lang="scss">
@use 'css/vars' as v;
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  margin: 0;

  font-family: v.$f-body;
  h1,h2,h3,h4,h5,h6 {
    font-family: v.$f-header;
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
