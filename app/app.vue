<template>
  <div>
    <head-componenter/>
    <item-componenter/>
    <foot-componenter/>
  </div>
</template>
<script>
  //import HeadComponenter from './components/common/nav.vue';
  import ItemComponenter from './components/item/item.vue';
  //import FootComponenter from './components/foot/foot.vue';
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {
      //'head-componenter': HeadComponenter,
      'item-componenter': ItemComponenter,
      //'foot-componenter': FootComponenter
    }
  }
</script>
