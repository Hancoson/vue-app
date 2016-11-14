import Vue from 'vue';
import Test from './components/test.vue'

import './assets/scss/main.scss';

new Vue({
  el: '#vue-app',
	components: {
		test: Test
	}
})