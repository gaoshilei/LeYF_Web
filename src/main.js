// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Cookies from 'js-cookie';
import Element from 'element-ui';
import {mockXHR} from '@/mock';
import '@/styles/index.scss'; // global css

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'production') {
  mockXHR();
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
});

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
