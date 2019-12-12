<template>
	<div class="card" style="width: 16.66%; margin: 0px 27.1667px; min-width: 200px; max-width: 250px;">
	    <a :href="item.promotionLink" target="_blank" class="imgbox">
	    	<img :src="item.materialUrl" :data-url="item.materialUrl" class="goods-img">
	    </a>
	    <p class="one">
	    	<span class="fr">佣金比例：<span>
	            <div role="tooltip" id="el-popover-5296" aria-hidden="true" class="el-popover el-popper el-popover--plain" tabindex="0" style="display: none;">
	                    已为您匹配当前最高佣金比例
	            </div>
	            <b class="el-popover__reference" aria-describedby="el-popover-5296" tabindex="0">{{item.wlCommissionRatio}}%</b>
	            </span>
	        </span>
	        <span>佣金：￥<b>{{item.wlCommission}}</b></span>
	    </p>

	    <p class="two"><a :href="item.materialUrl" :title="item.skuName" target="_blank">{{item.skuName}}</a></p>
	    <p class="three clearfix"><span style="padding-right: 5px; font-weight: bold;">￥{{item.finalPrice}}</span></p>
	    <p class="four"><span class="auxiliary-subtext">月销：{{item.inOrderCount30Days}}</span></p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		}, 
		props: [
			'item'
		],
		methods: {
		
		},
	}
</script>
<style>


</style>
