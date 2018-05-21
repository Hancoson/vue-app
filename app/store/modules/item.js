/**
 * @Author: Guoxing.han 
 * @Date: 2018-05-21 13:37:38 
 * @version 0.0.1 
 */
import jsonp from 'jsonp'
import { GET_ITEM, SHOW_ITEM, GET_TIME } from './../mutation-types'
export default {
  state: {
    isShow: false,
    items: [],
    times: ''
  },
  mutations: {
    [SHOW_ITEM](state, style) {
      state.isShow = style
    },
    [GET_ITEM](state, data) {
      state.items = data
    },
    [GET_TIME](state, data) {
      state.times = data
    }
  },
  action: {
    getData({ commit, state }) {
      jsonp(
        Config.YAHOO + Config.API + this.getDate() + Config.YAHOO_SUFFIX,
        null,
        (err, response) => {
          if (err) {
            console.log(err);
          } else {
            console.log(response);
            commit(SHOW_ITEM, true)
            const data = response.query.results.json;
            console.log(data);
            commit(SHOW_ITEM, data.stories)
            commit(SHOW_ITEM, data.stories)
            commit(GET_TIME, this.substring(data.date))
          }
        }
      );
    }
  }
}