## no-bad-table
#### 取名nobadtable，源于它看起来不是特别的糟糕
#### 这里默认大家都非常熟悉vue和uniapp的包引入，不再阐述uniapp组件引入方法以及uniapp组件和vue的区别
####  插件市场更新会比github更新延后，[查看github项目](https://github.com/MTTTM/uniapp-elemnt-table) 
####  插件市场更新会比github更新延后，[查看demo源码](https://github.com/MTTTM/uniapp-elemnt-table/tree/master/components/example)
####  插件市场更新会比github更新延后，[查看demo使用引入方式](https://github.com/MTTTM/uniapp-elemnt-table/tree/master/pages/tableDemo)
####  如果本项目给你带来了便利，请给个star

## 支持功能大概如下 
 
####  [点击查看demo,PC浏览器模拟显示和真实移动设备访问有差异](https://mtttm.github.io/async-validator-uniapp/#/pages/noBadTable/tableDemo)
####  [行合并](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/rowSpan.vue)
####  [列合并](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/celSpan.vue)
####  [固定table高度](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/fixedHeight.vue)
####  [数据加载](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/loadingTable.vue)
####  [数据为空](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/emptyRow.vue)
####  [自定义行样式](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/customRowStyle.vue)
####  [自定义某行样式](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/customRowStyleSecond.vue)
####  [自定义某行某列某个单元格样式](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/customCel.vue)
####  [使用插槽自定义单元格内容](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/customCelContent.vue)
####  [数据多选操作](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/mulitCheckbox.vue)
####  [数据单选操作](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/singleSelected.vue)
####  [数据删除&&数据编辑或者更多操作方式](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/ediData.vue)
####  [固定右边一列](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/singleFixedRight.vue)
####  [固定左边一列](https://github.com/MTTTM/uniapp-elemnt-table/blob/master/components/example/singleFixedLeft.vue)
####  固定高度不支持同时固定某一列
 
## 已测试平台 ->ios，android，wap，微信小程序
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

#### 如果作者的行为给你带来了便利，打赏入口在下面
#### 如果有需要作者协助的地方，打赏在下面

<img src="https://raw.githubusercontent.com/MTTTM/uniapp-elemnt-table/master/qishi.jpg" width="328" hegiht="613" alt="O(∩_∩)O哈哈~" />

## 基本属性
### html标签属性
|  属性   | 说明  |类型  |默认 | 必填|
|  ----   | ---- |----  |----|----|
| columns | 列数据   |Array | -- |必填|
| dataColSpan | 行数据   |Array | -- |必填|
| row-class-name | 行样式   |String或Function | -- |--|
| height | 表格高度(可用固定表头) | Number| -- |--|
| td-height | 单元格高 | Number| 110 |--|
| cel-center|单元格水平居中| Boolean|true|--|
| td-width | 单元格宽 | Number| 30 |--|
| td-padding | 单元格间距 | Number| 10 |--|
| border-color | 表格边框颜色 | String| #666 |--|
| th-td-height | 表头单元格高 | Number| 30 |--|
| loading | 加载状态| Boolean| false |--|
| selection | 可选mulit和single| String| -- |--|
| fixed-checkbox|固定多选列 和selection="mulit"共存|Boolean| false|--|
| span-method | 行列合并| Function| -- |--|
| slot-cols| 插槽自定义列元素,对应columns的key| Array| -- |--|
| emptyText| 插没数据提示文字| String| -- |--|
| emptyClickFn| 没数据点击响应函数| Function| -- |--|
### 事件

|  属性   | 说明  |参数  |
|  ----   | ---- |----  |
| @on-selection-change | 单选 多选变更   | {old:"",new:""} | 
| @delete | 自定义事件(它可以不叫delete，可以是任意事件，只要你在list里面定义了)   | {row:{},index:Number}| 

### list 参数
|  属性   | 说明|类型  |
|  ----   | ---- |---- |
| cellClassName |设置行内某一列的样式类名| Object   | 
| operate |数据操作的列| Object   | 

### columns 参数
|  属性   | 说明|类型  |
|  ----   | ---- |---- |
| $width |设置列宽度 例如 "120px",请务必使用px单位| String   | 
| $fixed |固定某一列，可选left和right| String   | 
| $operateList |数据操作选项和list的operate对应| Array   | 
