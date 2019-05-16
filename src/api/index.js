import axios from '@/axios.js'

const api = {
  getSearchHotWords () {
    return axios.get('/api/meituan/header/searchHotWords.json')
  },
  getSearch (params) {
    return axios.get('/api/meituan/header/search.json')
  },
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  getResultProducts () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getGoodsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getRecommend () {
    return axios.get('/api/meituan/list/recommend.json')
  },
  getHotCity () {
    return axios.get('api/meituan/city/hot.json')
  },
  getRecentCity () {
    return axios.get('api/meituan/city/recents.json')
  },
  getProvince () {
    return axios.get('api/meituan/city/province.json')
  },
  getCurPosition () {
    return axios.get('api/meituan/city/getPosition.json')
  },
  getCityList () {
    return axios.get('api/meituan/city/cityList.json')
  },
  login (params) {
    return axios.get('api/meituan/login', {params})
  },
  register (params) {
    return axios.get('api/meituan/register', {params})
  }
}

export default api
