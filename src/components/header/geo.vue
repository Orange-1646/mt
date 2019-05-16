<template>
    <div class="m-geo">
        <div class="location">
            <i class="el-icon-location" />
            {{$store.state.position.name}}
            <router-link class="changeCity" :to="{name: 'changecity'}">
                切换城市
            </router-link>
            [
            <a href="#" v-for="item in nearCity" :key="item.id">{{item.name}} </a>
            ]
            <div class="m-user" v-if="!$store.state.userName">
                <router-link class="login" :to="{name: 'login'}">
                    立即登陆
                </router-link>
                <router-link class="register" :to="{name: 'register'}">
                    注册
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    created(){
        api.getCurPosition().then(res => {
            this.$store.dispatch('setPosition', res.data.data)
            this.nearCity = res.data.data.nearCity
        })
    },
    watch: {
        '$store.state.position': function(){
            this.nearCity = this.$store.state.position.nearCity
        }
    },
    data(){
        return {
            nearCity : []
        }
    }
}
</script>
