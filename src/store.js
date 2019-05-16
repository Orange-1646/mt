import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  position: {},
  appkey: 'orange1646_1551587212093',
  root: 'http://api.duyiedu.com',
  userName: ''
}
const mutations = {
  setPosition (state, val) {
    state.position = val
  },
  setUserName (state, val) {
    state.userName = val
  }
}
const actions = {
  setPosition ({commit}, val) {
    // 异步请求获取当前位置数据
    commit('setPosition', val)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
