<template>
  <div class="s-favorite">
    <h3>猜你喜欢</h3>

    <a href="#" v-for="item in favList" :key="item.itemId">
      <div class="card-wrapper">
        <div class="img-wrapper">
          <img :src="item.imgUrl" alt>
        </div>
        <div class="info-box">
          <div class="title">{{item.title}}</div>
          <div class="rate-wrapper">
            <el-rate
              class="score"
              v-model="item.score"
              disabled
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
            <span class="comment-num">{{item.commentNum}}个评价</span>
          </div>
          <div class="desc-line">
            <div class="desc">{{item.areaName}}</div>
          </div>
          <div class="bottom-line">
            <div class="price-box">
              <span>
                <span class="yuan">￥</span>
                <span class="price-number numfont">{{item.lowPrice}}</span>
                <span class="price-desc">起</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  created(){
      api.getRecommend().then(res => {
          console.log(res.data.data)
          this.favList = res.data.data
          this.favList.forEach(item => {
              item.score = parseInt(item.score)
          })
      })
    },
  data() {
    return {
      favList: []
    }
  }
}
</script>
