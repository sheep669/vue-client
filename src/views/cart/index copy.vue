<!--
 * @Author: sheep669
 * @Description: 购物车
 * @Date: 2022-09-20 08:46:56
-->
<template>
    <div id="shopping-cart">
        <van-nav-bar title="购物车" left-text="返回" left-arrow> </van-nav-bar>
        <van-checkbox v-model="checked">复选框</van-checkbox>
        <div>
            <van-card
                centered
                desc="值得拥有"
                title="网红速食拌面"
                thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
            >
                <template #footer>
                    <van-field name="stepper" label="商品数量">
                        <template #input>
                            <van-stepper
                                v-model="stepper"
                                theme="round"
                                button-size="22"
                                disable-input
                            />
                        </template>
                    </van-field>
                </template>
            </van-card>
        </div>
        <van-card
            centered
            desc="值得拥有"
            title="网红速食拌面"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        >
            <template #footer>
                <van-field name="stepper" label="商品数量">
                    <template #input>
                        <van-stepper
                            v-model="stepper"
                            theme="round"
                            button-size="22"
                            disable-input
                        />
                    </template>
                </van-field>
            </template>
        </van-card>

        <van-card
            centered
            desc="值得拥有"
            title="网红雪碧"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        >
            <template #footer>
                <van-field name="stepper" label="商品数量">
                    <template #input>
                        <van-stepper
                            v-model="stepper"
                            theme="round"
                            button-size="22"
                            disable-input
                        />
                    </template>
                </van-field>
            </template>
        </van-card>

        <van-submit-bar
            :price="3050"
            button-text="提交订单"
            @submit="onSubmit"
            loading
        >
            <van-checkbox v-model="checked">全选</van-checkbox>
            <template #tip>
                你的收货地址不支持同城送,
                <span @click="onClickEditAddress">修改地址</span>
            </template>
        </van-submit-bar>
    </div>
</template>
<script>
export default {
    name: "ShoppingCart",
    data() {
        return {
            checked: true,
            stepper: 1,
            list: ["a", "b"],
            result: [],
        };
    },
    methods: {
        toggle(index) {
            this.$refs.checkboxes[index].toggle();
        },
        onClickEditAddress() {
            console.log("切换地址");
        },
        onSubmit() {
            console.log("点击了提交订单");
        },
    },
};
</script>
<style lang='less' scoped>
/deep/.van-field__control--custom {
    margin-left: 120px;
}
/deep/.van-nav-bar__text {
    color: black;
    font-weight: 700;
}
/deep/ .van-icon {
    color: black !important;
}
</style>