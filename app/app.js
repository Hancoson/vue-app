/**
 *
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/11/21.
 */

import Vue from 'vue';
import Router from 'vue-router';
const VueResource = require('vue-resource');

import Config from './constants/config';

import './assets/scss/main.scss';
import ItemComponenter from './components/item/item.vue';

const router = new Router();

Vue.use(Router);
Vue.use(VueResource);
window.Config=Config;
console.log(Config)
router.map({
  '/contents':{
    component:ItemComponenter
  }
  // '/article':{
  //   component:article
  // },
  // '/index':{
  //   component:index
  // }
});
router.redirect({
  '*':'/index'
});
router.start(app, 'app');