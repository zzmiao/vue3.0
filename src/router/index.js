import {
	createRouter,
	createWebHistory
} from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [{
			path: '',
			redirect: '/docs',
		}, {
			path: '/docs',
			name: 'Docs',
			meta: {
				title: '文档'
			},
			component: () => import('@/views/Docs.vue')
		},
		{
			path: '/tutorial',
			name: 'Tutorial',
			meta: {
				title: '教程'
			},
			component: () => import('@/views/Tutorial.vue')
		},
		{
			path: '/blog',
			name: 'Blog',
			meta: {
				title: '博客'
			},
			component: () => import('@/views/Blog.vue')
		},
		{
			path: '/community',
			name: 'Community',
			meta: {
				title: '社区'
			},
			component: () => import('@/views/Community.vue')
		},
		{
			path: '/about',
			name: 'About',
			meta: {
				title: '关于'
			},
			component: () => import('@/views/About.vue')
		},
		{
			path: '/ts',
			name: 'Ts',
			meta: {
				title: 'TypeScript 教程'
			},
			component: () => import('@/views/TS.vue')
		}
	],
	scrollBehavior: () => {

		return {
			top: 0
		}
	}
})

import {
	useClientStore
} from '@/stores/client'
router.beforeEach((to, from, next) => {
	console.log("[to]", to)
	const store = useClientStore();
	console.log("[store]", store)
	next();
})

export default router