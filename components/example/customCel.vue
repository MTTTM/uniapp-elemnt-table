<template>
	<view class="example">
		<view class="title">自定义某单元格样式</view>
		<v-table :columns="columns" :list="dataCusCell"></v-table>
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
				columns: [{
						title: "ID",
						key: "id"
					},
					{
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
				//自定义列样式
				dataCusCell: [{
						name: 'John Brown',
						age: 18,
						address: 'New York No. 1 Lake Park',
						id: "1",
					},
					{
						name: 'Jim Green',
						age: 25,
						address: 'London No. 1 Lake Park',
						id: "2",
						cellClassName: {
							age: 'demo-table-info-cell-age',
							address: 'demo-table-info-cell-address'
						}
					},
					{
						name: 'Joe Black',
						age: 30,
						address: 'Sydney No. 1 Lake Park',
						id: "3"
					},
					{
						name: 'Jon Snow',
						age: 26,
						address: 'Ottawa No. 2 Lake Park',
						id: "4",
						cellClassName: {
							name: 'demo-table-info-cell-name'
						}
					}
				],
			 
			}
			
		},
		methods:{
			
		}
		
	}
</script>

<style>
</style>
