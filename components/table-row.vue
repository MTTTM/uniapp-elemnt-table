<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
	import Event from "@/common/tools/watcher.js"
	export default {
		props:{
			item:{
				type:Object,
				 required:true
			}
		},
		data() {
			return {
				
			};
		},
		created() {
			Event.$on("row-get-column-value", (e) => {
				console.log("行-行消息")
				 console.log(this.item)
				Event.$emit(e, this.item);
			});
		}
	}
</script>

<style>

</style>
