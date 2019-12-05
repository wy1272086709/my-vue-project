<template>
	<div class="css-login-div">
		<Form :model="formItem" :label-width="80">
			<FormItem label="用户名">
				<Input v-model="formItem.username" placeholder="请输入用户名"></Input>
			</FormItem>
			<FormItem label="密码">
				<Input v-model="formItem.password" placeholder="请输入密码"></Input>
			</FormItem>
			<FormItem>
	            <Button type="primary" @click="loginSubmit()">Submit</Button>
	            <Button style="margin-left: 8px">Cancel</Button>
	        </FormItem>
		</Form>
		<!-- 可以用于不同路由之间的跳转,除了to属性,还有name属性等等. -->
		<router-link :to="{path:'/hello-world'}">hello world!</router-link>
	</div>
</template>
<script>
	import Ajax from '../libs/ajax'
	const Host = 'http://laravelvue.cn/api/'
	export default {
		name: "login",
		data() {
			return {
				formItem: {
					username: "",
					password: ""
				}
			}
		},
		methods: {
			// 登录方法
			loginSubmit() {
				let url = Host+"site/login"
				let promise = Ajax.postData(url, this.formItem)
				promise.then((res)=> {
					console.log(res)
				})
			}
		}
	}
</script>
<style>
	.css-login-div {
		max-width: 600px;
	}
</style>