<template lang="html" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class='' v-if="isShow">
    <ul class="items">
      <li v-for="item in items">
        <a v-bind:href="url+item.id" target="_blank">
          <div class="dec">
            <h4>{{item.title}}</h4>
            <p>{{time}}</p>
          </div>
          <img class="img" v-bind:src="item.images" />
        </a>
      </li>
    </ul>
  </div>
  <div class="loading" v-else>
    <img src="http://open.file.meizu.com/group1/M00/00/A2/CnQOjVgf5fOARdzoAAAG-2B8lnY438.gif" />
  </div>
</template>
<script>
  import Nav from '../nav/nav.vue';
Vue.component('Nav', {
  template: '<li>This is a todo</li>'
})
  console.log(Nav);
  export default {

    data() {
      return {
        isShow: false,
        items: '',
        time: '',
        url: Config.URL_PREFIX
      }
    },
    created() {
      this.$http.jsonp(Config.YAHOO + Config.API + this.getDate() + Config.YAHOO_SUFFIX, { jsonp: 'callback' })
        .then((response) => {
          this.isShow = true;
          const data = response.body.query.results.json;
          console.log(data);
          this.items = data.stories;
          this.time = this.substring(data.date);
        }, (err) => {
          console.log(err)
        });
    },
    methods: {
      getDate() {
        let d = new Date();
        let m = d.getMonth() + 1;
        if (m < 10) {
          m = '0' + m.toString()
        }
        let str = d.getFullYear().toString() + m + d.getDate().toString();
        return str
      },
      substring(str) {
        let _y = '', _m = '', _d = '';
        _y = str.substring(0, 4);
        _m = str.substring(4, 6);
        _d = str.substring(6, 8);
        return (_y + '/' + _m + '/' + _d)

      }
    }

  }

</script>