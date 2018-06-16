import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: {},
    token: {},
    authenticated: false
  },
  mutations: {
    setLogin(state, data){
      state.email = data.email,
      state.token = data.token
      state.authenticated = true;
    }
  },
  actions: {

  }
})
