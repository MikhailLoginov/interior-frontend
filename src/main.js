import Vue from 'vue'
import VueRouter from 'vue-router'
import { DatePicker, Notification, Carousel, CarouselItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import App from './App.vue'
import Index from './components/pages/index.vue'
import ContactsPage from './components/pages/contacts-page.vue'
import ProductPage from './components/pages/product-page.vue'
import Showroom from './components/pages/showroom.vue'

locale.use(lang);
Vue.use(DatePicker, {locale});
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.prototype.$notify = Notification;

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
