<template>
	<view class="example">
		<view class="title">跨列</view>
		<v-table :columns="columns" :list="dataColSpan" :span-method="colsSpanMethod"></v-table>
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
				//列合并数据
				dataColSpan: [{
						name: 'John Brown',
						age: 18,
						address: 'New York No. 1 Lake Park',
						id: "1",
						nameCols: 2
					},
					{
						name: 'Jim Green',
						age: 25,
						address: 'London No. 1 Lake Park',
						id: "2",
						nameCols: 2
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
				]
			}
			
		},
		methods:{
			colsSpanMethod(row, column, rowIndex, columnIndex) {
				// console.log(column)
				if (column.key == 'name' && row.nameCols == 2) {
					return {
						rowspan: 1,
						colspan: 2
					};
				} else if (row.nameCols == 2 && column.key == 'age') {
					return {
						rowspan: 1,
						colspan: 0
					};
				} else {
					return {
						rowspan: 1,
						colspan: 1
					};
				}
			}
		}
		
	}
</script>

<style>
</style>
