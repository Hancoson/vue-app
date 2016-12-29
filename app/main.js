import Vue from 'vue';
import './assets/scss/main.scss';
import  App from './app.vue';

new Vue({
  el        : '#vue-app',
  components: {
    'router-view': App
  }
})
