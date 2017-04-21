/**
 * 路由
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2017/03/13.
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/',
      component: resolve => require(['../components/home/home.vue'], resolve),
      children: [
        {
          path: '/index',
          component: resolve => require(['../components/index/index.vue'], resolve)
        },
        {
          path: '/contents',
          component: resolve => require(['../components/item/item.vue'], resolve)
        },
        {
          path: '*',
          component: resolve => require(['../components/index/index.vue'], resolve)
        }
      ]
    }


  ]
})