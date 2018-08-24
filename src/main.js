import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './components/pages/index.vue'
import ContactsPage from './components/pages/contacts-page.vue'
import ProductPage from './components/pages/product-page.vue'
import Showroom from './components/pages/showroom.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Index},
  {path: '/contacts', component: ContactsPage},
  {path: '/product', component: ProductPage},
  {path: '/showroom', component: Showroom}
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
