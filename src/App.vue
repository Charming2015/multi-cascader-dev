<template>
  <div id="app">
    <!-- <multi-cascader
      class="multi-cascader-style"
      v-model="checkList"
      :data="options"
      :onlyLast="false"
    ></multi-cascader> -->
    <el-cascader-multi v-model="checkList" :data="options" :only-last="true">
    </el-cascader-multi>
  </div>
</template>

<script>
// import multiCascader from './components/multi-cascader/multi-cascader.vue'
export default {
  name: 'app',
  components: {
    // multiCascader
  },
  data () {
    return {
      checkList: [],
      options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
    }
  }
}
</script>

<style lang="scss">

</style>
