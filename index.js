
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './src/router';
import App from './src/App';
import MobileApp from './src/MobileApp';
import './src/css/common/base.css';
// import ElementUI from 'element-ui';
// import { Carousel, Input, Button } from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import { getCookie } from 'jspath/common/utils';
import store from 'rootPath/store/';
import isLogin from 'rootPath/utils/auth.js';
// import ajax from './config/ajax'
// import './style/common'
// import './config/rem'

// Vue.use(VueAwesomeSwiper, /* { default options with global component } */);

// console.log('Carousel', Carousel);

// Vue.use(Carousel);
// Vue.use(Input);
// Vue.use(Button);
// Vue.use(ElementUI);
Vue.use(VueRouter);
const router = new VueRouter({
	routes
});

router.beforeEach((to, from, next) => {

	// 路由切换，判断是否在登录状态
	const isLoginBoolean = isLogin();
	store.state.isLogin = isLoginBoolean;

	// 登录状态判断
	// if (to.path == '/login') {
	// 	next();
	// } else {
	// 	if (!isLoginBoolean) {
	// 		next('pageIndex');
	// 	}
	// }
	next();
});

const resultApp = window.isMobile ? MobileApp : App;
new Vue({
	router,
	store,
	render: h =>h(resultApp)
}).$mount('#app')