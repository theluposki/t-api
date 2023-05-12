const store = Vuex.createStore({
  state () {
    return {
      count: 0,
      user: {}
    }
  },
  mutations: {
    signIn (state, payload) {
      state.user = payload
    }
  }
})

export default store
