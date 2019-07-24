<template>
	<view>
		
		<single-demo></single-demo>
		<loading-table/>
		<empty-row/>
		<fixed-height-empty-row/>
		
		<fixed-height></fixed-height>
		<custom-row-style/>
		<custom-row-style-second/>
		<custom-cel/>
		<custom-cel-content/>
		<row-span></row-span>
		<cel-span></cel-span>
		<mulit-checkbox></mulit-checkbox>
		<single-selected/>
		<edi-data/>
	</view>

</template>

<script>
	import vTable from "@/components/table.vue";
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
	export default {
		components: {
			vTable,
			singleDemo,
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
			loadingTable
		}
	}
</script>

