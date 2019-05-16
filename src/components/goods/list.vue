<template>
  <div class="m-goods-list">
    <dl>
      <dd :class="{'s-nav-active': item.active}" v-for="item in nav" :key="item.key">{{item.name}}</dd>
    </dl>
    <el-row>
        <item v-for="item in productList" :key="item.itemId" :itemInfo="item" />
    </el-row>
  </div>
</template>

<script>
import Item from "@/components/goods/item.vue";
import api from '@/api/index.js'

export default {
  created(){
      api.getGoodsList().then(res => {
          this.productList = res.data.data
      })
  },
  components: {
    Item
  },
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格排序"
        },
        {
          key: "s-score",
          name: "人气最高"
        },
        {
          key: "s-comment",
          name: "评价最高"
        }
      ],
      productList: []
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/goods/list.scss";
</style>
