import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count:45
}

const getters = {
  // count: function(state) {
  //   return state.count += 100
  // },
  count: state => state.count
}

const mutations = {
  jia(state){
    state.count += 1;
  },
  jian(state){
    state.count -= 1;
  }
}

const actions = {
  jiaplus(context){
    context.commit('jia')
    // setTimeout(() => {
    //   context.commit('jian')
    // }, 3000);
    // console.log("我先被执行了")
  },
  jianplus({ commit }){
    commit("jian")
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})