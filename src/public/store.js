const store = Vuex.createStore({
  state () {
    return {
      count: 0,
      user: {},
      currentFriend: { nickname: "vt"}
    }
  },
  mutations: {
    signIn (state, payload) {
      state.user = payload
    },
    setCurrentFriend (state, payload) {
      state.currentFriend = payload
    }
  }
})

export default store
