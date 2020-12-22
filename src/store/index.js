import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lightTheme: true,
  },
  mutations: {
    changeTheme(state){
      state.lightTheme = !state.lightTheme;
    },
  },
  actions: {
  },
  modules: {
  }
})
