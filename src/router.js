import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './components/pages/index.vue'
import ContactsPage from './components/pages/contacts-page.vue'
import ProductPage from './components/pages/product-page.vue'
import Showroom from './components/pages/showroom.vue'
import CartPage from './components/pages/cart-page.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: HomePage},
  {path: '/contacts', component: ContactsPage},
  {path: '/product', component: ProductPage},
  {path: '/showroom', component: Showroom},
  {path: '/cart', component: CartPage}
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;