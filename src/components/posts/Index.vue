<template>
  <div id="posts-index-div">
    <ul :key="ulkey">
      <li v-for="[k, m] of postlist" :key="k">
        <h2><router-link :to='"/posts/"+k'>{{ m.attributes.title }}</router-link></h2>
        <h3>{{ formatDate(m.attributes.date) }}</h3>
        <h4>{{ m.attributes.tags }}</h4>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: [],
  data: () => ({
    postlist: new Map(),
    ulkey: 0,
    months: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
  }),
  mounted () {
    Promise.all(require.context('@/assets/posts').keys().map(async (k: string, i: number) => {
      return await import('@/assets/posts/' + k.replace(/\.\//, ''))
    })).then((posts) => {
      console.log('oh no no no no')
      for (const p of posts) {
        this.postlist.set(p.attributes.date.slice(0, 10), p)
      }
      this.forceRerender()
    })
  },
  methods: {
    forceRerender () {
      // thanks to https://michaelnthiessen.com/force-re-render/
      this.ulkey += 1
    },
    formatDate (d: string) {
      const date = new Date(d)
      return `${date.getFullYear().toString()} ${this.months[date.getMonth()]} ${date.getDate().toString()}`
    }
  }
})
</script>

<style lang="scss" scoped>
#posts-index-div {
  ul {
    list-style-type: none;

    li {
      margin: 0 0 4rem;

      h2 {
        font-size: 3rem;
        margin-bottom: 1rem;
        a {
          text-decoration: none;
        }
      }
      h3 {
        margin: 0 0 1rem;
        font-size: 2rem;
      }
      h4 {
        margin: 1rem 0 0;
        font-size: 1.6rem;
        font-weight: normal;
        font-style: italic;
      }
    }
  }
}
</style>
