<template>
	<view>
		 		<view class="title">简单table</view>
		<v-table :columns="columns" :list="data"></v-table>
		<view class="title">固定高度的table</view>
		<v-table :columns="columns" :list="data" :height="250"></v-table>
		<!--<view class="title">自定义行样式</view>
		<v-table :columns="columns" :list="data" row-class-name="rowClassName"></v-table>
		<view class="title">自定义某行样式</view>
		<v-table :columns="columns" :list="data" :row-class-name="rowClassNameFn"></v-table>
		<view class="title">自定义某单元格样式</view>
		<v-table :columns="columns" :list="dataCusCell"></v-table>
		<view class="title">自定义列内容</view>
		<v-table :columns="columns" :list="data" :slot-cols="['name']">
			<template v-slot="{ row }">
				<view style="font-weight: blod;color:red;">{{ row.name }}</view>
			</template>
		</v-table> 
		<view class="title">数据操作 方式1</view>
		<v-table :columns="columnsOperate" :list="dataOperate" @delete="deleteFn" @edi="ediFn"></v-table>-->
		<view class="title">数据操作 多选</view>
		<v-table :columns="columnsCheckBox" :list="data" @on-selection-change="onSelectionChange"></v-table>
		<!-- 	<view class="title">跨行</view>
		<v-table :columns="columns" :list="dataRowSpan" :span-method="arraySpanMethod"></v-table>

		<view class="title">跨列</view>
		<v-table :columns="columns" :list="dataColSpan" :span-method="colsSpanMethod"></v-table> -->
	</view>

</template>

<script>
	import vTable from "@/components/table.vue";
	import vTableColumn from "@/components/table-column.vue"
	import vTableRow from "@/components/table-row.vue"
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
	export default {
		components: {
			vTable,
			vTableRow,
			vTableColumn
		},
		data() {
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
				],
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
				//选择多行，给第一行添加$type: 'selection',就可以开启多选
				columnsCheckBox: [{
						'$type': 'selection',
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
			}
		},
		methods: {
			rowClassNameFn(row, index) {
				if (index === 1) {
					return 'demo-table-info-row';
				} else if (index === 3) {
					return 'demo-table-error-row';
				}
				return '';
			},
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
			onSelectionChange(obj){
				console.log("对比前后，选中的变化")
				console.log(obj)
			},
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

<style lang="scss">
	@import "@/common/style/table.scss";

	.title {
		line-height: 40px;
		font-weight: bold;
	}
</style>
