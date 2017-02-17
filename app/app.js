/**
 *
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/11/21.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
const VueResource = require('vue-resource');

import Config from './constants/config';

import './assets/scss/main.scss';
import ItemComponenter from './components/item/item.vue';
import Index from './components/index/index.vue';


Vue.use(VueRouter);
Vue.use(VueResource);
window.Config=Config;

const routes = [
  { path: '/contents', component: ItemComponenter },
  { path: '*', component: Index },
  { path: '/', component: Index }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#vue-app')