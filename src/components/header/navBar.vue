<template>
    <el-row class="m-header m-header-topbar">
        <el-col :span="10">
            <m-geo />
        </el-col>
        <el-col :span="14">
            <m-nav />
        </el-col>
    </el-row>
</template>

<script>
import MGeo from './geo.vue'
import MNav from './nav.vue'

export default {
  components: {
    MGeo,
    MNav
  }
}
</script>
<style lang="scss">
    @import '@/assets/css/public/header/topBar.scss';
</style>
