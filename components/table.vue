<template>
	<view class="content" :class="[tableHeight!='auto'?'fix-height':'']">
		<view class="table_box_big" :style='{height:tableHeight}'>
			<view class="table_box">
				<view class="div-table div-table-head">
					<view class="thead">
						<view class="tr">
							<view class="td selection" v-if="selection=='mulit'" :style='{width:selectionTdWidth,height:thTdHeight+"px"}'>
								<view :class="['td_wrap']" :style='{width:selectionTdWidth,height:thTdHeight+"px"}'>
									<checkbox-group @change="checkboxChangeAll">
										<checkbox value="all" :checked="switchAllCheckBox" style="transform:scale(0.7)" />
									</checkbox-group>
								</view>
							</view>
							<view class="td" :style='{width:tdWidth+"px",height:thTdHeight+"px"}' v-for="(item,index) in columns" :key="item.key">
								<view class="td_wrap" :style='{width:index>0?(tdWidth-1)+"px":tdWidth+"px",height:thTdHeight+"px"}'>{{item.title}}</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 有数据情况 -->
				<template v-if="list.length">
					<view class="table_tbody_box" :style='{height:talbeBodyHeight}'>
						<view class="div-table div-table-body">
							<checkbox-group @change="checkboxChange">
								<template v-for="(item,index) in list">
									<view :class='["tr",rowClassNamePlus(item,index),
								selection=="single"&&checkBoxList[index].$checked?"selected":"",
								selection=="single"&&checkBoxList[index].$disabled?"disabled":""]'
									 @click="selectRow(item,index)" :key="item.id">
										<!-- 多选操作 -->
										<view class="td selection" v-if="selection=='mulit'" :style='{width:selectionTdWidth,height:tdHeight+"px"}'>
											<view :class="['td_wrap']" :style='{width:selectionTdWidth,height:tdHeight+"px"}'>
												<checkbox :value="checkBoxList[index].id" :disabled="checkBoxList[index].$disabled" :checked="checkBoxList[index].$checked"
												 style="transform:scale(0.7)" />
											</view>
										</view>
										<template v-for="(tdItem,tdItemIndex) in columns">
											<view class="td" :class='[
											item.cellClassName&&item.cellClassName[tdItem.key]?item.cellClassName[tdItem.key]:"",
											spanMethod(item,tdItem,index,tdItemIndex)["rowspan"]==0?"empty-cells-for-rowspan":"",
											spanMethod(item,tdItem,index,tdItemIndex)["colspan"]==0?"empty-cells-for-celspan":"",
											spanMethod(item,tdItem,index,tdItemIndex)["rowspan"]>1?"rowspan":"",
											spanMethod(item,tdItem,index,tdItemIndex)["colspan"]>1?"colspan":""]'
											 :style='{height:countRowspanHeight(item,tdItem,index,tdItemIndex),
											width:countColspanWidth(item,tdItem,index,tdItemIndex)}'
											 :key="tdItem.key">
												<view :class="['td_wrap']" :style='{height:countRowspanHeight(item,tdItem,index,tdItemIndex),
											 width: countColspanWidth(item,tdItem,index,tdItemIndex,true)}'>
													<slot :row='item' v-if="slotCols.indexOf(tdItem.key)>-1"></slot>
													<template v-if="tdItem.$operateList">
														<template v-for="btn in tdItem.$operateList">
															<button :class="[btn.styles?btn.styles:'']" v-bind:style="{ padding: '2px 5px',fontSize:'12px',lineHeight:'1.2',display:'inline-block'}"
															 @click="pullEvent(btn.event,{row:item,index:index})" type="primary" size="min" :key="btn.id">{{btn.label}}</button>
														</template>
													</template>
													<template v-else>{{item[tdItem.key]}} </template>
												</view>
											</view>
										</template>
									</view>
								</template>
							</checkbox-group>

						</view>
					</view>
				</template>
				<template v-else>
					<view class="table_tbody_box empty-data-body-box div-table-body" :style='{height:talbeBodyHeight,width:emptyColWidth}'>
						<view class="tr " :style='{height:talbeBodyHeight,width:emptyColWidth}'>
							<view class="td" :style='{height:emptyColHeight,width:emptyColWidth}'>
								<view :class="['td_wrap']" :style='{height:parseInt(emptyColHeight-2)+"px",width:emptyColWidth,lineHeight:parseInt(emptyColHeight-2)+"px"}'>
									{{emptyText}}
								</view>
							</view>
						</view>
					</view>
				</template>
			</view>
		</view>
		<loading-component v-if="loading"/>
	</view>
</template>

<script>
	import loadingComponent from "./loading.vue"
	export default {
		components:{loadingComponent},
		props: {
			columns: {
				type: Array,
				required: true
			},
			list: {
				type: Array,
				required: true
			},
			rowClassName: {
				type: [String, Function],
				default: ""
			},
			'slot-cols': {
				type: Array,
				default: () => {
					return []
				}
			},
			"span-method": {
				type: Function,
				default: () => {
					return () => {
						return {
							rowspan: 1,
							colspan: 1
						}
					}
				}
			},
			//是否可选  mulit=>多选   single=》单选
			selection: {
				type: String,
				default: "none"
			},
			loading:{
				type:Boolean,
				default:false
			},
			height: {
				type: Number,
				default: undefined
			},
			"td-width": {
				type: Number,
				default: 110
			},
			"td-height": {
				type: Number,
				default: 30
			},
			"th-td-height":{
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
			},
			"emptyText":{
				type:String,
				default:"数据为空"
			}
		},
		computed: {
			tableHeight() {
				return Number(this.height) && Number(this.height) > this.tdHeight * 3 ? this.height + "px" : "auto";
			},
			talbeBodyHeight() {
				let t = this.tableHeight !== "auto" ? (parseInt(this.tableHeight) - this.tdHeight - 1) + "px" : "auto";
				return t;
			},
			allCheckBoxAbledLen() {
				return this.checkBoxList.filter(item => !item.$disabled).length;
			},
			emptyColHeight() {
				return this.height?(this.height- this.thTdHeight)+'px':"100px";
			},
			emptyColWidth(){
				let t=(this.tdWidth*this.columns.length)+"px";
				return t;
			}
		},
		data() {
			return {
				checkBoxList: [],
				switchAllCheckBox: false,
				selectionTdWidth: "50px",
				singleSelect: {}
			}
		},
		watch: {
			"list"() {
				this.asyncCheckBoxList();
			}
		},
		created() {
			this.asyncCheckBoxList();
		},
		methods: {
			asyncCheckBoxList() {
				this.checkBoxList = this.list.map(item => {
					return { ...item
					};
				});
			},
			rowClassNamePlus(row, index) {
				if (typeof this.rowClassName === "string") {
					return this.rowClassName;
				} else if (typeof this.rowClassName === "function") {
					return this.rowClassName(row, index);
				}
			},
			pullEvent(event, data) {
				this.$emit(event, data);
			},
			/**
			 * iswrap  是否是内容容器
			 */
			countColspanWidth(item, tdItem, index, tdItemIndex,iswrap=false) {
				let borderLeft=iswrap&&tdItemIndex>0?1:0;
				let t=this.spanMethod(item, tdItem, index, tdItemIndex) && this.spanMethod(item, tdItem, index, tdItemIndex)[
						"colspan"] > 1 ? (this.spanMethod(item, tdItem, index, tdItemIndex)["colspan"] * this.tdWidth)-borderLeft + "px" : (this.tdWidth-borderLeft) +
					"px";
					return t;

			},
			countRowspanHeight(item, tdItem, index, tdItemIndex) {
				return this.spanMethod(item, tdItem, index, tdItemIndex) && this.spanMethod(item, tdItem, index, tdItemIndex)[
						"rowspan"] > 1 ? (this.spanMethod(item, tdItem, index, tdItemIndex)["rowspan"] * this.tdHeight) + "px" : this.tdHeight +
					"px"
			},
			selectRow(item, index) {
				if (item.$disabled) {
					return;
				}
				this.checkBoxList = this.checkBoxList.map((sitem, sindex) => {
					if (index === sindex) {
						sitem.$checked = true
					} else {
						sitem.$checked = false;
					}
					return sitem;
				});
				if (this.selection) {
					this.$emit("on-selection-change", {
						old: this.singleSelect,
						new: {
							index,
							item
						}
					})
				}
				this.singleSelect = {
					index,
					item
				};

			},
			checkboxChange(e) {
				let val = e.detail.value;
				let before = [];
				for (let v = 0; v < this.allCheckBoxAbledLen; v++) {
					if (this.checkBoxList[v].$checked === true) {
						before.push({ ...this.checkBoxList[v]
						});
					}
				}
				if (val.length == this.allCheckBoxAbledLen) {
					this.switchAllCheckBox = true;
					this.checkBoxList = this.checkBoxList.map(item => {
						if (!item.$disabled) {
							item.$checked = true
						}
						return item;
					});
				} else {
					this.switchAllCheckBox = false;
					this.checkBoxList = this.checkBoxList.map(item => {
						if (val.indexOf(item.id) > -1) {
							item.$checked = true
						} else {
							item.$checked = false;
						}
						return item;
					});
				}
				this.$emit("on-selection-change", {
					old: before,
					new: this.checkBoxList.filter(item => item.$checked === true)
				})
			},
			checkboxChangeAll(e) {
				let val = e.detail.value;
				let before = [];
				for (let v = 0; v < this.allCheckBoxAbledLen; v++) {
					if (this.checkBoxList[v].$checked === true) {
						before.push({ ...this.checkBoxList[v]
						});
					}
				}
				if (val && val[0] == "all") {
					this.switchAllCheckBox = true;
					this.checkBoxList = this.checkBoxList.map(item => {
						if (!item.$disabled) {
							item.$checked = true
						}
						return item;
					});
				} else {
					this.switchAllCheckBox = false;
					this.checkBoxList = this.checkBoxList.map(item => {
						item.$checked = false
						return item;
					});
				}
				this.$emit("on-selection-change", {
					old: before,
					new: this.checkBoxList.filter(item => item.$checked === true)
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../common/style/table.scss";
</style>
