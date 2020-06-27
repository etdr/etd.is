<template>
  <div class="about base-div">

    <h1>About</h1>

    <img src="@/assets/img/jeju.png"/>

    <p>I am currently ${{ ageWhole }}\frac{ {{ ageFrac.n }} }{ {{ ageFrac.d }} }$ years old.</p>

    <p>I was born in New Orleans, Louisiana, moved around the country until I settled in central Indiana, just north of Indianapolis.</p>

    <p>As an undergraduate I studied cognitive science and philosophy of science at Indiana University (Bloomington) from '07 through '011. Following this, from mid-2013 to early '016 I lived in the Netherlands earning a <a href="https://msclogic.illc.uva.nl/" target="_blank">MSc in Logic</a> from the University of Amsterdam.</p>

    <p>Since graduating from my master's program I've more or less spent the time around Indianapolis trying to work out what my next steps will be.</p>

    <p>I have a cat named Atsuo Toggle.</p>
    <img src="@/assets/img/a4.gif"/>

    <p>I also have a dog named Shannon (after <a href="https://en.wikipedia.org/wiki/Claude_Shannon" target="_blank">Claude</a>).</p>
    <!-- <img src="@/assets/img/shannon0.gif"/> -->
    <video autoplay loop>
      <source src="@/assets/img/shannon0.mp4" type="video/mp4">
    </video>

    <p>My interests include: listening to and collecting music, big furry mammals, making lists, public transportation and in particular rapid metropolitan transit and also aircraft, outer space, hard science fiction, futurology especially on extreme timescales, typography, board and card games, aesthetic workspaces and ergonomics more generally, trope analysis, and some other things.</p>

    <p>I acknowledge my eccentricity but it's got sort of a soft edge to it.</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// const MathJax = {
//   loader: {
//     load: ['tex-chtml']
//   }
// }
import '@/mathjax-config'
// import * as MathJax from 'mathjax'
import 'mathjax/es5/tex-chtml'

// import { MathJax } from 'mathjax'
// import { TeX } from 'mathjax/es5/input/tex'
// import { AllPackages } from 'mathjax/es5/input/tex/extensions/all-packages'
// // const MathJaxTex = require('mathjax-full/es5/input/tex').TeX
// // const MathJaxAll = require('mathjax-full/es5/input/tex/extensions/all-packages').AllPackages
// import { CHTML } from 'mathjax/es5/output/chtml'

// const MathJax = {
//   tex: {
//     inlineMath: [['$', '$'], ['\\(', '\\)']]
//   },
//   svg: {
//     fontCache: 'global'
//   }
// }

// const MathJax = {
//   // tex: {packages: argv.packages.replace('\*', PACKAGES).split(/\s*,\s*/)},
//   // chtml: {fontURL: argv.fontURL},
//   startup: { typeset: false }
// }

// //  Load all the needed components
// //
// require('mathjax-full/components/src/startup/lib/startup.js')
// require('mathjax-full/components/src/core/core.js')
// // require('mathjax-full/components/src/adaptors/liteDOM/liteDOM.js')
// require('mathjax-full/components/src/input/tex-base/tex-base.js')
// require('mathjax-full/components/src/input/tex/extensions/all-packages/all-packages.js')
// require('mathjax-full/components/src/output/chtml/chtml.js')
// require('mathjax-full/components/src/output/chtml/fonts/tex/tex.js')
// require('mathjax-full/components/src/startup/startup.js')

// //
// //  Let MathJax know these are loaded
// //
// MathJax.loader.preLoad(
//   'core',
//   'adaptors/liteDOM',
//   'input/tex-base',
//   '[tex]/all-packages',
//   'output/chtml',
//   'output/chtml/fonts/tex'
// )

interface Frac {
  n: number;
  d: number;
}

const gcd: (e: number, x: number, y: number) => number = (e, x, y) => y < e ? x : gcd(e, y, x % y)

const gcde: (e: number, x: number, y: number) => number = (e, x, y) => gcd(e, Math.abs(x), Math.abs(y))

const approxFrac: (e: number, n: number) => Frac = (e, n) => {
  const c = gcde(e, 1, n)
  return {
    n: Math.floor(n / c),
    d: Math.floor(1 / c)
  }
}

export default Vue.extend({
  name: 'about',
  computed: {
    age: () => (((new Date().getTime() / 1000) - 614944800.0) / 31557600).toFixed(3),
    ageWhole: function () { return Math.floor(parseFloat(this.age)) },
    ageFrac: function () { return approxFrac(1 / 10000, parseFloat(this.age) - Math.floor(parseFloat(this.age))) }
  },
  mounted: () => {
    window.MathJax.typeset()
  }
})
</script>

<style lang="scss" scoped>
img {
  width: 80rem;
}

video {
  width: 80rem;
}
</style>
