const Login = {
  template:
  `
  <main class="main">
  <div class="login">
    <header class="l-header">
      <button @click="viewSignIn" :class="verifyClassActiveBtn(vSignInOrSignUp)">Logar</button>
      <button @click="viewSignUp" :class="verifyClassActiveBtn(!vSignInOrSignUp)">Criar conta</button>
    </header>
    <main class="l-main" v-if="vSignInOrSignUp">
      
      <div class="l-logo">
        <i class='bx bx-git-merge' style='color:#f6f6f6'  ></i>
        <span>MyReb</span>
      </div>
      
      <h4 class="title">Bem-vindo! 😊</h4>

      <div class="l-form">

        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" v-model="email" placeholder="digite seu e-mail">
        </div>

        <div class="form-control">
          <label for="password">Senha</label>
          <div class="fc-group">
            <input type="password" id="password" v-model="password" placeholder="digite sua senha">
            <button @click="viewLockCloseOrOpen">
              <i v-if="vlock" class='bx bxs-lock-alt' style='color:#f6f6f6'  ></i>
              <i v-else class='bx bx-lock-open-alt' style='color:#f6f6f6' ></i>
            </button>
          </div>
        </div>

        <h6 class="lf-message">{{ messageForm }}</h6>

        <div class="form-control-button">
          <button @click="clearFormLogin">Limpar</button>
          <button @click="signIn" class="btn-primary">Entrar</button>
        </div>
        
        <p class="l-p">
          "Oi! Seus amigos estão esperando por você! Faça login agora e junte-se a eles para não perder nenhum momento da diversão que está rolando."
        </p>
        
      </div>
    </main>

    <main class="l-main" v-else>
      <h4 class="title">Abrir uma conta na <strong>MyReb</strong></h4>

      <div class="l-form">

        <div class="form-control">
          <label for="name">Nome</label>
          <input type="text" v-model="name" placeholder="digite seu nome">
        </div>

        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" v-model="email" placeholder="digite seu e-mail">
        </div>

        <div class="form-control">
          <label for="password">Senha</label>
          <div class="fc-group">
            <input type="password" id="password" v-model="password" placeholder="digite sua senha">
            <button @click="viewLockCloseOrOpen">
              <i v-if="vlock" class='bx bxs-lock-alt' style='color:#f6f6f6'  ></i>
              <i v-else class='bx bx-lock-open-alt' style='color:#f6f6f6' ></i>
            </button>
          </div>
        </div>

        <h6 class="lf-message">{{ messageForm }}</h6>

        <div class="form-control-button">
          <button @click="clearFormLogin">Limpar</button>
          <button @click="signUp" class="btn-primary">Abrir a conta</button>
        </div>
        
        <p class="l-p">
          Através da plataforma MyReb, é viável estabelecer comunicação por meio de mensagens e chamadas privadas, permitindo que você seja genuíno(a), converse livremente e mantenha contato com as pessoas mais significativas em sua vida, não importando a distância que as separem.
        </p>
      </div>



    </main>
    <footer class="l-footer">

    </footer>
  </div>
</main>
  `,
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
    async signUp () {
      if(this.name === "" || this.email === "" || this.password === "") return

      const vm = this;
      const response = await fetch("/api/v1/register", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "origin",
        body: JSON.stringify({
          name: vm.name,
          email: vm.email,
          password: vm.password
        }),
      })

      const result = await response.json();

      if(result.error) return this.fnMessageForm(result.error);

      this.fnMessageForm(result.message)

      setTimeout(() => {
        this.vSignInOrSignUp = true
      }, 3000)
    }
  }
}

export default Login
