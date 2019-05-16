<template>
  <div class="m-istyle">
    <dl :class="nav.class" @mouseover="over">
      <dt>{{nav.title}}</dt>
      <dd v-for="item in nav.list" :key="item.tab" :class="{active : focus === item.tab}" :data-type="item.tab">{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in resultData[focus]" :key="item.image">
        <card :info="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from './card.vue'
import api from  '@/api/index.js'

export default {
    created(){
      api.getResultProducts().then(res => {
        this.resultData = res.data.data
      })
    },
    props: ['nav'],
    components: {
        Card
    },
    data(){
        return {
            focus: 'all',
            resultData: {
            }
        }
    },
    methods: {
        over(e){
            let type = e.target.dataset.type
            console.log(type)
            if(!type){
                return false
            }
            this.focus = type
            //动态获取ajax请求
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>

