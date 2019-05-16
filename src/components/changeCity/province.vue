<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select @change="changeProvince" :list="provinceList" title="省份" :value="province" />
    <m-select @change="changeCity" :list="cityList" title="城市" :value="city" :disabled="cityDisabled" className="city" />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item.label" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "@/components/changeCity/select.vue";
import api from '@/api/index.js'

export default {
  created(){
    api.getProvince().then(res => {
      this.provinceList = res.data.data
    })
  },
  data() {
    return {
      cityDisabled: true,
      cityList: [],
      provinceList: [],
      province: "省份",
      city: "城市",
      searchList: ["哈尔滨", "牡丹江", "鹤岗", "深圳", "上海"],
      searchWord: "",
      loading: false
    };
  },
  components: {
    MSelect
  },
  methods: {
      remoteMethod(val){
          console.log(val)
          //ajax请求
      },
      changeProvince(val){
        this.city = "城市"
        this.cityDisabled = false
        this.province = val.provinceName
        this.cityList = val.cityInfoList
      },
      changeCity(val){
        this.city = val.name
        this.$store.dispatch('setPosition', val)
        this.$router.push('/index')
      }
  }
};
</script>


