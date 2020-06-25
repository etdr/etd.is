<template>
  <div class="base-page">
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

<style scoped lang="scss">
@use '../css/vars' as v;

// .base-page {
//   min-height: 200vh;
// }

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
</style>
