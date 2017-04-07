// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './routes/router'
import vueResource from 'vue-resource'
import NavBar from './components/NavBar'

Vue.use(vueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: '<div id="app"><navBar></navBar></div>',
  components:{
    NavBar
  }
}).$mount('#app')
