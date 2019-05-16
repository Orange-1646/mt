<template>
    <div>
        <el-card shadow="never" :body-style="{ padding: '0px' }">
          <img
            :src="info.image"
            class="image"
          >
          <div class="cbody">
            <div class="title" :title="info.title">{{info.title}}</div>
            <div class="sub-title" :title="info.subTitle">{{info.subTitle}}</div>
            <div class="info-wrapper">
              <div class="price-info">
                <span class="current-price-wrapper">
                  <span class="price-symbol">¥</span>
                  <span class="current-price">{{info.price}}</span>
                </span>
              </div>
              <div class="pos">
                <span>{{info.address}}</span>
              </div>
            </div>
          </div>
        </el-card>
    </div>
</template>

<script>
export default {
    props: ['info']
}
</script>

