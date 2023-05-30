<template>
	<div>
		<p>{{message}}</p>
	</div>
</template>

<script>
	export default {
		props: {
			message: {
				type: String,
				default: () => {
					return "消息"
				}
			}
		},
		setup(props) {
			console.log("[props]", props)


			console.log("[this]", props.message)
			return {

			}
		}
	}
</script>

<style>
</style>