<template>
  <item-componenter/>
</template>
<script>
import ItemComponenter from "./components/item/item.vue";
export default {
  data() {
    return {
      msg: "hello vue"
    };
  },
  components: {
    "item-componenter": ItemComponenter
  }
};
</script>
