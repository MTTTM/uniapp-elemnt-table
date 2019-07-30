<template>
	<view class="demo-wrap">
		<single-demo/>
		<custom-cel-width/>
		<loading-table/>
		<empty-row/>
		<fixed-height-empty-row/>
		<fixed-height/>
		<custom-row-style/>
		<custom-row-style-second/>
		<custom-cel/>
		<custom-cel-content/> 
		 <row-span/>
		 <cel-span/>
		 <mulit-checkbox/>
		<single-selected/>
		<edi-data/>
		<!-- <single-fixed-left-and-height/> -->
		<single-fixed-right/>
		<single-fixed-left/>
		
	</view>

</template>

<script>
	import vTable from "@/components/table.vue";
	import customCelWidth from "@/components/example/customCelWidth.vue";
	import singleDemo from "@/components/example/single.vue";
	import fixedHeight from "@/components/example/fixedHeight.vue";
	import mulitCheckbox from "@/components/example/mulitCheckbox.vue";
	import rowSpan from "@/components/example/rowSpan.vue";
	import celSpan from "@/components/example/celSpan.vue";
	import customRowStyle from "@/components/example/customRowStyle.vue";
	import customRowStyleSecond from "@/components/example/customRowStyleSecond.vue";
	import customCel from "@/components/example/customCel.vue";
	import customCelContent from "@/components/example/customCelContent.vue";
	import ediData from "@/components/example/ediData.vue";
    import singleSelected from "@/components/example/singleSelected.vue";
	import emptyRow from "@/components/example/emptyRow.vue";
	import fixedHeightEmptyRow from "@/components/example/fixedHeightEmptyRow.vue";
	import loadingTable from "@/components/example/loadingTable.vue"
	import singleFixedRight from "@/components/example/singleFixedRight.vue";
	import singleFixedLeft from "@/components/example/singleFixedLeft.vue";
	import singleFixedLeftAndHeight from "@/components/example/singleFixedLeftAndHeight.vue";
	export default {
		components: {
			vTable,
			singleDemo,
			customCelWidth,
			fixedHeight,
			mulitCheckbox,
			rowSpan,
			celSpan,
			customRowStyle,
			customRowStyleSecond,
			customCel,
			customCelContent,
			ediData,
			singleSelected,
			emptyRow,
			fixedHeightEmptyRow,
			loadingTable,
			singleFixedRight,
			singleFixedLeft,
			singleFixedLeftAndHeight
		}
	}
</script>
<style>
	.demo-wrap{
		padding:20px 10px;
	}
</style>

