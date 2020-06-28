// import Vue, { Component, VueConstructor } from 'vue'

function getTitle (vm: any) {
  const { title } = vm.$options
  // console.log('TITLE', title)
  if (title) {
    return typeof title === 'function' ? title.call(vm) : title
  }
}

export default {
  created () {
    const title = getTitle(this)
    if (title) {
      document.title = title
    }
  }
}
