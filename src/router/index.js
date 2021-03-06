import Vue from 'vue'
import Router from 'vue-router'

//routes
import bodasgrupos from './bodasgrupos';
import pagos from './pagos';
import agencias from './agencias';



Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		// defaultRoutes,
		bodasgrupos,
		pagos,
		agencias
		// {
		// 	path: '/callback',
		// 	component: Auth0CallBack
		// },
		// {
		// 	path: '/session/sign-up',
		// 	component: SignUpOne,
		// 	meta: {
		// 		title: 'message.signUp',
		// 		breadcrumb: null
		// 	}
		// },
		// {
		// 	path: '/session/login',
		// 	component: LoginOne,
		// 	meta: {
		// 		title: 'message.login',
		// 		breadcrumb: null
		// 	}
		// },
		// {
		// 	path: '/session/lock-screen',
		// 	component: LockScreen,
		// 	meta: {
		// 		title: 'Lock Screen',
		// 		breadcrumb: null
		// 	}
		// },
		// {
		// 	path: '/session/forgot-password',
		// 	component: ForgotPassword,
		// 	meta: {
		// 		title: 'message.forgotPassword',
		// 		breadcrumb: null
		// 	}
		// },
		// {
		// 	path: '/session/reset-password',
		// 	component: ResetPassword,
		// 	meta: {
		// 		title: 'message.resetPassword',
		// 		breadcrumb: null
		// 	}
		// }
	]
})
