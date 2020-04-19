import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'

import "./registerServiceWorker";

Vue.config.productionTip = false

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
