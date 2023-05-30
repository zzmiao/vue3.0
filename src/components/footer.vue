<template>
	<div class="footer-wrap">
		<slot name="left" v-if="!isShow"></slot>
		<p>Copyright © <slot name="center"></slot> Meta Platforms, Inc.</p>
		<slot name="right" v-if="isShow"></slot>
	</div>
</template>

<script setup>
	import {
		ref,
		watch
	} from 'vue';
	const publice = ref('123');
	const isShow = ref(true)

	function init() {
		console.log("[我是footer]")
		publice.value = '456';
	}
	watch(publice, (value) => {
		console.log("[我改变了]", value, publice.value)
		isShow.value = false;
	})

	defineExpose({
		init,
		publice
	})
</script>

<style lang="scss" scoped>
	.footer-wrap {
		width: 100%;
		min-height: 100px;
		background-color: rgb(249, 249, 251);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>