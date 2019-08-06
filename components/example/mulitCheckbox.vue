<template>
	<view class="example">
		<view class="title">数据操作 多选</view>
		<v-table :columns="columnsCheckBox" :fixed-checkbox="fixedCheckBox" :list="data" selection="mulit"  @on-selection-change="onSelectionChange"></v-table>
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
				fixedCheckBox:true,//可选false，非必填
				//选择多行，给第一行添加$type: 'selection',就可以开启多选
				columnsCheckBox: [
					{
							title: 'ID',
							key: 'id'
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
				data: [
					{
						name: 'John Brown',
						age: 18,
						address: 'New York No. 1 Lake Park',
						id: "1",
						$checked:true
						
					},
					{
						name: 'Jim Green',
						age: 25,
						address: 'London No. 1 Lake Park',
						id: "2",
						$disabled:true
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
			}
		},
		methods:{
			onSelectionChange(obj){
				console.log("对比前后，选中的变化")
				console.log(obj)
			}
		}
		
	}
</script>

<style>
</style>
