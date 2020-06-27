<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <div id="main-flex-spacer"/>
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
  margin: 0;
  padding: 0;
  font-size: 10px;
  width: 100%;
}

body {
  margin: 0;
  width: 100%;

  // background-color: v.$k-white;

  font-family: v.$f-body;
  h1,h2,h3,h4,h5,h6 {
    font-family: v.$f-header;
    //font-size: 500%;
    margin: 0 0 4rem;
  }

  h1 {
    font-size: 8rem;
  }

  h2 {
    font-size: 6rem;
  }

  p {
    font-size: 2rem;
  }

  ul {
    li {
      font-size: 2rem;
    }
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //color: v.$k-darkgray;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // min-width: 100rem;
  width: 100%;
}

#main-flex-spacer {
  flex-grow: 1;
}

#home-page+#main-flex-spacer {
  flex-grow: 0;
}
</style>
