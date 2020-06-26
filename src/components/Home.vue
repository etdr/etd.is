<template>
  <div class="base-page" id="home-page">
    <div id="topblock">
    </div>
    <h1>Eli T. Drumm</h1>
    <h3>{{ taglines[Math.floor(Math.random() * taglines.length)] }}</h3>
  </div>
</template>

<script lang="ts">
import taglines from '@/assets/data/taglines.json'

export default {
  name: 'Home',
  data: () => ({
    taglines
  }),
  mounted: () => {
    window.onscroll = () => {
      if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        document.getElementById('topblock')!.style.transform = 'none'
      } else document.getElementById('topblock')!.style.transform = 'skew(0, -20deg)'
    }
  }
}
</script>

<style lang="scss">
@use '../css/vars' as v;

// .base-page {
//   min-height: 200vh;
// }

div#home-page {
  // min-height: 100vh;
  flex-grow: 1;

  background: linear-gradient(-75deg, v.$k-red, v.$k-orange, v.$k-yellow, v.$k-green, v.$k-blue, v.$k-purple);
  background-size: 800% 800%;
  animation: homegrad 20s ease infinite;

  @keyframes homegrad {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

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
    background-color: v.$k-darkgray;
    transform: skew(0, -20deg);

    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 10rem;
    }
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 8rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
}

// #main-flex-spacer {
//   flex-grow: 0;
// }
</style>
