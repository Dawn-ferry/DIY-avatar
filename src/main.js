import Vue from 'vue';
import App from './App';
import './uni.promisify.adaptor';
import uniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue';
// 全局注册所有图标组件
Vue.component('uni-icons', uniIcons);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
  ...App
});
app.$mount();
