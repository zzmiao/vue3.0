import {
	h,
	defineComponent
} from "vue";

const clientComponent = defineComponent({
	name: "clientComponent",
	props: {

	},
	setup() {
		console.log("[我是组件-defineComponent]")
	},
	render() {
		return h('div', '我是组件')
	}
})

export default clientComponent;