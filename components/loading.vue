<template>
	<view class="mask">
		<view class="three-bounce">
			<view class="bounce1"></view>
			<view class="bounce2"></view>
			<view class="bounce3"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	.mask{
		position: absolute;
		width: 100%;
		height: 100%;
		left:0;
		top:0;
		z-index:600;
		background:rgba(0,0,0,.75);
	}
	.three-bounce {
		min-width: 60px;
		min-height: 30px;
		position: absolute;
		left:50%;
		top:50%;
		transform: translateX(-50%) translateY(-50%);
		z-index:100;
	}

	.three-bounce view {
		width: 12%;
		height: 12%;
		min-height: 10px;
		min-width: 10px;
		background-color: #ffffff;
		border-radius: 100%;
		display: inline-block;
		animation: bouncedelay 1.4s infinite ease-in-out;
		animation-fill-mode: both;
	}

	.three-bounce .bounce1 {
		animation-delay: -0.32s;
	}

	.three-bounce .bounce2 {
		animation-delay: -0.16s;
	}

	@keyframes bouncedelay {

		0%,
		80%,
		100% {
			transform: scale(0.0);
		}

		40% {
			transform: scale(1.0);
		}
	}
</style>
