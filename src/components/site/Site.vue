<template>
  <div class="meta-page">
    <h1>About this site</h1>

    <p>This site represents a major departure for me as previously my personal website has been completely handwritten and compiled using a static site generator (see <a href="https://jaspervdj.be/hakyll/" target="_blank">Hakyll</a>).</p>

    <h2>Design</h2>

    <p>I did the designing myself.</p>

    <p>I'm not convinced this current design is actually an improvement on the previous one (version 4). Hopefully I'll be able to change that at some point.</p>

    <h2>Framework</h2>

    <p>I am (mostly) pleased to have switched to delevoping my site using the <a href="https://vuejs.org/" target="_blank">Vue framework</a>. In some ways it feels like a middle ground between Angular and React, incorporating nice elements of both, maybe. I should write a post at some point about what I like about Vue vs. the other major frameworks.</p>

    <h2>Hosting</h2>

    <p>Another departure for me is in how I am hosting the site. Previously I was with <a href="https://www.nearlyfreespeech.net/" target="_blank">NearlyFreeSpeech.net</a>, and I have nothing but the most positive things to say about them and their service. Dirt cheap and reliable.</p>

    <p>However, as of now I'm hosting this with nginx off a VPS in the Netherlands provided by <a href="https://www.scaleway.com/en/" target="_blank">Scaleway</a>. I actually have about five small sites hosted on the same instance (most are just placeholders for the time being), it was relatively easy to set up the web server to handle this.</p>

    <p>I have also recently repurposed my computer parts which I used as primary from 2013-2017 as a home server which is currently sitting in the basement idling, and I might shift some or all of the site hosting to this machine. I am fortunate enough to have <a href="https://www.metronetinc.com/" target="_blank">Metronet</a> as an ISP with a symmetrical gigabit connection.</p>

    <h2>Domain</h2>

    <p>All previous versions of my personal website were found at <a href="https://www.dte.li/" target="_blank">dte.li</a>, which is as of now abandoned yet functional. I want to thank <a href="https://switchplus.ch/en/" target="_blank">Swizzonic</a> (née Switchplus) for their many years of, well, I mean registrars don't really do much I guess, but thanks.</p>

    <p>The new domain, etd.is, I registered through <a href="https://www.namecheap.com/" target="_blank">Namecheap</a> but it appears that it goes through the official Icelandic registrar <a href="https://www.isnic.is/en/" target="_blank">ISNIC</a> for some settings? I can make some changes to the DNS records on the Icelandic site but I can also do that on Namecheap, so I don't know what the setup is exactly. I was able to get the site connected, that's what matters.</p>

    <hr/>

    <p><em>This is version <strong>5</strong> of my website.</em></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'site'
})
</script>

<style lang="scss" scoped>
hr {
  margin: 4rem 0;
}
</style>
