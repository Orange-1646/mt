<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="hideDetail">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menuList" :key="index"  @mouseenter="showDetail(item)">
        <i :class="item.icon"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="currentDetail" class="detail" @mouseenter="keepDetail" @mouseleave="hideDetail">
      <template v-for="(item, index) in currentDetail.items">
        <h2 :key="index + item">{{item.title}}</h2>
        <span v-for="(childItem, childIndex) in item.items" :key="childIndex + '--' + childItem">{{childItem}}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  created(){
    api.getMenuList().then(res => {
      this.menuList = res.data.data
    })
  },
  data() {
    return {
      currentDetail: null,
      menuList: [
        {
          title: "美食",
          icon: "food",
          children: [
            {
              title: "美食",
              children: [
                "代金券",
                "甜品饮品",
                "火锅自助",
                "小吃快餐",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤烤肉"
              ]
            }
          ]
        },
        {
          title: "外卖",
          icon: "takeout",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"]
            }
          ]
        },
        {
          title: "酒店",
          icon: "hotel",
          children: [
            {
              title: "酒店星级",
              children: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        }
      ]
    };
  },
  methods: {
    showDetail(data) {
      this.currentDetail = data
    },
    hideDetail(){
        this.timer = setTimeout(() => {
            this.currentDetail = null
        }, 100);
    },
    keepDetail(){
        clearTimeout(this.timer)
    }
  }
};
</script>