<template>
  <div id="article-container">
  <article :key="articlekey">
    <h1>{{ title }}</h1>
    <h3>{{ dateString }}</h3>
    <!-- <PostComponent /> -->
    <component :is="PostComponent" />
    <hr/>
    <div id="cat-tags-div">
      <p><strong>Category:</strong> {{ category }}</p>
      <p><strong>Tags:</strong>
        <ul>
          <li v-for="(t, i) of tags" :key="i">{{ t }}</li>
        </ul>
      </p>
    </div>
  </article>
  <div id="post-article-links">
    <router-link to="/posts">back</router-link>
  </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export default Vue.extend({
  props: ['filename'],
  data: () => ({
    title: null,
    date: new Date(),
    category: null,
    tags: null,
    PostComponent: null,
    articlekey: 0
  }),
  computed: {
    dateString: function () { return `${this.date.getFullYear().toString()} ${months[this.date.getMonth()]} ${this.date.getDate().toString()}` }
  },
  created () {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const markdown = require(`@/assets/posts/${this.filename}.md`)
    this.title = markdown.attributes.title
    this.date = new Date(markdown.attributes.date)
    this.category = markdown.attributes.category
    this.tags = markdown.attributes.tags.split(', ')
    // this.PostComponent = () => {
    //   import(`@/assets/posts/${this.filename}.md`)
    //     .then(({ vue }) => vue.component)
    // }
    // this.components.PostComponent = this.PostComponent
    this.PostComponent = markdown.vue.component
    // this.forceRerender()
  }
  // methods: {
  //   forceRerender: () => { console.log('oh yes yes'); this.articlekey += 1 }
  // }
})
</script>

<style lang="scss">
@use '../../css/classes' as c;
@use '../../css/vars' as v;

#article-container {
  h1 {
    margin: 2rem 0 2rem;
    font-size: 6rem;
    @extend .ts-k-blue;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    margin: 0 0 4rem;
    font-size: 3rem;
    font-style: italic;
  }

  .frontmatter-markdown {
    margin: 0 0 6rem;
  }

  #cat-tags-div {
    ul {
      display: inline-block;
      margin: 0;
      padding-left: 0rem;
      list-style-type: none;
      li {
        display: inline-block;
        margin: 1rem;
        padding: 1rem;
        background-color: v.$k-blue;
        color: v.$k-white;
        border-radius: 5px;
      }
    }
  }

  #post-article-links {
    margin: 8rem 0 2rem;
    font-size: 2rem;
  }
}
</style>
