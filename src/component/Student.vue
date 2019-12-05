<template>
	<Row>
		<Col span="11">
			<h2>学生信息</h2>
			<p>用户名: {{obj.name}}</p>
			<p>年龄: {{obj.age}}</p>
			<slot name="header"></slot>
		</Col>
	</Row>
</template>
<script>
	export default {
		data() {
			return {
			}
		},
		props: [ 'obj' ],
		methods: {
		}
	}
</script>

<style>
	


</style>