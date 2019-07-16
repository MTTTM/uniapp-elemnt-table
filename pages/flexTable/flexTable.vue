<template>
	<view class="table">
		<view class="thead">
			<view class="tr">
				<view class="td" style="height:200px;width:20px;">1</view>
				<view class="td" style="height:50px;width:100px;">1</view>
				<view class="td" style="height:50px;width:100px;">1</view>
					<view class="td" style="height:50px;width:100px;">1</view>
						<view class="td" style="height:50px;width:100px;">1</view>
							<view class="td" style="height:50px;width:100px;">1</view>
			</view>
		</view>
		<view class="tbody">
			<view class="tr flex-wrap">
				<view class="td">1</view>
				<view class="td">1</view>
				<view class="td">1</view>
			</view>
			<view class="tr">
				<view class="td">1</view>
				<view class="td">1</view>
				<view class="td">1</view>
			</view>
			<view class="tr">
				<view class="td">1</view>
				<view class="td">1</view>
				<view class="td">1</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="less">
@import "../../static/flex.less";
             // .flex-wrap(){
             //   flex-wrap:wrap;
             // }

		.tr {
			.flex-wrap();
		}
		.td{
			float: left;
			background:red;
			margin-left:10px;
		}
	
</style>
