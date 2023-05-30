<template>
	<div class="ping-wrap">
		<!-- header -->
		<headerComponent></headerComponent>
		<!-- container -->
		<div class="ping-container">
			<div id="reload">刷新页面</div>
			<div id="btn">按钮</div>

			<input v-model="tempList.name" />
			<input v-model="tempList.age" />
			<input v-model="tempList.wife" />
			<p>单价：</p>
			<input v-model="price" />
			<p>数量:</p>
			<input v-model="count" />
			<p>总价:</p>
			{{ total }}

			x:{{ coordinate.x }}-y:{{ coordinate.y }}
		</div>
		<!-- footer -->
		<footerComponent ref="footerRef">
			<template v-slot:left>
				<div>
					<p>朱元璋</p>
					<p>马皇后</p>
				</div>
			</template>
			<template #center> 2023 </template>
			<template #right>
				<div>
					<p>杨坚</p>
					<p>独孤皇后</p>
				</div>
			</template>
		</footerComponent>
	</div>
</template>

<script setup>
	import {
		onBeforeMount,
		onMounted,
		onBeforeUnmount,
		onUnmounted,
		ref,
		reactive,
		watch,
		watchEffect,
		computed,
		getCurrentInstance
	} from 'vue'
	import headerComponent from '@/components/header.vue'
	import footerComponent from '@/components/footer.vue'

	const footerRef = ref(null)

	const tempList = reactive({
		name: '杨坚',
		age: 29,
		wife: '独孤皇后'
	})

	const coordinate = reactive({
		x: 0,
		y: 0
	})

	watch(
		tempList,
		(value) => {
			console.log('[监听1]', value)
		}, {
			deep: true
		}
	)
	watch(
		() => tempList.age,
		(value) => {
			console.log('[监听]', value)
		}
	)

	watchEffect(() => {
		console.log('[]', tempList.name)
		console.log('[]', tempList.age)
		console.log('[你执行了我]')
	})

	const price = ref(100)
	const count = ref(1)
	watch(count, (newCount, oldCount) => {
		console.log('[数量]', newCount, oldCount)
	})
	const total = computed(() => {
		return price.value * count.value
	})

	onBeforeMount(() => {
		console.log('[onBeforeMount]')
	})
	onMounted(() => {
		console.log('[onMounted]', tempList.name)
		document.querySelector('#btn').addEventListener('click', handleClick)
		document.querySelector('#btn').style.color = 'red'

		document.querySelector("#reload").addEventListener("click", handleReload)
	})

	window.addEventListener('mousemove', (e) => {
		coordinate.x = e.clientX
		coordinate.y = e.clientY
	})

	onBeforeUnmount(() => {
		console.log('[onBeforeUnmount]')
	})
	onUnmounted(() => {
		console.log('[onUnmounted]')
	})

	const {
		appContext
	} = getCurrentInstance()

	function handleClick() {
		footerRef.value.init()
		console.log('[footer]', footerRef.value.publice)
	}

	function handleReload() {
		appContext.config.reload()
	}
	//vue3.0中的自定义指令
	const vMyDirective = (el, binding) => {
		console.log(el)
		console.log(binding)
	}
</script>

<style lang="scss" scoped>
</style>