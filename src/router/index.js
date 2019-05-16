import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/default.vue'
import Blank from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import Goods from '@/page/goods.vue'
import ChangeCity from '@/page/changecity'
import Login from '@/page/login'
import Register from '@/page/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default,
      redirect: '/index',
      children: [{
        path: 'index',
        name: 'index',
        component: Index
      },
      {
        path: 's/:name',
        name: 'goods',
        component: Goods
      },
      {
        path: '/changecity',
        name: 'changecity',
        component: ChangeCity
      }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: Blank,
      children: [{
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      }
      ]
    }
  ]
})
