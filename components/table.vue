<template>
	<view class="no-bad-table-wrap" :class="[tableHeight!='auto'?'fix-height':'',celCenter?'td-center':'']">
		<view class="table_box_big" :style='{height:tableHeight}'>
	
			<view class="table_box">
				<!-- 头部内容 【-->
				<view class="div-table div-table-head">
					<view class="thead">
						<view class="tr">
							<view class="td selection" v-if="selection=='mulit'" :style='{width:selectionTdWidth,height:thTdHeight+"px"}'>
								<view :class="['td_wrap']" :style='{width:selectionTdWidth,height:thTdHeight+"px"}'>
									<checkbox-group @change="checkboxChangeAll">
										<checkbox value="all" color="#999" :checked="switchAllCheckBox" style="transform:scale(0.7)" />
									</checkbox-group>
								</view>
							</view>
							<view class="td" :style='{width:countHeadColspanWidth(item,index),height:thTdHeight+"px"}' v-for="(item,index) in columns" :key="item.key">
								<view class="td_wrap" :style='{width:countHeadColspanWidth(item,index,true),height:thTdHeight+"px"}'>{{item.title}}</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 头部内容 】-->
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
												<checkbox :value="checkBoxList[index].id" color="#999"  :disabled="checkBoxList[index].$disabled" :checked="checkBoxList[index].$checked"
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
					<view class="table_tbody_box empty-data-body-box div-table-body" :style='{height:emptyColHeight,width:emptyColWidth}'>
						<view class="tr " :style='{height:emptyColHeight,width:emptyColWidth}'>
							<view class="td" :style='{height:emptyColHeight,width:emptyColWidth}'>
								<view :class="['td_wrap']" :style='{height:parseInt(emptyColHeight-2)+"px",width:emptyColWidth,lineHeight:parseInt(emptyColHeight-2)+"px"}'>
									<text @click="emptyClickCallBack">{{emptyText}}</text>
								</view>
							</view>
						</view>
					</view>
				</template>
				<template v-if="list.length">
					<!-- 固定左边一列 【-->
					<view class="fixed-left" v-if="columnsFixedLeft[0]||(selection=='mulit'&&fixedCheckbox)">
						<view class="tr fixed-thead-tr">
						<!-- 	多选且固定左边 【-->
							<view class="td selection" v-if="selection=='mulit'&&fixedCheckbox" :style='{width:selectionTdWidth,height:thTdHeight+"px"}'>
								<view :class="['td_wrap']" :style='{width:selectionTdWidth,height:thTdHeight+"px"}'>
									<checkbox-group @change="checkboxChangeAll">
										<checkbox value="all" color="#999" :checked="switchAllCheckBox" style="transform:scale(0.7)" />
									</checkbox-group>
								</view>
							</view>
							<!-- 	多选且固定左边 】-->
							<!-- 普通固定左边 【-->
							<view class="td" v-if="columnsFixedLeft[0]" :style='{height:fixedHeight(columnsFixedLeft[0]),width:fixedWidth(columnsFixedLeft)}'>
								<view class="td_wrap" :style='{height:fixedHeight(columnsFixedLeft[0]),width:fixedWidth(columnsFixedLeft)}'>
									{{columnsFixedLeft[0].title}}
								</view>
							</view>
								<!-- 普通固定左边 】-->
						</view>
						<view  v-for="(item,index) in list" :key="item.id"
							:class='["tr",
							  selection=="single"&&checkBoxList[index].$checked?"selected":"",
							  selection=="single"&&checkBoxList[index].$disabled?"disabled":""]'
							  @click="selectRow(item,index)"
						>
							<!-- 	多选且固定左边 】-->
							<view class="td selection fixed-td" v-if="selection=='mulit'&&fixedCheckbox" :style='{width:selectionTdWidth,height:tdHeight+"px"}'>
								<view :class="['td_wrap']" :style='{width:selectionTdWidth,height:tdHeight+"px"}'>
									<checkbox :value="checkBoxList[index].id" color="#999"  :disabled="checkBoxList[index].$disabled" :checked="checkBoxList[index].$checked"
									 style="transform:scale(0.7)" />
								</view>
							</view>
							<!-- 普通固定左边 【-->
							 <view class="td fixed-td"  v-if="columnsFixedLeft[0]"
								 :style='{height:fixedHeight(columnsFixedLeft[0]),width:fixedWidth(columnsFixedLeft)}'>
								<view class="td_wrap fixed-wrap" :style='{height:fixedHeight(columnsFixedLeft[0]),width:fixedWidth(columnsFixedLeft[0])}'>
									<!-- td内容 【-->
											<slot :row='item' v-if="slotCols.indexOf(columnsFixedLeft[0]&&columnsFixedLeft[0].key)>-1"></slot>
											<template v-if="columnsFixedLeft[0].$operateList">
												<template v-for="btn in columnsFixedLeft[0].$operateList">
													<button :class="[btn.styles?btn.styles:'']" v-bind:style="{ padding: '2px 5px',fontSize:'12px',lineHeight:'1.2',display:'inline-block'}"
													 @click="pullEvent(btn.event,{row:item,index:index})" type="primary" size="min" :key="btn.id">{{btn.label}}</button>
												</template>
											</template>
											<template v-else>{{item[columnsFixedLeft[0].key]}} </template>
									<!-- td内容 】-->		
								</view>
							 </view>
							 <!-- 普通固定左边 】-->
						</view>
					</view>
					<!-- 固定左边一列 】-->
					<!-- 固定右边一列 【-->
					<view class="fixed-right" v-if="columnsFixedRight[0]">
						<view class="tr fixed-thead-tr">
							<view class="td" :style='{height:fixedHeight(columnsFixedLeft[0]),width:fixedWidth(columnsFixedLeft)}'>
								<view class="td_wrap" :style='{height:fixedHeight(columnsFixedLeft[0]),width:fixedWidth(columnsFixedLeft)}'>
									{{columnsFixedRight[0].title}}
								</view>
							</view>
						</view>
						<view  v-for="(item,index) in list" :key="item.id"
							:class='["tr",
							  selection=="single"&&checkBoxList[index].$checked?"selected":"",
							  selection=="single"&&checkBoxList[index].$disabled?"disabled":""]'
							  @click="selectRow(item,index)"
						>
							 <view class="td fixed-td" 
								 :style='{height:fixedHeight(columnsFixedRight[0]),width:fixedWidth(columnsFixedRight[0])}'>
								<view class="td_wrap fixed-wrap" :style='{height:fixedHeight(columnsFixedRight[0]),width:fixedWidth(columnsFixedRight[0])}'>
									<!-- td内容 【-->
											<slot :row='item' v-if="slotCols.indexOf(columnsFixedRight[0]&&columnsFixedRight[0].key)>-1"></slot>
											<template v-if="columnsFixedRight[0]&&columnsFixedRight[0].$operateList">
												<template v-for="btn in columnsFixedRight[0].$operateList">
													<button :class="[btn.styles?btn.styles:'']" v-bind:style="{ padding: '2px 5px',fontSize:'12px',lineHeight:'1.2',display:'inline-block'}"
													 @click="pullEvent(btn.event,{row:item,index:index})" type="primary" size="min" :key="btn.id">{{btn.label}}</button>
												</template>
											</template>
											<template v-else>{{item[columnsFixedRight[0].key]}} </template>
									<!-- td内容 】-->		
								</view>
							 </view>
						</view>
					</view>
					<!-- 固定右边一列 】-->
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
			//显示列
			columns: {
				type: Array,
				required: true
			},
			//数据
			list: {
				type: Array,
				required: true
			},
			//单元格样式居中
			"cel-center":{
				type:Boolean,
				default:true
			},
			//自定义行和列样式
			rowClassName: {
				type: [String, Function],
				default: ""
			},
			//自定义列元素
			'slot-cols': {
				type: Array,
				default: () => {
					return []
				}
			},
			//行列合并函数
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
			"fixed-checkbox":{
				type:Boolean,
				default:false
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
			},
			//空提示点击事件
			"emptyClickFn":{
				type:Function,
				default(){
					return ()=>{};
				}
			}
		},
		computed: {
			columnsFixedRight(){
				let t=this.columns.filter(item=>item.$fixed=="right");
				return t.length?[t[0]]:[] ;
			},
			columnsFixedLeft(){
				let t=this.columns.filter(item=>item.$fixed=="left");
				return t.length?[t[0]]:[] ;
			},
			//表格高度
			tableHeight() {
				return Number(this.height) && Number(this.height) > this.tdHeight * 3 ? this.height + "px" : "auto";
			},
			//表格主体高度
			talbeBodyHeight() {
				let t = this.tableHeight !== "auto" ? (parseInt(this.tableHeight) - this.tdHeight - 3) + "px" : "auto";
				return t;
			},
			//可选的列表长度
			allCheckBoxAbledLen() {
				return this.checkBoxList.filter(item => !item.$disabled).length;
			},
			//没数据时候主体高度
			emptyColHeight() {
				let t=this.height?(this.height- this.thTdHeight - 30)+'px':"100px";
				// console.log("emptyColHeight",this.height, this.thTdHeight,t)
				return t;
			},
			//没数据时候，主体的宽度
			emptyColWidth(){
				let t=(this.tdWidth*this.columns.length);
				if(this.selection=='mulit'){
					t=parseInt(this.selectionTdWidth)+t;
				}
				return t+"px";
			}
		},
		data() {
			return {
				checkBoxList: [],//多选=》选中列表
				switchAllCheckBox: false,//多选=》全选
				selectionTdWidth: "50px", //多选列宽
				singleSelect: {},//单选，选中行
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
			//获取数据副本，轻拷贝
			asyncCheckBoxList() {
				this.checkBoxList = this.list.map(item => {
					return { ...item
					};
				});
			},
			//自定义行样式
			rowClassNamePlus(row, index) {
				if (typeof this.rowClassName === "string") {
					return this.rowClassName;
				} else if (typeof this.rowClassName === "function") {
					return this.rowClassName(row, index);
				}
			},
			//事件触发
			pullEvent(event, data) {
				this.$emit(event, data);
			},
			/**
			 * 计算单列宽
			 * iswrap  是否是内容容器
			 */
			countColspanWidth(item, tdItem, index, tdItemIndex,iswrap=false) {
				let borderLeft=iswrap&&tdItemIndex>0?1:0;
				//是否跨列,返回跨列个数，1为不跨列
				let moreThanOne=this.spanMethod(item, tdItem, index, tdItemIndex) && this.spanMethod(item, tdItem, index, tdItemIndex)["colspan"];
				//console.log(`第${index}行,第${tdItemIndex}列 是跨列么?${moreThanOne}`);
				let t=moreThanOne>1 ? (moreThanOne * this.tdWidth)-borderLeft + "px" : (this.tdWidth-borderLeft) +"px";
				//跨列
				if(moreThanOne>1){
					let countWidth=0;
					for(let i=tdItemIndex;i<tdItemIndex+(moreThanOne-1);i++){
						countWidth+=this.columns[i].$width&&parseInt(this.columns[i].$width)?parseInt(moreThanOne*this.columns[i].$width)-borderLeft:this.tdWidth*moreThanOne;
					}
					return countWidth+'px';
				}
				else{
					//不跨列
					let tmp=this.columns[tdItemIndex].$width&&parseInt(this.columns[tdItemIndex].$width)?parseInt(this.columns[tdItemIndex].$width):this.tdWidth;
					return tmp+"px";
				}
				return t;
			},
			/**
			 * 固定列宽
			 */
			fixedWidth(fixedWidth){
				return fixedWidth&&fixedWidth.$width?fixedWidth+"px":this.tdWidth+"px";
			},
			/*
			* 固定列-》列高
			*/
			fixedHeight(fixedHeight){
				return fixedHeight&&fixedHeight.$height?fixedHeight+"px":this.tdHeight+"px";
			},
			
			/**
			 * 计算头部td的宽度
			 * */
			countHeadColspanWidth(item,index,iswrap=false) {
				let borderLeft=iswrap&&index>0?1:0;
				let tmp=item.$width?parseInt(item.$width):this.tdWidth;
				return tmp+"px";
			},
			/**
			 * 计算单列高
			 * */
			countRowspanHeight(item, tdItem, index, tdItemIndex) {
				//是否跨行
				let moreThanOne=this.spanMethod(item, tdItem, index, tdItemIndex) && this.spanMethod(item, tdItem, index, tdItemIndex)["rowspan"] > 1;
				let t= moreThanOne? (this.spanMethod(item, tdItem, index, tdItemIndex)["rowspan"] * this.tdHeight) + "px" : this.tdHeight +"px";
				return t;
			},
			/*
			* 单选行
			* */
			selectRow(item, index) {
				if (item.$disabled) {
					return;
				}
				//非单选方式
				if(this.selection!="single"){
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
			/*
			* 多选
			* */
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
			/*
			* 全选
			* */
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
			},
			/*
			* 空提示点击事件
			* */
			emptyClickCallBack(){
				typeof this.emptyClickFn=="function"?this.emptyClickFn():"";
			}
		}
	}
</script>

<style lang="scss">
	@import "../common/style/table.scss";
</style>
