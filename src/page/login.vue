<template>
  <div class="page-login">
    <div class="login-header">
      <a class="logo" href="#"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        >
      </div>
      <div class="form">
        <p v-if="error" class="tips">
            <i></i>
            <span>{{error}}</span>
        </p>
        <p>
          <span>账号登录</span>
        </p>
        <el-input :class="{error: error && !userName}" prefix-icon="profile" placeholder="用户名" v-model="userName">
        </el-input>
        <el-input :class="{error: error && !password}" prefix-icon="password" type="password" placeholder="密码" v-model="password">
        </el-input>
        <div class="foot">
            <a href="#">
                忘记密码？
            </a>
        </div>
        <button class="btn-login" @click="submit">登录</button>
        <p class="register">
            还没有账号？ 
            <router-link :to="{path: '/register'}">免费注册</router-link>
        </p>
      </div>
    </div>
    <div class="footer">
      <footer class="footer">
        <div class="site-info-nav cf">
          <ul>
            <li class="first">
              <a rel="nofollow" href="https://about.meituan.com/about.html">关于美团</a>
            </li>
            <li>
              <a rel="nofollow" href="https://zhaopin.meituan.com/">加入我们</a>
            </li>
            <li>
              <a rel="nofollow" href="http://emis.meishi.meituan.com/merchantsSettled">商家入驻</a>
            </li>
            <li>
              <a rel="nofollow" href="https://www.meituan.com/help/faq">帮助中心</a>
            </li>
            <li class="last">
              <a href="http://meituan.com/mobile">美团手机版</a>
            </li>
          </ul>
        </div>
        <p>
          ©
          <span>2019</span>
          <span>美团网团购</span>
          meituan.com
          <span>京ICP证070791号</span>
          京公网安备11010502025545号
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data(){
        return {
            userName: '',
            password: '',
            error: ''
        }
    },
    methods: {
        submit(){
            if(!this.userName && !this.password){
                this.error = '请输入账号和密码'
                return false
            }
            if(!this.userName){
                this.error = '请输入账号'
                return false
            }
            if(!this.password){
                this.error = '请输入密码'
                return false
            }
            this.error = ''
            api.login( {
                userName: this.userName,
                password: this.password
              }).then(res => {
              console.log(res)
              if(res.data.status == 'success'){
                this.$store.commit('setUserName', this.userName)
                this.$router.push({
                  name: 'index'
                })
              }
              else{
                this.error = res.data.msg
              }
            })
        },
    }
}
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>
