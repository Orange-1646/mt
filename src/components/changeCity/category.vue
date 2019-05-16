<template>
    <div class="category">
            <dl class="m-category">
                <dt>按拼音首字母选择：</dt>
                <dd v-for="item in cityAlphabet" :key="item">
                    <a :href="'#city-' + item">
                        {{item}}
                    </a>
                </dd>
            </dl>
            <dl :id="'city-' + index.toUpperCase()" class="m-category-section" v-for="(item, index) in cityGroup" :key="index">
                <dt>{{index.toUpperCase()}}</dt>
                <dd>
                    <span @click="changeCity(city)" v-for="city in item" :key="city.id">{{city.name}}</span>
                </dd>
            </dl>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data(){
        return {
            cityAlphabet: 'ABCDEFGHJKLMNPQRSTWXYZ'.split(''),
            cityList: [],
            cityGroup: {}
        }
    },
    created(){
        api.getCityList().then(res => {
            let obj = {}
            console.log(res.data.data)
            this.cityList = res.data.data
            this.cityList.forEach(item => {
                if(!obj[item.firstChar]){
                    obj[item.firstChar] = []
                }
                obj[item.firstChar].push(item)
            })
            this.cityGroup = obj
            console.log(this.cityGroup)
        })
    },
    methods: {
        changeCity(city){
            console.log(city)
            this.$store.dispatch('setPosition', city)
            this.$router.push({
                path: '/index'
            })
        }
    }
}
</script>


<style lang="scss">
    @import '@/assets/css/changecity/category.scss'
</style>
