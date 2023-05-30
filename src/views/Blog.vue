<template>
	<div class="ping-wrap">
		<!-- header -->
		<headerComponent></headerComponent>
		<!-- container -->
		<div class="ping-container">

			<p>标题:{{messageStore.title}}</p>
			<p>内容:{{messageStore.content}}</p>
			<p>总数量:{{messageStore.totalCount}}</p>
			<button @click="changeCountHandle">改变数量</button>
		</div>
		<!-- footer -->
		<footerComponent></footerComponent>
	</div>
</template>

<script setup>
	import headerComponent from "@/components/header.vue"
	import footerComponent from "@/components/footer.vue"
	import {
		useMessageStore
	} from "@/stores/message.js";

	const messageStore = useMessageStore();
	console.log("[messageStore]", messageStore);

	function changeCountHandle() {
		console.log("[改变]")
		messageStore.setCount(12)
	}
</script>

<style lang="scss" scoped>
</style>