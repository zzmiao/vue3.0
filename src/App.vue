<template>
	<RouterView v-if="isRouterAlive" />
</template>

<script setup>
	import {
		ref,
		watch,
		getCurrentInstance,
		nextTick
	} from 'vue';

	import {
		RouterView,
		useRoute
	} from 'vue-router';
	const {
		appContext
	} = getCurrentInstance();

	/**
	 * 监听路由是否变化
	 * **/
	const route = useRoute();
	watch(route, (params) => {
		
	}, {
		deep: true,
		immediate: true
	})

	const isRouterAlive = ref(true);
	appContext.config.reload = () => {
		console.log("[萍萍]")
		isRouterAlive.value = false;
		nextTick(() => {
			isRouterAlive.value = true;
		})
	}
	watch(isRouterAlive, (value) => {
		console.log("[监听变化]", value)
	})

	watch(() => appContext.config.globalProperties.isRouterAlive, (value) => {
		console.log("[振-萍]", value)
	}, {
		deep: true,
		immediate: true
	})
</script>

<style lang="scss">
</style>