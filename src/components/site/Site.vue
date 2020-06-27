<template>
  <div class="meta-page">
    <h1>About this site</h1>

    <p>This site represents a major departure for me as previously my personal website has been completely handwritten and compiled using a static site generator (see <a href="https://jaspervdj.be/hakyll/" target="_blank">Hakyll</a>).</p>

    <p>I am pleased to have switched to delevoping my site using the <a href="https://vuejs.org/" target="_blank">Vue framework.</a></p>

    <h2>Hosting</h2>

    <p>Another departure for me is in how I am hosting the site. Previously I was with <a href="https://www.nearlyfreespeech.net/" target="_blank">NearlyFreeSpeech.net</a>, and I have nothing but the most positive things to say about them and their service. Dirt cheap and reliable.</p>

    <p>However, as of now I'm hosting this with nginx off a VPS in the Netherlands provided by <a href="https://www.scaleway.com/en/" target="_blank">Scaleway</a>. I actually have about five small sites hosted on the same instance (most are just placeholders for the time being), it was relatively easy to set up the web server to handle this.</p>

    <p>I have also recently repurposed my computer parts which I used as primary from 2013-2017 as a home server which is currently sitting in the basement idling, and I might shift some or all of the site hosting to this machine. I am fortunate enough to have <a href="https://www.metronetinc.com/" target="_blank">Metronet</a> as an ISP with a symmetrical gigabit connection.</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'site'
})
</script>

<style lang="scss" scoped>

</style>
