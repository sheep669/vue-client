<!--
 * @Author: sheep669
 * @Description: 首页
 * @Date: 2022-09-20 08:48:54
-->
<template>
    <div id="shopping-home">
        <van-nav-bar title="未来优选" left-text="返回" left-arrow>
        </van-nav-bar>
        <van-search
            clearable
            v-model="value"
            shape="round"
            background="#fec200"
            placeholder="总得买点啥,搜一下吧"
            show-action
            @search="onSearch"
        >
            <template #action>
                <div @click="onSearch">搜索</div>
            </template></van-search
        >
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" style="height: 200px" />
            </van-swipe-item>
        </van-swipe>
        <van-grid border clickable>
            <van-grid-item>
                <van-image :src="require('../../assets/images/手链.png')" />
                <small>日用品</small>
            </van-grid-item>
            <van-grid-item>
                <van-image :src="require('../../assets/images/蔬菜.png')" />
                <small>蔬菜</small>
            </van-grid-item>
            <van-grid-item>
                <van-image :src="require('../../assets/images/蔬菜.png')" />
                <small>水果</small>
            </van-grid-item>
            <van-grid-item>
                <van-image :src="require('../../assets/images/蔬菜.png')" />
                <small>饮料</small>
            </van-grid-item>
        </van-grid>
        <van-card
            tag="火爆"
            price="2.00"
            desc="值得拥有"
            title="纯调网红速食拌面"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
            origin-price="10.00"
        >
            <template #tags>
                <van-tag plain type="danger">火爆</van-tag> &nbsp;
                <van-tag plain type="danger">买贵必赔</van-tag>
            </template>
            <template #footer>
                <van-button round type="info" size="small" color="#fec200"
                    >加入购物车</van-button
                >
            </template>
        </van-card>
        <van-card
            tag="抢购"
            price="2.00"
            desc="你值得拥有"
            title="纯调网红速食拌面"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
            origin-price="10.00"
        >
            <template #tags>
                <van-tag plain type="danger">火爆</van-tag> &nbsp;
                <van-tag plain type="danger">买贵必赔</van-tag>
            </template>
            <template #footer>
                <van-button round type="info" size="small" color="#fec200"
                    >加入购物车</van-button
                >
            </template>
        </van-card>
        <van-card
            tag="抢购"
            price="2.00"
            desc="你值得拥有"
            title="纯调网红速食拌面"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
            origin-price="10.00"
        >
            <template #tags>
                <van-tag plain type="danger">火爆</van-tag> &nbsp;
                <van-tag plain type="danger">买贵必赔</van-tag>
            </template>
            <template #footer>
                <van-button round type="info" size="small" color="#fec200"
                    >加入购物车</van-button
                >
            </template>
        </van-card>
    </div>
</template>
<script>
export default {
    name: "ShoppingHome",
    data() {
        return {
            value: "",
            images: [
                "https://img01.yzcdn.cn/vant/apple-1.jpg",
                "https://img01.yzcdn.cn/vant/apple-2.jpg",
            ],
        };
    },
    methods: {
        onSearch() {
            console.log("点了搜索");
        },
    },
};
</script>
<style lang='less' scoped>
#shopping-home {
    margin-bottom: 60px;
}
.van-nav-bar {
    background-color: #fec200;
}
/deep/.van-nav-bar__text {
    color: black;
    font-weight: 700;
}
/deep/ .van-icon {
    color: black !important;
}
/deep/ .van-nav-bar__title {
    color: black;
    font-weight: bold;
    font-size: 22px;
}
/deep/ .van-search__action {
    font-weight: bold;
}
/deep/ .van-icon-search {
    font-weight: 600;
}
</style>