<template>
    <dl class="s-item">
        <dt>
            <img :src="itemInfo.image" alt="">
        </dt>
        <dd>
            <h3>
                <router-link :to="{name: 'productDetail'}">{{itemInfo.title}}</router-link>
            </h3>
            <p>
                <el-rate v-model="itemInfo.score" disabled show-score text-color="#ff9900"></el-rate>
                <span v-if="itemInfo.score > 4.5">很好</span>
                <span v-else-if="itemInfo.score > 4">好</span>
                <span v-else-if="itemInfo.score > 3.5">不错</span>
                <span v-else-if="itemInfo.score > 3">一般</span>
                <span v-else>差</span>
                <span class="">{{itemInfo.score}}分</span>
                <span class="s-item-comment-tota    l">{{itemInfo.commentNum}}人评论</span>
            </p>
            <p>
                <span>
                    <span v-for="(v, i) in itemInfo.tab" :key="v">
                        {{v + (i < itemInfo.tab.length - 1 ? '|' : '')}}
                    </span>
                </span>
                <span class="s-item-addr">{{itemInfo.address}}</span>
                <span>
                    <a href="#">
                        <i class="el-icon-location"></i>
                        查看地图
                    </a>
                </span>
            </p>
            <p>
                <span class="s-item-price">
                    人均￥{{itemInfo.avgPrice}}
                </span>
            </p>
            <ul class="deal-items">
                <li class="items" v-for="item in itemInfo.dealItems.slice(0, 2)" :key="item.title">
                    <p class="deal-title">{{item.title}}</p>
                    <p>
                        <span class="deal-price">
                            ￥{{item.price}}
                        </span>
                        <span class="deal-old-price">
                            门市价￥{{item.counterPrice}}
                        </span>
                        <span class="deal-sales">
                            已售{{item.saleNum}}
                        </span>
                    </p>
                </li>
            </ul>
        </dd>
    </dl>
</template>

<script>
export default {
    props: ['itemInfo']
}
</script>
