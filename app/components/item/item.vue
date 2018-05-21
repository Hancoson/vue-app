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
import { mapActions } from "vuex";
//import axios from "axios";
import jsonp from "jsonp";
import { GET_ITEM } from "./../../store/mutation-types.js";
export default {
  data() {
    return {
      isShow: false,
      items: "",
      time: "",
      url: Config.URL_PREFIX
    };
  },
  created() {
    this.$store.dispatch("getItemData");
    const itemDate = this.$store.state.item;
    this.isShow = itemDate.isShow;
    this.items = itemDate.items;
    this.time = itemDate.times;
    console.log(itemDate);
  }
};
</script>