/**
 * @Author: Guoxing.han 
 * @Date: 2018-05-21 13:37:38 
 * @version 0.0.1 
 */
import jsonp from 'jsonp'
import { GET_ITEM, SHOW_ITEM, GET_TIME } from './../mutation-types'

import * as utils from './../../utils/index'
export default {
  state: {
    isShow: false,
    items: [],
    times: ''
  },
  mutations: {
    SHOW_ITEM(state, style) {
      state.isShow = style
    },
    GET_ITEM(state, data) {
      state.items = data
    },
    GET_TIME(state, data) {
      state.times = data
    },
  },
  actions: {
    getItemData({ commit, state }) {
      jsonp(
        Config.YAHOO + Config.API + utils.getDate() + Config.YAHOO_SUFFIX,
        null,
        (err, response) => {
          if (err) {
            console.log(err);
          } else {
            commit("SHOW_ITEM", true)
            const data = response.query.results.json;
            commit('GET_ITEM', data.stories)
            commit('GET_TIME', utils.substring(data.date))
          }
        }
      );
    }
  }
}