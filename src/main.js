import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import elCascaderMulti from 'el-cascader-multi'
console.log(elCascaderMulti)
Vue.use(elCascaderMulti)

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
