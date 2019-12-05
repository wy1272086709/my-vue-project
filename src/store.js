import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const mapState = {
	count: 0
}

// 定义对于变量的处理方法
const mapMutations = {
	mutationsAddCount(state, n = 0) {
		return (state.count+=n)
	},
	mutationsReduceCount(state, n = 0) {
		return (state.count-=n)
	}
}

const mapActions = {
	actionsAddCount(context, n = 0) {
        console.log(context)
        return context.commit('mutationsAddCount', n)
    },
    actionsReduceCount({ commit }, n = 0) {
        return commit('mutationsReduceCount', n)
    }
}

// state 的计算属性
const mapGetters = {
    getterCount(state) {
        return (state.count += 10)
    }
}

export default new Vuex.Store({
	state: mapState,
	getters: mapGetters,
	actions: mapActions,
	mutations: mapMutations
})