import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from 'vue-svgicon'
import './assets/icons'

Vue.config.productionTip = false

// Default tag name is 'svgicon'
Vue.use(SvgIcon, {
  tagName: 'svgicon'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
