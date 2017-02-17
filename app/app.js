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

//const router = new VueRouter();

Vue.use(VueRouter);
Vue.use(VueResource);
window.Config=Config;
console.log(Config)
// router.map({
//   '/contents':{
//     component:ItemComponenter
//   }
//   // '/article':{
//   //   component:article
//   // },
//   // '/index':{
//   //   component:index
//   // }
// });
// router.redirect({
//   '*':'/index'
// });
// router.start(app, 'app');

var routes = [
  { path: '/contents', component: ItemComponenter},
  // { path: '/lists', component: require(viewPath + 'lists.vue')},
  // { path: '/option', component: require(viewPath + 'option.vue')},
  // { path: '/detail', component: require(viewPath + 'detail.vue')}
];
var router = new VueRouter({
  routes: routes
});

//init
var app = new Vue({
    router: router
}).$mount('#vue-app');