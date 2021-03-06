// Holds Our Vendor Dependencies Inclucing Element Ui
import './bootstrap'
// Allows Us to Use Promise On Runtime
import 'babel-polyfill'
import Vue from 'vue'
import router from './routes'
import store from './vuex/store/'
import { sync } from 'vuex-router-sync'
sync(store, router)

// Define All Global Components
// Vue.component('FBSignInButton', require('./components/Facebook.vue'))

// Define Main Vue Instance
new Vue({
    // router holds our view and layouts
  router,
    // store holds our state throughout our application
  store,
    // All Vue Js Life Cyle Hooks
  beforeCreate () {

  },
  created () {

  },
  beforeMount () {

  },
  mounted () {

  },
  beforeUpdate () {

  },
  updated () {

  },
  beforeDestroy () {

  },
  destroyed () {

  }

}).$mount('#app')
