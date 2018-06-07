/**
 * @Author: Guoxing.han 
 * @Date: 2018-05-21 13:37:38 
 * @version 0.0.1 
 */
import jsonp from 'jsonp'
import { GET_ITEM } from './../mutation-types'

import * as utils from './../../utils/index'
export default {
  state: {
    isShow: false,
    items: [],
    times: ''
  },
  mutations: {
    GET_ITEM(state, data) {
      state.isShow = true
      state.items = data.stories
      state.times = data.date
    }
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
            if (response.query.results) {
              const data = response.query.results.json;
              commit("GET_ITEM", data)
              console.log(data)
            }
            else {
              console.log('数据异常！');
            }
          }
        }
      );
    }
  }
}