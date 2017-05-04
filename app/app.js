/**
 *
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/11/21.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './app.vue';

import Config from './constants/config';
import router from './router';

import './assets/scss/main.scss';

Vue.use(VueResource);
window.Config=Config;

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#vue-app')