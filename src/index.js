import Vue from 'vue';

// 2.1 导入 vue-router
import VueRouter from 'vue-router';
// 2.2 安装 vue-router
Vue.use(VueRouter);

// 2.1 导入 vue-resource
import VueResource from 'vue-resource';
// 2.2 安装 vue-resource
Vue.use(VueResource);
Vue.http.options.root = 'http://www.liulongbin.top:3005';
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css';
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css';

import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css'

import VuePreview from 'vue-preview';
Vue.use(VuePreview)

// 1.3 导入自己的 router.js 路由模块
import router from './router.js';

import index from './index.vue';

var vm = new Vue({
  el: '#app',
  data: {
    
  },
  render: h => h(index),
  router,
});