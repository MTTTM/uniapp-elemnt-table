<template>
	<view>
       {{value}}
	</view>
</template>

<script>
	import Event from "@/common/tools/watcher.js"
	export default {
		props:{
			width:{
				type:String,
				default:""
			},
			label:{
				type:String,
				default:""
			},
			prop:{
				type:String,
				default:""
			}
		},
		data() {
			return {
				tableAttr:{},
				value:""
			};
		},
		created() {
			//先订阅，在发布
			Event.$on("column-pull-table-attr", (e) => {
				// console.log("获得属性")
				// console.log(e)
				this.tableAttr=Object.assign({},this.tableAttr,e);
			});
			Event.$emit("column-get-table-attr","column-pull-table-attr");
			console.log(this,this.width,this.label,this.prop)
			//获取该列的属性
			Event.$on("column-pull-row-data",(e)=>{
				console.log("获取到行消息")
				console.log(e)
				this.value=e[this.prop]
			});
			Event.$emit("row-get-column-value","column-pull-row-data");
			
		}
	}
</script>

<style>

</style>
