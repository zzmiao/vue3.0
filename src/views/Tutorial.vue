<template>
	<div class="ping-wrap">
		<!-- header -->
		<headerComponent></headerComponent>
		<!-- container -->
		<div class="ping-container">
			手机号:{{ clientStore.phone }}
			<button @click="plusSalaryHandle">年龄{{ clientStore.age }}</button>
			总工资:{{ totalSal }}元
			<button @click="resetHandle">reset</button>
		</div>
		<!-- footer -->
		<footerComponent></footerComponent>
	</div>
</template>

<script setup>
	import headerComponent from '@/components/header.vue'
	import footerComponent from '@/components/footer.vue'
	import {
		useClientStore
	} from '@/stores/client'
	import {
		computed,
		ref,
		watch
	} from 'vue'

	const clientStore = useClientStore()
	console.log('[clientStore]', clientStore)
	const totalSal = ref(0)

	watch(
		() => clientStore.totalSalary,
		(value) => {
			totalSal.value = value
		}, {
			deep: true,
			immediate: true
		}
	)
	totalSal.value = computed(() => clientStore.totalSalary)

	function plusSalaryHandle() {
		console.log('[新增]')
		clientStore.$patch({
			age: 45,
			phone: '15262680856'
		})
	}

	function resetHandle() {
		clientStore.$reset()
	}
</script>

<style lang="scss" scoped>
</style>