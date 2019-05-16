<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <a href="#">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
        </a>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input @input="input" v-model="searchKey" placeholder="搜索商家或地点" @focus="focus" @blur="blur"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
              <dt>热门搜索</dt>
              <dd v-for="(item, index) in hotPlaceList" :key="index">
                  <router-link :to="{name : 'goods', params : {name : item}}">{{item}}</router-link>
              </dd>

          </dl>
          <dl class="searchList" v-if="isSearchList">
              <dd v-for="(item, index) in searchList" :key="index">
                  <router-link :to="{name : 'goods', params : {name : item}}">{{item}}</router-link>
              </dd>
          </dl>
        </div>
        <p class="suggest">
          <a v-for="(item, index) in suggestList" :key="index" href="#">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
import { mapState } from 'vuex'

export default {
  created(){
    api.getSearchHotWords().then(res=>{
      this.hotPlaceList = res.data.data
      this.suggestList = res.data.data
    })
  },
  data () {
    return {
      searchKey: '',
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: []
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.searchKey
    },
    isSearchList () {
      return this.isFocus && this.searchKey
    },
    ...mapState(['appkey', 'root'])
  },
  methods: {
    input(){
      api.getSearch().then(res=>{
        console.log(res)
        this.searchList = res.data.data.list.filter(item => {
          return item.indexOf(this.searchKey) > -1
        })
      })
    },
    focus () {
      this.isFocus = true
    },
    blur () {
      setTimeout(() => {
        this.isFocus = false
      }, 100)
    }
  }
}
</script>

<style lang="scss">
</style>
