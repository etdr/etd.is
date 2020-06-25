<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <div id="top-flex-spacer"/>
    <Footer/>
  </div>
</template>

<script lang="ts">
// import Post0 from './_posts/2020-06-22.md'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
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
  background-color: v.$k-white;

  font-family: v.$f-body;
  h1,h2,h3,h4,h5,h6 {
    font-family: v.$f-header;
    //font-size: 500%;
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //color: v.$k-darkgray;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#top-flex-spacer {
  flex-grow: 1;
}
</style>
