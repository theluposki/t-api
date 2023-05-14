import Home from "./views/Home.js"
import Chat from "./views/Chat.js"
import About from "./views/About.js"

import Contacts from "./views/Chat/contacts.js"
import Config from "./views/Chat/config.js"
import ChatMainfrom from "./views/Chat/chat.js"

const routes = [
  { path: '/', component: Home },
  {
    path: '/chat',
    component: Chat,
    children: [
      { path: 'conversation/:nickname', component: ChatMainfrom, props: true },
      { path: 'contacts', component: Contacts },
      { path: 'settings', component: Config },
    ],
  },
  { path: '/about', component: About },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router
