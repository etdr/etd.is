import Vue from 'vue'
import VueSvgIcon, { PluginOptions } from 'vue-svgicon'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

Vue.use<PluginOptions>(VueSvgIcon, {
  tagName: 'icon'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
