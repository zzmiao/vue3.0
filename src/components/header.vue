<template>
	<div class="header-wrap">
		<div class="header-tips">This site is no longer updated.</div>
		<ul class="header-content">
			<li class="header-icon" @click="goLinkHandle('docs')">
				<img :src="icon" />
				<span>React</span>
			</li>
			<template v-for="(item,index) in menuList" :key="index">
				<li class="header-li" :class="{'header-li-current':currentPath==item.path}"
					@click="goLinkHandle(item.type)">{{item.name}}</li>
			</template>

		</ul>
	</div>
	<div id="dragIcon"></div>
</template>

<script setup>
	import dragIcon from "miao-drag";
	import {
		watch,
		ref,
		reactive,
		onMounted
	} from 'vue';
	import {
		useRoute,
		useRouter
	} from 'vue-router';
	const icon = ref(
		'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
	)

	const currentPath = ref('');
	const route = useRoute();
	watch(route, (params) => {
		currentPath.value = params.path;
	}, {
		deep: true,
		immediate: true
	})

	onMounted(() => {
		console.log("[onMounted]")
		setDragIcon();
	});


	const menuList = reactive([{
		id: 1,
		name: 'Docs',
		path: '/docs',
		type: 'docs'
	}, {
		id: 2,
		name: 'Tutorial',
		path: '/tutorial',
		type: 'tutorial'
	}, {
		id: 3,
		name: 'Blog',
		path: '/blog',
		type: 'blog'
	}, {
		id: 4,
		name: 'Community',
		path: '/community',
		type: 'community'
	}, {
		id: 5,
		name: 'About',
		path: '/about',
		type: 'about'
	}, {
		id: 5,
		name: 'TypeScript 教程',
		path: '/ts',
		type: 'ts'
	}])


	//进行页面跳转
	const router = useRouter();

	function goLinkHandle(type) {
		if (type == 'docs') {
			router.push({
				path: '/docs'
			})
		} else if (type == 'tutorial') {
			router.push({
				path: '/tutorial'
			})
		} else if (type == 'blog') {
			router.push({
				path: '/blog'
			})
		} else if (type == 'community') {
			router.push({
				path: '/community'
			})
		} else if (type == 'about') {
			router.push({
				path: '/about'
			})
		} else if (type == 'ts') {
			router.push({
				path: '/ts'
			})
		}
	}


	function setDragIcon() {
		const clientHeight = document.documentElement.clientHeight;
		const clientWidth = document.documentElement.clientWidth;
		new dragIcon({
			el: '#dragIcon',
			top: ((clientHeight / 2) - 50) + 'px',
			left: (clientWidth - 250) + 'px',
			onClick: () => {
				console.log("我是点击事件")
			}
		});
	}
</script>

<style lang="scss" scoped>
	.header-wrap {
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: rgb(22, 24, 29);

		.header-tips {
			width: 100%;
			max-width: 1200px;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			font-size: 18px;
			font-weight: bold;
			color: #ffffff;
			margin: 12px auto;
		}

		.header-content {
			width: 100%;
			max-width: 1200px;
			display: flex;
			flex-direction: row;
			margin: 12px auto;
			align-items: center;

			.header-icon {
				height: auto;
				display: flex;
				flex-direction: row;
				color: #61dafb;
				align-items: center;
				justify-content: center;
				margin-right: 100px;
				cursor: pointer;

				img {
					width: 40px;
					height: 40px;
				}

				span {
					font-weight: 700;
					font-size: 20px;
					margin-left: 12px;
				}
			}

			.header-li {
				height: 40px;
				position: relative;
				font-size: 18px;
				color: #ffffff;
				padding-left: 15px;
				padding-right: 15px;
				cursor: pointer;
			}

			.header-li-current {
				color: #61dafb;
			}

			.header-li-current::after {
				content: " ";
				height: 3px;
				position: absolute;
				width: 100%;
				left: 50%;
				transform: translate(-50%);
				bottom: 0px;
				background-color: #61dafb;
				animation: identifier 1s ease;
			}

			@keyframes identifier {
				0% {
					width: 0%;
				}

				100% {
					width: 100%;
				}
			}
		}
	}

	#dragIcon {
		border: 1px solid #00a2ef;
		border-radius: 8px;
		width: 100px;
		height: 100px;
		position: fixed;
		cursor: pointer;
		z-index: 999;
	}
</style>