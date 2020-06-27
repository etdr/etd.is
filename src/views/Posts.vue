<template>
  <div class="posts-div">
    <!-- <h1>Posts</h1> -->
    <router-view />
    <!-- <p>{{ onIndex ? 'yes on index' : 'no not on index' }}</p> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'posts',
  computed: {
    onIndex: function () { return this.$route.path === '/posts' }
  }
})
</script>

<style lang="scss" scoped>
@use '../css/classes' as c;

.posts-div {
  width: 80rem;
  margin: 4rem auto;
  align-items: center;
  h1 {
    @extend .ts-k-blue;
  }
}
</style>
