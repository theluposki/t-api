const Header = {
  template:
  `
  <header class="header">
    <div class="logo">
      <router-link to="/" class="logo-link">
        <i class='bx bx-git-merge' style='color:#f6f6f6'  ></i>
        <span>MyReb</span>
      </router-link>
    </div>
    {{ $store.state.user.nickname }}
  </header>
  `,
  data() {
    return {

    }
  }
}

export default Header
