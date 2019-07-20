<template>
	<view class="content">
		<view class="table_box_big">
			<view class="table_box">
				<view class="div-table div-table-head">
					<view class="thead">
						<view class="tr">
							<view class="td" :style='{width:tdWidth+"px",height:tdHeight+"px"}' v-for="item in columns" :key="item.key">
								<view class="td_wrap" :style='{width:tdWidth+"px",height:tdHeight+"px"}'>{{item.title}}</view>
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
										spanMethod(item,tdItem,index,tdItemIndex)["rowspan"]==0?"empty-cells-for-rowspan":"",
										spanMethod(item,tdItem,index,tdItemIndex)["colspan"]==0?"empty-cells-for-celspan":"",
										spanMethod(item,tdItem,index,tdItemIndex)["rowspan"]>1?"rowspan":"",
										spanMethod(item,tdItem,index,tdItemIndex)["colspan"]>1?"colspan":""]'
										:style='{height:countRowspanHeight(item,tdItem,index,tdItemIndex),
										width:countColspanWidth(item,tdItem,index,tdItemIndex)}'
										 :key="tdItem.key">
										<view :class="['td_wrap']" 
										:style='{height:countRowspanHeight(item,tdItem,index,tdItemIndex),
										 width:countColspanWidth(item,tdItem,index,tdItemIndex)}'>
											<slot :row='item' v-if="slotCols.indexOf(tdItem.key)>-1"></slot>
											<template v-if="tdItem.$operateList">
												<template v-for="btn in tdItem.$operateList">
													<button :class="[btn.styles?btn.styles:'']" v-bind:style="{ padding: '2px 5px',fontSize:'12px',lineHeight:'1.2',display:'inline-block'}" @click="pullEvent(btn.event,{row:item,index:index})" type="primary" size="min"  :key="btn.id">{{btn.label}}</button>	 
												</template>
											</template>
											<template v-else>{{item[tdItem.key]}} </template>
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
				default: 110
			},
			"td-height": {
				type: Number,
				default: 30
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
			console.log(this.tdHeight)

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
					this.$emit(event,data);
			},
			countColspanWidth(item,tdItem,index,tdItemIndex){
				return this.spanMethod(item,tdItem,index,tdItemIndex)&&this.spanMethod(item,tdItem,index,tdItemIndex)["colspan"]>1?(this.spanMethod(item,tdItem,index,tdItemIndex)["colspan"]*this.tdWidth)+"px":this.tdWidth+"px";
				         
			},
			countRowspanHeight(item,tdItem,index,tdItemIndex){
				return this.spanMethod(item,tdItem,index,tdItemIndex)&&this.spanMethod(item,tdItem,index,tdItemIndex)["rowspan"]>1?(this.spanMethod(item,tdItem,index,tdItemIndex)["rowspan"]*this.tdHeight)+"px":this.tdHeight+"px"
			}
		}
	}
</script>

<style lang="scss">
@import "../common/style/table.scss";
</style>
