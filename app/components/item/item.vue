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
import jsonp from "jsonp";
import * as utils from "./../../utils/index";
import { GET_ITEM, HEADER_CHANGE } from "./../../store/mutation-types.js";
export default {
  data() {
    return {
      isShow: false,
      items: [],
      time: "",
      url: Config.URL_PREFIX
    };
  },
  computed: {
    action() {
      return this.$store.state.layout.active;
    }
  },
  created() {
    this.$store.commit(HEADER_CHANGE, 2);
  },
  mounted() {
    this.getDates();
  },
  methods: {
    getDates() {
      jsonp(
        Config.YAHOO + Config.API + utils.getDate() + Config.YAHOO_SUFFIX,
        null,
        (err, response) => {
          if (err) {
            console.log(err);
          } else {
            if (response.query.results) {
              const data = response.query.results.json;
              this.isShow = true;
              this.items = data.stories;
              this.times = data.date;
            } else {
              console.log("数据异常！");
            }
          }
        }
      );
    }
  }
};
</script>