<template lang="pug">
#cart
  Cart
  Promo
</template>

<script>
import Cart from '../blocks/cart.vue'
import Promo from '../blocks/promo.vue'

export default {
  name: 'CartPage',
  components: {
    Cart,
    Promo
  }
}
</script>