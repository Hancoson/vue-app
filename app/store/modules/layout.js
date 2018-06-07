/**
 * @Author: Guoxing.han 
 * @Date: 2018-06-07 16:32:34 
 * @version 0.0.1 
 */
import { HEADER_CHANGE } from './../mutation-types'

export default {
  state: {
    active: 1
  },
  mutations: {
    HEADER_CHANGE(state, active) {
      state.active = active
    }
  }
}