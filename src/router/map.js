export default {
	'/': {
		meta: { title: '首页' },
		component: (resolve) => require(['pages/default'], resolve)
	}
}