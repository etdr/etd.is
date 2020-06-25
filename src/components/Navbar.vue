<template>
  <nav>
    <ul>
      <router-link to="/" class="c-k-white"><li>dte.is</li></router-link>
      <li class="bc-k-red expandable-li"><router-link to="/about">me</router-link>
        <ul class="bc-k-red">
          <router-link to="/about"><li>about</li></router-link>
          <router-link to="/about/background"><li>background</li></router-link>
          <router-link to="/about/resume"><li>résumé</li></router-link>
          <router-link to="/about/contact"><li>contact</li></router-link>
        </ul>
      </li>
      <li class="bc-k-orange expandable-li"><router-link to="/a">portfolio</router-link>
        <ul class="bc-k-orange">
          <router-link to="/a/developer"><li>dev</li></router-link>
          <router-link to="/a/data-scientist"><li>data</li></router-link>
          <router-link to="/a/quasiacademecian"><li>thesis</li></router-link>
          <router-link to="/a/musician"><li>music</li></router-link>
          <router-link to="/a/dabbler"><li>misc</li></router-link>
        </ul>
      </li>
      <router-link to="/l"><li class="bc-k-green">lists</li></router-link>
      <router-link to="/meta"><li class="bc-k-blue">site</li></router-link>
      <router-link to="/posts"><li class="bc-k-purple">posts</li></router-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Navbar'
})
</script>

<style lang="scss" scoped>
@use '../css/vars' as v;
@use '../css/classes' as c;

nav {
  padding: 30px;
  font-size: 2rem;
  font-family: v.$f-header;

  background-color: v.$k-darkgray;

  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;

    transition: all 0.4s ease-out;

    li {
      margin: 0 1.4rem;
      padding: 2rem 5rem;
      border-radius: 5px;
    }

    a {

      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      &.router-link-exact-active {
            //color: #42b983;
            //text-shadow: 0 -1rem 5px white, 0 -1rem 3px white;
          color: white;
          font-weight: bold;

        }

      li {
        margin: 0 1.4rem;
        padding: 2rem 5rem;
        border-radius: 5px;
      }
    }

    li.expandable-li ul {
      //display: none;
      display: block;
      position: absolute;
      visibility: hidden;
      opacity: 0;
      border-radius: 5px;
      transition: visibility 0s ease-out 0.2s, opacity .2s ease-out;

    }

    li.expandable-li:hover ul {
      visibility: visible;
      opacity: 1;
      transition-delay: 0s;
      position: absolute;

    }
  }

}
</style>
