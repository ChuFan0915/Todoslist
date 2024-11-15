// 引入
import Vue from 'vue';
import App from './App.vue'; // 确保路径正确，并且加上文件扩展名.vue

// 关闭生产提示
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    render: h => h(App),
    // 我们利用vue的原型对象来进行添加一个全局总线
    beforeCreate(){
        Vue.prototype.$bus=this
        // 我们给vue的构造函数添加了一个属性$bus 这个属性等于vue的实例对象vm
    }
});