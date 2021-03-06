
import Vue from 'vue'
import App from './src/components/App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

new Vue({
	render: h =>h(App)
}).$mount('#app')