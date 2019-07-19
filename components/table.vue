<template>
	<view class="content">
		<view class="table_box_big">
			<view class="table_box">
				<view class="div-table div-table-head">
					<view class="thead">
						<view class="tr">
							<view class="td" v-for="item in columns" :key="item.key">
								<view class="td_wrap">{{item.title}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="table_tbody_box">
					<view class="div-table">
						<template v-for="(item,index) in list">
							<view  :class='["tr",rowClassNamePlus(item,index)]'  :key="item.id">
								<template  v-for="(tdItem,tdItemIndex) in columns">
									<view class="td" 
									
									:class='[
										item.cellClassName&&item.cellClassName[tdItem.key]?item.cellClassName[tdItem.key]:"",
										spanMethod(item,tdItem,index,tdItemIndex)["rowspan"]==0?"empty-cells":"",
										spanMethod(item,tdItem,index,tdItemIndex)["colspan"]==0?"empty-cells":"",
										spanMethod(item,tdItem,index,tdItemIndex)["rowspan"]>1?"rowspan":"",
										spanMethod(item,tdItem,index,tdItemIndex)["colspan"]>1?"colspan":""]'
										
										 :key="tdItem.key">
										<view :class="['td_wrap']" :style='{height:item.rowspan*160+"upx"}'>
											<slot :row='item' v-if="slotCols.indexOf(tdItem.key)>-1"></slot>
											<template v-if="tdItem.$operateList">
												<template v-for="btn in tdItem.$operateList">
													<button :class="[btn.styles?btn.styles:'']" v-bind:style="{ padding: '2px 5px',fontSize:'12px',lineHeight:'1.2',display:'inline-block'}" @click="pullEvent(btn.event,{row:item,index:index})" type="primary" size="min"  :key="btn.id">{{btn.label}}</button>	 
												</template>
											</template>
											<template v-else>{{item[tdItem.key]}}</template>
										</view>
									</view>
								</template>
							</view>
						</template>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

	import Event from "@/common/tools/watcher.js"
	import tableRow from "@/components/table-row.vue"
	export default {
		components: {
			tableRow
		},
		props: {
			columns: {
				type: Array,
				required: true
			},
			list: {
				type: Array,
				required: true
			},
			rowClassName:{
				type:[String,Function],
				default:""
			},
			'slot-cols':{
				type:Array,
				default:()=>{
					return []
				}
			},
			"span-method":{
				type:Function,
				default:()=>{
					return ()=>{
						return {
							rowspan:1,
							colspan:1
						}
					}
				}
			},
			"td-width": {
				type: Number,
				default: 220
			},
			"td-height": {
				type: Number,
				default: 160
			},
			"td-padding": {
				type: Number,
				default: 10
			},
			"border-color": {
				type: String,
				default: "#666"
			}
		},

		created() {
			console.log(this.spanMethod)

		},
		methods:{
			rowClassNamePlus(row,index){
				if(typeof this.rowClassName==="string"){
						return this.rowClassName;
				}
				else if(typeof this.rowClassName==="function"){
					return this.rowClassName(row,index);
				}
			},
			pullEvent(event,data){
					console.log("触发时间")
					console.log(event)
					console.log(data)
					this.$emit(event,data);
			}
		}
	}
</script>

<style lang="scss">
@import "../common/style/table.scss";
</style>
