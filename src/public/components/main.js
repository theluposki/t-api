const MainMain =  {
  template:
  `
  <main class="main">
    <div class="aside">
      <div class="nav">
        <router-link to="/" class="nav-link" exact-active-class="active">
          <i class='bx bxs-home' style='color:#f6f6f6'  ></i>
        </router-link>
        <router-link to="/about" class="nav-link" exact-active-class="active">
          <i class='bx bxs-info-circle' style='color:#f6f6f6' ></i>
        </router-link>
      </div>
    </div>
    <section class="section">
      <router-view></router-view>
    </section>
  </main>
  `,
  data() {
    return {}
  }
}

export default MainMain
