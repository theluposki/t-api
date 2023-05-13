const AsideMain = {
  template:
  `
  <div class="aside">
    <div class="nav">
      <router-link to="/" class="nav-link" exact-active-class="active">
        <i class='bx bxs-home' style='color:#f6f6f6'  ></i>
      </router-link>
      <router-link to="/chat" class="nav-link" exact-active-class="active">
        <i class='bx bx-chat' style='color:#f6f6f6'></i>
      </router-link>
      <router-link to="/about" class="nav-link" exact-active-class="active">
        <i class='bx bxs-info-circle' style='color:#f6f6f6' ></i>
      </router-link>
    </div>
  </div>
  `,
  data () {
    return {

    }
  }
}

export default AsideMain
