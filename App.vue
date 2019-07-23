<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	@import "./static/flex.less";
</style>
<style lang="scss">

	.rowClassName {
		.td {
			background: red;
		}
	}

	//自定义某一行样式
	.demo-table-info-row .td {
		background-color: #2db7f5;
		color: #fff;
	}

	.demo-table-error-row .td {
		background-color: #ff6600;
		color: #fff;
	}

	.td.demo-table-info-column {
		background-color: #2db7f5;
		color: #fff;
	}

	.demo-table-info-cell-name {
		background-color: #2db7f5;
		color: #fff;
	}

	.demo-table-info-cell-age {
		background-color: #ff6600;
		color: #fff;
	}

	.demo-table-info-cell-address {
		background-color: #187;
		color: #fff;
	}

	.btn-delete {
		background: red !important;
		color: #fff !important;
	}
	
	
	.example{
		.title {
			line-height: 40px;
			font-weight: bold;
		}
	}
		
</style>
