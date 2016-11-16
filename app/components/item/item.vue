<template lang="html" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <ul class="items">
      <li v-for="item in items">
        <a v-bind:href="url+item.id" target="_blank">
          <div class="dec">
            <h4>{{item.title}}</h4>
            <p>{{time}}</p>
          </div>
          <img class="img" v-bind:src="item.images"/>
        </a>
      </li>
    </ul>
  </div>

</template>
<script>
  import Config from '../../constants/config'
  const VueResource = require('vue-resource');

  Vue.use(VueResource);
  export default{
    data(){
      return {
        items: '',
        time : '',
        url  : Config.URL_PREFIX
      }
    },
    created(){
      this.$http.jsonp(Config.YAHOO + Config.API + this.getDate() + Config.YAHOO_SUFFIX, {jsonp: 'callback'})
        .then((response)=> {
          const data = response.body.query.results.json;
          console.log(data);
          this.items = data.stories;
          this.time  = this.substring(data.date);
        }, (err)=> {
          console.log(err)
        });
    },
    methods: {
      getDate(){
        let d   = new Date();
        let str = d.getFullYear().toString() + (d.getMonth() + 1).toString() + d.getDate().toString();
        return str
      },
      substring(str){
        let _y='',_m='',_d='';
        _y=str.substring(0,4);
        _m=str.substring(4,6);
        _d=str.substring(6,8);
        return (_y+'/'+_m+'/'+_d)

      }
    }

  }


</script>
