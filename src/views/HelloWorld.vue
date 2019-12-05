<template>
	<div class="hello">
		<h3>{{$store.state.count}}</h3>
		<div>
			<button @click="handleAddClick(10)">增加</button>
			<button @click="handleReduceClick(10)">减少</button>
		</div>
		<router-link :to="{name:'login'}">登录页面</router-link>
		<div>异步操作</div>
		<div>
			<button @click="handleActionsAdd(10)">异步增加</button>
			<button @click="handleActionsReduce(10)">异步减少</button>
		</div>
	</div>
</template>
<script>
	import {mapState, mapMutations, mapActions, mapGetters} from '../store'
	export default {
		name: 'HelloWorld',
		data () {
		   return {
		      msg: 'Welcome to Your Vue.js App'
		   }
		},
		methods: {
			...mapMutations({
		      handleAddClick: 'mutationsAddCount',
		      handleReduceClick: 'mutationsReduceCount'
		    }),
		    ...mapActions({
		      handleActionsAdd: 'actionsAddCount',
		      handleActionsReduce: 'actionsReduceCount'
		    })
		},
		computed: {
	    	count() {
	      		return this.$store.getters.getterCount
	    	}
	    }
	}
</script>
<style>
	
</style>