const Contacts = {
  template:
`
  <div class="page">
    <div class="container">
      <ul class="contact-list">
        <li @click="selectFriend('Mylena')">
          <img src="https://i.pravatar.cc/150?img=47"/>
          <h3>Mylena</h3>
        </li>
        <li @click="selectFriend('Monique')">
          <img src="https://i.pravatar.cc/150?img=45"/>
          <h3>Monique</h3>
        </li>
        <li @click="selectFriend('Gustavo')">
          <img src="https://i.pravatar.cc/150?img=3"/>
          <h3>Gustavo</h3>
        </li>
        <li @click="selectFriend('Mylena')">
          <img src="https://i.pravatar.cc/150?img=47"/>
          <h3>Mylena</h3>
        </li>
        <li @click="selectFriend('Monique')">
          <img src="https://i.pravatar.cc/150?img=45"/>
          <h3>Monique</h3>
        </li>
        <li @click="selectFriend('Gustavo')">
          <img src="https://i.pravatar.cc/150?img=3"/>
          <h3>Gustavo</h3>
        </li>
        <li @click="selectFriend('Mylena')">
          <img src="https://i.pravatar.cc/150?img=47"/>
          <h3>Mylena</h3>
        </li>
        <li @click="selectFriend('Monique')">
          <img src="https://i.pravatar.cc/150?img=45"/>
          <h3>Monique</h3>
        </li>
        <li @click="selectFriend('Gustavo')">
          <img src="https://i.pravatar.cc/150?img=3"/>
          <h3>Gustavo</h3>
        </li>
        <li @click="selectFriend('Mylena')">
          <img src="https://i.pravatar.cc/150?img=47"/>
          <h3>Mylena</h3>
        </li>
        <li @click="selectFriend('Monique')">
          <img src="https://i.pravatar.cc/150?img=45"/>
          <h3>Monique</h3>
        </li>
        <li @click="selectFriend('Gustavo')">
          <img src="https://i.pravatar.cc/150?img=3"/>
          <h3>Gustavo</h3>
        </li>
        <li @click="selectFriend('Mylena')">
          <img src="https://i.pravatar.cc/150?img=47"/>
          <h3>Mylena</h3>
        </li>
        <li @click="selectFriend('Monique')">
          <img src="https://i.pravatar.cc/150?img=45"/>
          <h3>Monique</h3>
        </li>
        <li @click="selectFriend('Gustavo')">
          <img src="https://i.pravatar.cc/150?img=3"/>
          <h3>Gustavo</h3>
        </li>
        <li @click="selectFriend('Mylena')">
          <img src="https://i.pravatar.cc/150?img=47"/>
          <h3>Mylena</h3>
        </li>
        <li @click="selectFriend('Monique')">
          <img src="https://i.pravatar.cc/150?img=45"/>
          <h3>Monique</h3>
        </li>
        <li @click="selectFriend('Gustavo')">
          <img src="https://i.pravatar.cc/150?img=3"/>
          <h3>Gustavo</h3>
        </li>
        <li @click="selectFriend('Mylena')">
          <img src="https://i.pravatar.cc/150?img=47"/>
          <h3>Mylena</h3>
        </li>
        <li @click="selectFriend('Monique')">
          <img src="https://i.pravatar.cc/150?img=45"/>
          <h3>Monique</h3>
        </li>
        <li @click="selectFriend('Gustavo')">
          <img src="https://i.pravatar.cc/150?img=3"/>
          <h3>Gustavo</h3>
        </li>
        <li @click="selectFriend('Mylena')">
          <img src="https://i.pravatar.cc/150?img=47"/>
          <h3>Mylena</h3>
        </li>
        <li @click="selectFriend('Monique')">
          <img src="https://i.pravatar.cc/150?img=45"/>
          <h3>Monique</h3>
        </li>
        <li @click="selectFriend('Gustavo')">
          <img src="https://i.pravatar.cc/150?img=3"/>
          <h3>Gustavo</h3>
        </li>
        <li @click="selectFriend('Mylena')">
          <img src="https://i.pravatar.cc/150?img=47"/>
          <h3>Mylena</h3>
        </li>
        <li @click="selectFriend('Monique')">
          <img src="https://i.pravatar.cc/150?img=45"/>
          <h3>Monique</h3>
        </li>
        <li @click="selectFriend('Gustavo')">
          <img src="https://i.pravatar.cc/150?img=3"/>
          <h3>Gustavo</h3>
        </li>
      </ul>
    </div>
  </div>
`,
data() {
  return {
    
  }
},
methods: {
  selectFriend(nickname) {
    this.$store.commit("setCurrentFriend", { nickname })
    this.$router.push(`/chat/conversation/${nickname}`)
  }
}
}

export default Contacts
