<template>
  <div :class="['choose-wrap', disabled ? 'disabled': '']" @click="showWrapper" v-document-click="dClick">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content': true, 'active': showWrapperActive}">
          <h2>{{title}}</h2>
          <div :class="['wrapper', className]">
              <div class="col" v-for="(eachList, index) in renderList" :key="index">
                  <span  @click="changeValue(item)" :class="{'mt-item': true, 'active': item == value }" v-for="(item, index) in eachList" :key="index">{{item.provinceName || item.name}}</span>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: [
        'list',
        'title',
        'value',
        'disabled',
        'className'
    ],
    data(){
        return {
            showWrapperActive: false
        }
    },
    computed: {
        renderList(){
            let col = Math.ceil(this.list.length / 12)
            let resList = []
            for(let i = 0; i < col; i++){
                let data = this.list.slice(i * 12, i * 12 + 12)
                resList.push(data)
            }
            return resList
        }
    },
    methods: {
        showWrapper(e){
            e.stopPropagation()
            if(!this.disabled){
                this.showWrapperActive = !this.showWrapperActive
            }

        },
        dClick(){
            this.showWrapperActive = false
        },
        changeValue(item){
            this.$emit('change', item)
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>

