import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import 'common/js/mock_recommend'
import 'common/js/mock_singer'

import 'common/stylus/index.styl'

fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  loading: require('@/assets/logo.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
