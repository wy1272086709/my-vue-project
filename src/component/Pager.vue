<template>
    <Page :total="total"  :current="current" show-elevator show-total show-sizer :page-size-opts="opts" @on-change="changePageEvent()"/>
</template>

<script>
	export default {
		name: 'Pager',
		data() {
			return {
				opts: [60],
			}
		},
		props: [ 'total', 'current' ],
		methods: {
			changePageEvent() {
				console.log(this.current)
				this.$emit('on-page-change', this.current);
			}
		}
	}
</script>
<style>
	
</style>