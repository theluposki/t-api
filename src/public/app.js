import router from "./libs/routes.js"
import store from "./store.js"

const app = Vue.createApp({
  data() {
    return {
      vSignInOrSignUp: true,
      vlock: true,
      name: "",
      email: "lu@mail.com",
      password: "1234",
      messageForm: "",
    }
  },
  methods: {
    viewLockCloseOrOpen () {
      const password = document.getElementById("password")

      if(password.type === "password") {
        this.vlock = false
        password.type = "text"
      } else {
        this.vlock = true
        password.type = "password"
      }
    },
    verifyClassActiveBtn (active) {
      const classActive = "lh-btn-active"
      if(active) {
        return classActive
      } else {
        return ""
      }
    },
    viewSignIn () {
      this.vSignInOrSignUp = true
    },
    viewSignUp () {
      this.vSignInOrSignUp = false
    },
    clearFormLogin () {
      this.name = ""
      this.email = ""
      this.password = ""
    },
    fnMessageForm (message) {
      this.messageForm = message
      setTimeout(() => {
        this.messageForm = ""
      }, 3000)
    },
    async signIn () {
      if(this.email === "" || this.password === "") return
      const vm = this;
      const response = await fetch("/api/v1/auth", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "origin",
        body: JSON.stringify({
          email: vm.email,
          password: vm.password
        }),
      })

      const result = await response.json();

      if(result.error) return this.fnMessageForm(result.error);

      this.fnMessageForm(result)


      const responseTwo = await fetch("/api/v1/users/myprofile", { method: "GET" })

      const myprofile = await responseTwo.json();

      if(myprofile.id) {
        setTimeout(() => {
          this.fnMessageForm(myprofile)
          console.log(myprofile)
          vm.$store.commit('signIn', myprofile)
        }, 600)
      }
    },
    signUp () {
      if(this.name === "" || this.email === "" || this.password === "") return
      this.fnMessageForm("Logado com sucesso!")
      console.log("Logado")
    }
  }
})

app.use(store)
app.use(router)
app.mount('#app')

