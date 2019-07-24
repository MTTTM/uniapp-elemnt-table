<template>
	<view class="example">
		<view class="title">自定义列宽度</view>
		<v-table :columns="columns" :list="data"></v-table>
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
				data: [{
						name: 'John Brown',
						age: 18,
						address: 'New York No. 1 Lake Park',
						id: "1",
						
					},
					{
						name: 'Jim Green',
						age: 25,
						address: 'London No. 1 Lake Park',
						id: "2"
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
						id: "4"
					},
					{
						name: 'Jon Snow',
						age: 26,
						address: 'Ottawa No. 2 Lake Park',
						id: "5"
					},
				
					{
						name: 'Jon Snow',
						age: 26,
						address: 'Ottawa No. 2 Lake Park',
						id: "6"
					},
					{
						name: 'Jon Snow',
						age: 26,
						address: 'Ottawa No. 2 Lake Park',
						id: "7"
					},
					{
						name: 'Jon Snow',
						age: 26,
						address: 'Ottawa No. 2 Lake Park',
						id: "8"
					},
					{
						name: 'Jon Snow',
						age: 26,
						address: 'Ottawa No. 2 Lake Park',
						id: "9"
					}
				],
				columns: [{
						title: "ID",
						key: "id",
						$width:"80px"
					},
					{
						title: 'Name',
						key: 'name',
						$width:"120px"
					},
					{
						title: 'Age',
						key: 'age',
						$width:"60px"
					},
					{
						title: 'Address',
						key: 'address',
						$width:"130px"
					}
				],
			}
		}
		
	}
</script>

<style>
</style>
