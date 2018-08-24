import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MainPage from './components/pages/mainpage.vue'
import ContactsPage from './components/pages/contactspage.vue'
import ProductPage from './components/pages/productpage.vue'
import Showroom from './components/pages/showroom.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/', component: MainPage},
  {path: '/contacts', component: ContactsPage},
  {path: '/product', component: ProductPage},
  {path: '/showroom', component: Showroom}
];

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
