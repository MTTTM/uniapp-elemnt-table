<template>
	<view class="example">
		<view class="title">数据删除&&编辑操作</view>
		<v-table :columns="columnsOperate" :list="dataOperate" @delete="deleteFn" @edi="ediFn"></v-table>
	</view>
</template>

<script>
	import vTable from "@/components/table.vue"
		const operateCol = {
		operate: {
			delete: {
				label: "删除",
				fn(row, index) {
					// this.alertFnCallback(row,index);
				}
			},
			edi: {
				label: "编辑",
				fn(row, index) {
					//this.alertFnCallback(row,index);
				}
			}
		}
	}
	export default{
		components: {
			vTable
		},
		data(){
			return {
				columnsOperate: [{
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
					},
					{
						title: "operate",
						key: "$operate",
						$operateList: [{
								label: "删除",
								event: "delete",
								id: "delete",
								styles: 'btn-delete'
							},
							{
								label: "编辑",
								event: "edi",
								id: "edi"
							}
						]
					}
				],
				//自定义操作列
				dataOperate: [{
						name: 'John Brown',
						age: 18,
						address: 'New York No. 1 Lake Park',
						id: "1",
						...operateCol
					},
					{
						name: 'Jim Green',
						age: 25,
						address: 'London No. 1 Lake Park',
						id: "2",
						...operateCol
					},
					{
						name: 'Joe Black',
						age: 30,
						address: 'Sydney No. 1 Lake Park',
						id: "3",
						...operateCol
					},
					{
						name: 'Jon Snow',
						age: 26,
						address: 'Ottawa No. 2 Lake Park',
						id: "4",
						...operateCol
					}
				],
			 
			}
			
		},
		methods:{
				deleteFn(data) {
				uni.showToast({
					title: `删除第${data.index}行`,
					duration: 800
				});
			},
			ediFn(data) {
				uni.showToast({
					title: `编辑第${data.index}行`,
					duration: 800
				});
			},
		}
		
	}
</script>

<style>
</style>
