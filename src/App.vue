<!--
 * @Author: sheep669
 * @Description: 入口vue
 * @Date: 2022-09-19 20:40:42
-->
<template>
    <div id="app">
        <van-tabbar route active-color="#fec200">
            <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/classify">分类</van-tabbar-item>
            <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="contact" to="/we">我的</van-tabbar-item>
        </van-tabbar>
        <router-view />
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0,
        };
    },
};
</script>
<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
