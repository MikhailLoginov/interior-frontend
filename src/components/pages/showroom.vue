<template lang="pug">
#product
  ProductsRange
  Promo
</template>

<script>
import ProductsRange from '../blocks/products-range.vue'
import Promo from '../blocks/promo.vue'

export default {
  name: 'Showroom',
  components: {
    ProductsRange,
    Promo
  }
}
</script>