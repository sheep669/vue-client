<template>
    <div>
        <van-nav-bar title="购物车" left-text="返回" left-arrow> </van-nav-bar>
        <van-checkbox-group class="card-goods" v-model="checkedGoods">
            <van-checkbox
                class="card-goods__item"
                v-for="item in goods"
                :key="item.id"
                :name="item.id"
            >
                <van-card
                    class="goods_card"
                    :title="item.title"
                    :desc="item.desc"
                    :num="item.num"
                    :price="formatPrice(item.price)"
                    :thumb="item.thumb"
                />
            </van-checkbox>
        </van-checkbox-group>
        <van-submit-bar
            :price="totalPrice"
            :disabled="!checkedGoods.length"
            :button-text="submitBarText"
            @submit="onSubmit"
        >
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
            checkedGoods: ["1", "2", "3"],
            goods: [
                {
                    id: "1",
                    title: "进口香蕉",
                    desc: "约250g，2根",
                    price: 200,
                    num: 1,
                    thumb: "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg",
                },
                {
                    id: "2",
                    title: "陕西蜜梨",
                    desc: "约600g",
                    price: 690,
                    num: 1,
                    thumb: "https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg",
                },
                {
                    id: "3",
                    title: "美国伽力果",
                    desc: "约680g/3个",
                    price: 2680,
                    num: 1,
                    thumb: "https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg",
                },
            ],
        };
    },

    computed: {
        submitBarText() {
            const count = this.checkedGoods.length;
            return "去结算" + (count ? `(${count})` : "");
        },

        totalPrice() {
            return this.goods.reduce(
                (total, item) =>
                    total +
                    (this.checkedGoods.indexOf(item.id) !== -1
                        ? item.price
                        : 0),
                0
            );
        },
    },

    methods: {
        formatPrice(price) {
            return (price / 100).toFixed(2);
        },

        onSubmit() {
            this.$toast({ message: "点击了去结算", position: top });
        },
        onClickEditAddress() {
            this.$toast({ message: "点击了更换地址", position: top });
        },
    },
};
</script>

<style lang="less" scoped>
/deep/.van-field__control--custom {
    margin-left: 120px;
}
/deep/.van-nav-bar__text {
    color: black;
    font-weight: 700;
}
/deep/ .van-icon-arrow-left {
    color: black !important;
}
/deep/ .van-nav-bar__title {
    color: black;
    font-weight: bold;
}
.goods_card {
    background-color: #fff;
    width: 320px;
}
.card-goods {
    padding: 10px 10px 10px 15px;
    background-color: #fff;

    &__item {
        position: relative;
        margin-bottom: 4px;
        background-color: #fff;
        border: 1px solid #fafafa;
        padding-left: 8px;
        .van-checkbox__label {
            width: 100%;
            height: auto; // temp
            padding: 0 10px 0 15px;
            box-sizing: border-box;
        }

        .van-checkbox__icon {
            top: 50%;
            left: 10px;
            z-index: 1;
            position: absolute;
            margin-top: -10px;
        }

        .van-card__price {
            color: #f44;
        }
    }
}
</style>
