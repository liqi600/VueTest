import Vue from 'vue'
import App from "./App"
import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(Vuex)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

////22333111111111111