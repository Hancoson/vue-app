/**
 *
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/11/21.
 */
import 'es6-promise/auto'
import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store/index'
import App from './app.vue';

import Config from './constants/config';
import router from './router';

import './assets/scss/main.scss';

window.Config = Config;

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#vue-app')