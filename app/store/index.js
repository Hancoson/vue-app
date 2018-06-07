/**
 * @Author: Guoxing.han 
 * @Date: 2018-05-21 13:36:35 
 * @version 0.0.1 
 */
import Vue from 'vue'
import Vuex from 'vuex'

import layout from './modules/layout'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',//严格模式
  modules: {
    layout
  }
})