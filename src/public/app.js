import router from "./routes.js"
import store from "./store.js"
import Login from "./components/login.js"
import HeaderMain from "./components/header.js"
import MainMain from "./components/main.js"
import FooterMain from "./components/footer.js"

const app = Vue.createApp({
  components: {
    Login,
    HeaderMain,
    MainMain,
    FooterMain
  },
  data() {
    return {

    }
  }
})

app.use(store)
app.use(router)
app.mount('#app')

