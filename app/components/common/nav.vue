<template>
  <header>
    <i class='logo'></i>
    <ul>
      <li>
        <router-link :class="{'active':action==1}" to="/">首页</router-link>
      </li>
      <li>
        <router-link :class="{'active':action==2}" to="/contents">文章</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  computed: {
    action() {
      return this.$store.state.layout.active;
    }
  }
};
