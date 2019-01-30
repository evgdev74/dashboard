import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLocalStorage from 'vue-localstorage'


require('./config/vuetify');
Vue.config.productionTip = false
Vue.use(VueLocalStorage)
Vue.use(VueLocalStorage, {
  login: false
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

