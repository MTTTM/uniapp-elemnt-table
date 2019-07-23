<template>
	<view class="example">
		<view class="title">跨行</view>
		<v-table :columns="columns" :list="dataRowSpan" :span-method="arraySpanMethod"></v-table>
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
				//合并行
				dataRowSpan: [{
						name: 'John Brown',
						age: 18,
						address: 'New York No. 1 Lake Park',
						id: "1",
						rowspan: 3
					},
					{
						name: 'Jim Green',
						age: 25,
						address: 'London No. 1 Lake Park',
						id: "2",
						rowspan: 0
					},
					{
						name: 'Joe Black',
						age: 30,
						address: 'Sydney No. 1 Lake Park',
						id: "3",
						rowspan: 0
					},
					{
						name: 'Jon Snow',
						age: 26,
						address: 'Ottawa No. 2 Lake Park',
						id: "4",
						rowspan: 1
					}
				],
			}
			
		},
		methods:{
			arraySpanMethod(
				row,
				column,
				rowIndex,
				columnIndex
			) {
				// console.log("合并")
				// console.log(columnIndex)
				if (columnIndex == 0) {
			
					if (row.rowspan) {
						return {
							rowspan: row.rowspan,
							colspan: 1
						};
					} else {
						return {
							rowspan: 0,
							colspan: 1
						};
					}
				}
			},
		}
		
	}
</script>

<style>
</style>
