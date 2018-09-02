import Vue from 'vue'
import router from './router.js'
import App from './App.vue'
import './plugins.js'
import Vuex from 'vuex'
import products from './data/products.js'

Vue.config.productionTip = false;

const store = new Vuex.Store({
  /*state: {
    products: [],
    cart: [
      {
        id: "1",
        name: "123",
        description: "lorem fdsfsdfs",
        price: "39,99",
        image: "../../assets/images/product-11.jpg"
      }
    ]
  },
  getters: {
    products: state => {
      return state.products;
    },
    cart: state => {
      return state.cart;
    }
  },
  actions: {
    addProductToCart(product) {
      this.state.cart.push(product);
    }
  },
  mutations: {
    setCart (state, cart) {
      state.cart = cart
    }
  }*/
})

new Vue({
  router,
  store,
  data: {
    products,
    cart: [],
    currProduct: []
  },
  render: h => h(App)
}).$mount('#app')
