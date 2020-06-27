<template>
  <div class="posts-div">
    <h1>{{ title }}</h1>
    <TestPost />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import post from '@/assets/posts/2020-06-22.md'
export default Vue.extend({
  name: 'posts',
  components: {
    TestPost: post.vue.component
  },
  data: () => ({
    title: post.attributes.title
  })
})
</script>

<style lang="scss" scoped>
.posts-div {

}
</style>
