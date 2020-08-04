<template>
  <main class="yield-main">
    <h1>developer</h1>

    <h2><a href="https://eksward.herokuapp.com/" target="_blank">eksward</a></h2>
    <img src="@/assets/img/yield/staticsjs/eksward.png">
    <p>Here's an app I created with React and Redux to solve crossword puzzles.
    (In order to use it you'll have to upload an Across Lite puzzle file;
    for examples I suggest <a href="https://www.brendanemmettquigley.com/" target="_blank">Brendan Emmett Quigley's</a> site,
    he publishes in this format.)</p>

    <p>I styled this app after the NYT crossword puzzle solver, which also uses React,
    but trust me, I had to figure out a lot myself. The Across Lite parser itself I'm particularly proud of.</p>

    <p><a href="https://github.com/etdr/eksward" target="_blank">Client repo</a> and <a href="https://github.com/etdr/eksward" target="_blank">server repo</a>.</p>

    <h2><a href="https://vloeistof.co/" target="_blank">vloeistof</a></h2>
    <p>As a team of three (myself, Lindsey, and Reese; Team 3D for life), we taught ourselves Angular and created this app in four weeks.</p>

    <p>"Vloeistof" means "liquid" or, colloquially, alcohol in Dutch/Flemish (shoutout to Ing, our Belgian instructor). This is a mixed drinks app, for mixing your own drinks or pulling them from the API at <a href="https://thecocktaildb.com/" target="_blank">TheCocktailDB.com</a>. You can add drinks to your profile, curate your favorites,
    post on your and other people's drinks, and more.</p>

    <p><a href="https://github.com/etdr/vloeistof" target="_blank">Client repo</a> and <a href="https://github.com/etdr/vloeistof-server" target="_blank">server repo</a>.</p>

    <h2><a href="https://discsearcher.firebaseapp.com/" target="_blank">discsearcher</a></h2>
    <p>A webapp to pull information from Discogs via an API and display it aesthetically.</p>

    <p><a href="https://github.com/dteli/discsearcher" target="_blank">Code at GitHub.</a></p>

    <h2>d3 projects</h2>
    <p>For information about d3, <a href="https://d3js.org/" target="_blank">see here</a>. The projects below are in my <a href="https://github.com/dteli/scrawls" target="_blank">scrawls</a> repo on GitHub.</p>

    <h3><a href="https://etdr.github.io/scrawls/d3/letterbars" target="_blank">letterbars</a></h3>
    <p>Shows frequency of letters in a message, and computes the entropy.</p>

    <h3><a href="https://etdr.github.io/scrawls/d3/huesha/huesha.html" target="_blank">huesha</a></h3>
    <p>Displays a multi-stop gradient based on the SHA-1 hash of a message.</p>

    <h3><a href="https://etdr.github.io/scrawls/posfetch/index.html" target="_blank">posfetch</a></h3>
    <p>Uses an NLTK API to do part-of-speech tagging and display a pie chart of frequencies.</p>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style lang="scss" scoped>

</style>
