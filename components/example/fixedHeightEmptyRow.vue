<template>
	<view class="example">
		<view class="title">固定高度---数据为空</view>
		<v-table :columns="columnsCheckBox" :list="data" :height="250"></v-table>
	</view>
</template>

<script>
	import vTable from "@/components/table.vue"
	export default{
		components: {
			vTable
		},
		data(){
			return {
				columnsCheckBox: [{
						title: 'Name',
						key: 'name'
					},
					{
						title: 'Age',
						key: 'age'
					},
					{
						title: 'Address',
						key: 'address'
					}
				],
				data: [],
			}
		}
		
	}
</script>

<style>
</style>
