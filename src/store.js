import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true,
    session: false    
  },
  mutations: {
    setDrawer: (state, drawer) => {
      state.drawer = drawer;
    },
    setSession: (state, session) => {
      state.session = session;
    }
  },
  actions: {

  }
})