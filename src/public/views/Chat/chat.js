const Chat = {
  props: ["nickname"],
  template:
`
  <div class="page">
    <div class="container">
      <h1>iniciar conversa {{ nickname }}</h1>
    </div>
  </div>
`
}

export default Chat
