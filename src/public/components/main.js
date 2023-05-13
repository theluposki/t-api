import AsideMain from "./aside.js"

const MainMain =  {
  template:
  `
  <main class="main">
    <AsideMain></AsideMain>
    <section class="section">
      <router-view></router-view>
    </section>
  </main>
  `,
  components: {
    AsideMain
  },
  data() {
    return {}
  }
}

export default MainMain
