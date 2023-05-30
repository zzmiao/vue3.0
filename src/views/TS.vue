<template>
	<div class="ping-wrap">
		<!-- header -->
		<headerComponent></headerComponent>
		<!-- container -->
		<div class="ping-container">
			<p v-my-directive:premi="['miao', 'zhen']">{{ name }}</p>
			<createH name="清太祖" :params="tempList"></createH>

			<p v-stname:pers="['ping']">你应该看到我</p>
			<p v-stname:pers="['ze']">你不应该看到我</p>
		</div>
		<!-- footer -->
		<footerComponent></footerComponent>
	</div>
</template>
<script setup>
	import headerComponent from '@/components/header.vue'
	import footerComponent from '@/components/footer.vue'
	import '@/utils/TS.ts'
	import createH from '@/utils/create.jsx'
	import {
		ref
	} from 'vue'

	const name = ref('ping')

	const tempList = [{
			name: '宋太宗',
			age: 29,
			address: '北京市海淀区'
		},
		{
			name: '汉武帝',
			age: 32,
			address: '上海市浦东新区'
		},
		{
			name: '唐太宗',
			age: 27,
			address: '河南省郑州市'
		},
		{
			name: '秦始皇',
			age: 270,
			address: '河南省郑州市'
		},
		{
			name: '',
			age: 450,
			address: '西安市'
		}
	]

	class Miao {
		constructor(firstName, lastName) {
			this._firstName = firstName
			this._lastName = lastName
		}
		get firstName() {
			return this._firstName
		}
		set firstName(value) {
			this._firstName = value
		}
		get lastName() {
			return this._lastName
		}
		set lastName(value) {
			this._lastName = value
		}
		draw() {
			return this._firstName + ' ' + this._lastName
		}
	}
	const miao = new Miao('Miao', 'zhenzhen')
	const fullName = miao.draw()
	console.log(fullName)

	const vMyDirective = (el, binding) => {
		console.log(el)
		console.log(binding)
	}

	const vStname = (el, binding) => {
		if (binding.value.includes('ze')) {
			el.parentNode.removeChild(el)
		}
	}
</script>

<style scoped lang="scss">
</style>