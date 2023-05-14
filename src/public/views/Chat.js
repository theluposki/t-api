const Chat = {
  template:
`
  <div class="page">
    <div class="container">
      <header class="header-int">
        <div v-if="$store.state.currentFriend.nickname" class="h-current-user">
          <img src="https://i.pravatar.cc/150?img=34" alt="image profile"/>
          <h3>{{ $store.state.currentFriend.nickname }}</h3>
        </div>
        
        <div v-else class="h-current-user">
          <img src="https://i.pravatar.cc/150?img=3" alt="image profile"/>
          <h3>Mylena</h3>
        </div>
        
        <div class="nav-int">
          <router-link to="/chat/contacts" class="btn-link" exact-active-class="active">
            <i class='bx bxs-contact'></i>
          </router-link>
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
