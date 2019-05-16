<template>
    <div class="m-goods-select">
        <dl class="tab">
            <dt>
                {{title}}
                <i class="el-icon-caret-bottom" />
            </dt>
            <dd>
                <dt class="select-title">{{title}}</dt>
                <span v-for="(item, index) in list" :key="index">{{item.name}}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    props: ['title', 'list']
}
</script>
