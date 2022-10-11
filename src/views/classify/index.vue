<!--
 * @Author: sheep669
 * @Description: 商品分类
 * @Date: 2022-09-20 08:48:07
-->
<template>
    <div id="classify">
        <van-nav-bar
            title="分类"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        >
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
        <van-tree-select
            height="90vh"
            :items="items"
            :main-active-index.sync="active"
        >
            <template #content>
                <van-card
                    v-if="active === 0"
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
                        <van-button
                            round
                            type="info"
                            size="small"
                            color="#fec200"
                            >加入购物车</van-button
                        >
                    </template>
                </van-card>
                <van-card
                    v-if="active === 1"
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
                        <van-button
                            round
                            type="info"
                            size="small"
                            color="#fec200"
                            >加入购物车</van-button
                        >
                    </template>
                </van-card>
                <van-card
                    v-if="active === 2"
                    price="2.00"
                    desc="值得拥有"
                    title="纯调网红速食拌面"
                    thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                    origin-price="9.00"
                >
                    <template #tags>
                        <van-tag plain type="danger">火爆</van-tag> &nbsp;
                        <van-tag plain type="danger">买贵必赔</van-tag>
                    </template>
                    <template #footer>
                        <van-button
                            round
                            type="info"
                            size="small"
                            color="#fec200"
                            >加入购物车</van-button
                        >
                    </template>
                </van-card>
                <van-card
                    v-if="active === 2"
                    price="2.00"
                    desc="值得拥有"
                    title="纯调网红速食拌面"
                    thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                    origin-price="8.00"
                >
                    <template #tags>
                        <van-tag plain type="danger">火爆</van-tag> &nbsp;
                        <van-tag plain type="danger">买贵必赔</van-tag>
                    </template>
                    <template #footer>
                        <van-button
                            round
                            type="info"
                            size="small"
                            color="#fec200"
                            >加入购物车</van-button
                        >
                    </template>
                </van-card>
                <van-card
                    v-if="active === 3"
                    price="5.00"
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
                        <van-button
                            round
                            type="info"
                            size="small"
                            color="#fec200"
                            >加入购物车</van-button
                        >
                    </template>
                </van-card>
            </template>
        </van-tree-select>
    </div>
</template>
<script>
export default {
    name: "GoodsClassify",
    data() {
        return {
            value: "",
            active: 0,
            items: [
                { text: "蔬菜" },
                { text: "水果" },
                { text: "日用品" },
                { text: "饮品" },
            ],
        };
    },
    methods: {
        onSearch() {
            console.log("点了分类里的搜索");
        },
        onClickLeft() {
            this.$router.go(-1);
        },
    },
};
</script>
<style lang='less' scoped>
.van-sidebar-item--select::before {
    background-color: #fec200;
}
/deep/ .van-search__action {
    font-weight: bold;
}
/deep/ .van-icon-search {
    font-weight: 600;
}
.van-nav-bar {
    background-color: #fec200;
}
/deep/.van-nav-bar__text {
    color: black;
    font-weight: 700;
}
/deep/ .van-nav-bar__title {
    color: black;
    font-weight: bold;
}
/deep/ .van-icon-arrow-left {
    color: black !important;
}
.van-card {
    background: white;
}
.van-card__footer {
    text-align: center;
    margin: 4px;
}
.van-button--small {
    width: 200px;
}
</style>