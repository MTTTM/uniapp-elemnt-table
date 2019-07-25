## no-bad-table
### 取名nobadtable，源于它看起来不是特别的糟糕
### 这里默认大家都非常熟悉vue和uniapp的包引入，不再阐述uniapp组件引入方法以及uniapp组件和vue的区别
## 支持功能大概如下
###  [行合并](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/rowSpan.vue)
###  [列合并](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/celSpan.vue)
###  [固定table高度](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/fixedHeight.vue)
###  [数据加载](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/loadingTable.vue)
###  [数据为空](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/emptyRow.vue)
###  [自定义行样式](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/customRowStyle.vue)
###  [自定义某行样式](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/customRowStyleSecond.vue)
###  [自定义某行某列某个单元格样式](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/customCel.vue)
###  [使用插槽自定义单元格内容](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/customCelContent.vue)
###  [数据多选操作](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/mulitCheckbox.vue)
###  [数据单选操作](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/singleSelected.vue)
###  [数据删除&&数据编辑或者更多操作方式](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/ediData.vue)

## 已测试平台
## 
### ios，android，wap，微信小程序

## 基本使用示例源码

### html
### 
```html
    <v-table :columns="columns" :list="data"></v-table>
```

### javascript (data数组必须提供id)

```javascript
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
						
					}
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
			}
		}
		
	}
```

## 赞助我买咖啡
### 如果作者的行为给你带来了便利，打赏入口在下面
### 如果有需要作者协助的地方，打赏在下面
![avatar](./qishi.jpg)