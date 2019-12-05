<template>
	<student :obj="students">
		<!-- 带有slot 标记的填充到子模板中去了 -->
		<h1 slot="header">这里是插入的信息</h1>
	</student>
</template>
<script>
	import student from '../component/Student.vue'
	export default {
		data() { 
			return {
				students: {
					name: "wangyu",
					age: 25
				}
			}
		},
		components: {
			student
		},
		methods: {

		}
	}
</script>

<style>
	
</style>