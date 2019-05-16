<template>
  <div id="app">
    <multi-cascader
      class="multi-cascader-style"
      style="width:300px;"
      v-model="checkListEmpty"
      :data="options"
      @change="change"
      clearable
      expand-trigger="hover"
    ></multi-cascader>
    <!-- <el-cascader-multi v-model="checkList" :data="options" :only-last="onlyLast"></el-cascader-multi> -->
    <!-- <el-cascader-multi v-model="ruleAlarm.test" :data="resourceOption.data" only-last></el-cascader-multi> -->
    <button @click="addValue">addValue</button>
    
  </div>
</template>

<script>
import multiCascader from './components/multi-cascader/multi-cascader.vue'
export default {
  name: 'app',
  components: {
    multiCascader
  },
  watch: {
    checkList: {
      deep: true,
      handler (v) {
        // console.log(v)
      }
    }
  },
  data () {
    return {
      ruleAlarm: {
        nodeIdArray:[]
      },
      resourceOption: {
        "errno": 0,
        "data": [
          {
          "id": 14,
          "label": "广西组",
          "value": "14",
          "children": [
          {
          "id": "14,15",
          "currentId": 15,
          "value": "15",
          "label": "A组",
          "children": [
          {
          "id": "14,15,26",
          "currentId": 26,
          "value": "26",
          "label": "inpb_system_01"
          }
          ]
          },
          {
          "id": "14,17",
          "currentId": 17,
          "value": "17",
          "label": "上海组",
          "children": [
          {
          "id": "14,17,27",
          "currentId": 27,
          "value": "27",
          "label": "inpb_system_02"
          }
          ]
          }
          ]
          }
        ],
        "errmsg": "成功"
      },
      onlyLast: false,
      config: [
        {
          name: '',
          desc: '',
          type: 'el-switch',
          value: false
        }
      ],
      checkListEmpty: [['zhinan', 'shejiyuanze', 'yizhi']],
      checkList: [
        ['zhinan', 'shejiyuanze', 'yizhi'],
        ['zhinan', 'shejiyuanze', 'fankui'],
        ['zhinan', 'shejiyuanze', 'xiaolv'],
        ['zhinan', 'shejiyuanze', 'kekong'],
        ['zhinan', 'daohang', 'cexiangdaohang'],
      ],
      checkList2: ['yizhi', 'fankui'],
      options: [
        {
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
        }
      ]
    }
  },
  methods: {
    addValue () {
      this.checkListEmpty = [['zhinan', 'daohang', 'dingbudaohang']]
    },
    change (v) {
      console.log(v)
    }
  }
}
</script>

<style lang="scss">
</style>
