<template>
	<view class="example">
		<view class="title">加载数据<text style="color:blue;margin-left:5px;" @click="reload">点击加载</text></view>
		<v-table :columns="columnsCheckBox" :list="data" :loading="loading"></v-table>
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
				loading:true,
				timer:false
			}
		},
		created(){
			this.loadingData();
		},
		methods:{
			reload(){
				this.loading=true;
				this.loadingData();
			},
			loadingData(){
				clearTimeout(this.timer);
				this.timer=setTimeout(()=>{
					this.data=[{
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
					];
					this.$nextTick(()=>{
						this.loading=false;
					})
				},2000)
			}
		}
		
	}
</script>

<style>
</style>
