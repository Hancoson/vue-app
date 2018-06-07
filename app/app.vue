<template>
  <home-componenter/>
</template>
<script>
import HomeComponenter from "./components/home/home.vue";
export default {
  data() {
    return {
      msg: "hello vue"
    };
  },
  components: {
    "home-componenter": HomeComponenter
  }
};
</script>
