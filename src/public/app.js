import router from "./libs/routes.js"
import store from "./store.js"

const app = Vue.createApp({
  data() {
    return {
      count: 0,
      name: "lucas"
    }
  }
})

app.use(store)
app.use(router)
app.mount('#app')

