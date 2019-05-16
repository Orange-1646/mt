<template>
    <div class="m-header">
        <el-row>
            <nav-bar />
        </el-row>
        <el-row>
            <search-bar />
        </el-row>
    </div>
</template>

<script>
import navBar from './navBar.vue'
import searchBar from './searchBar.vue'

export default {
  components: {
    navBar,
    searchBar
  }
}
</script>

<style lang="scss">
    @import "@/assets/css/public/header/index.scss";
</style>
