// 引入
import Vue from 'vue';
import App from './App.vue'; // 确保路径正确，并且加上文件扩展名.vue

// 关闭生产提示
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    render: h => h(App)
});