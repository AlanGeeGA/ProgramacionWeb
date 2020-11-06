import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 110
  },
  mutations: {
    aumentar(state, num){
      state.total = state.total + num;
    },
    disminuir(state){
      state.total--;
    }
  },
  actions: {
    accionAumentar({commit}, num){
      commit('aumentar', num);
    },
    accionDisminuir({commit}){
      commit('disminuir');
    }
  },
  modules: {
  }
})
