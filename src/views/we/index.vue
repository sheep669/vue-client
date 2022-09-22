<!--
 * @Author: sheep669
 * @Description: 我的
 * @Date: 2022-09-20 08:49:37
-->
<template>
    <div id="shopping-we">
        <van-nav-bar title="我的" left-text="返回" left-arrow> </van-nav-bar>
        <van-card>
            <template #title>
                <van-image
                    round
                    width="5rem"
                    height="5rem"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
            </template>
        </van-card>
        <br />
        <van-cell-group inset>
            <van-cell is-link icon="location-o">
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-title">我的地址</span>
                </template>
            </van-cell>
            <van-cell is-link icon="manager-o">
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-title">团长入驻</span>
                </template>
            </van-cell>
            <van-cell is-link icon="gold-coin-o" value="查看">
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-tit">会员红包</span>
                </template>
            </van-cell>
        </van-cell-group>
        <br /><br />
        <van-cell-group inset>
            <van-cell is-link icon="manager-o">
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-title">骑手招募</span>
                </template>
            </van-cell>
            <van-cell is-link icon="gold-coin-o" value="19867879887">
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-tit">客服电话</span>
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>
<script>
export default {
    name: "ShoppingWe",
};
</script>
<style lang='less' scoped>
.custom-title {
    margin-right: 220px;
    vertical-align: middle;
}
.custom-tit {
    margin-right: 78px;
    vertical-align: middle;
}
/deep/.van-nav-bar__text {
    color: black;
    font-weight: 700;
}
/deep/ .van-icon {
    color: black !important;
}
</style>