<template>
  <section class="index-w">
    welcome to - <router-link class="" to="/contents">Daily</router-link>
  </section>
</template>
<script>
import { HEADER_CHANGE } from "./../../store/mutation-types.js";
export default {
  created() {
    this.$store.commit(HEADER_CHANGE, 1);
  }
};
</script>
