const Chat = {
  template:
`
  <div class="page">
    <div class="container">
      <header class="header-int">
        <div class="nav-int">
          <router-link to="/chat/conversation" class="btn-link" exact-active-class="active">
            <i class='bx bxs-conversation' ></i>
          </router-link>
          <router-link to="/chat/contacts" class="btn-link" exact-active-class="active">
            <i class='bx bxs-contact'></i>
          </router-link>
          </div>

        <div class="nav-int">
          <router-link to="/chat/settings" class="btn-link" exact-active-class="active">
            <i class='bx bxs-cog' ></i>
          </router-link>
        </div>
      </header>
      <router-view></router-view>
    </div>
  </div>
`
}

export default Chat
