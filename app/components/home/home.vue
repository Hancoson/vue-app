<template>
    <div class="main">
        <v-nav></v-nav>
        <transition name="move" mode="out-in"><router-view class='wrapper'></router-view></transition>
    </div>
</template>

<script>
    import vNav from '../nav/nav.vue';
    export default {
        components:{
            vNav
        }
    }
</script>