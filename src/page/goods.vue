<template>
    <div class="goods-product">
        <el-row>
            <bread-crumb />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <category />
                </el-row>
                <el-row>
                    <list />
                </el-row>
            </el-col>
            <el-col :span="5">
                <el-row>
                    <div class="map"></div>
                </el-row>
                <el-row>
                    <favorite />
                </el-row>
            </el-col>
        </el-row>
        {{val}}
    </div>
</template>

<script>
import BreadCrumb from '@/components/goods/breadcrumb.vue'
import Category from '@/components/goods/category.vue'
import List from '@/components/goods/list.vue'
import Favorite from '@/components/goods/fav.vue'

export default {
    components: {
        BreadCrumb,
        Category,
        List,
        Favorite
    },
    computed : {
        val(){
            return this.$route.params.name
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/goods/index.scss'
</style>