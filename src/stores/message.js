import {
	defineStore
} from "pinia";
import {
	computed,
	ref
} from "vue";

export const useMessageStore = defineStore("message", () => {
	const title = ref("标题");
	const content = ref("内容");
	const count = ref(0);

	const totalCount = computed(() => {
		return count.value * 12
	})

	function setCount(params) {
		console.log("[]", params)
		count.value = params
	}
	

	return {
		title,
		content,
		totalCount,
		setCount
	}
})