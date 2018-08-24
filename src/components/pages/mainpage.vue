<template lang="pug">
#mainpage
  Hero
  Featured
  Promo
  Trending
  Slider
  Exclusive
  MobileApp
</template>

<script>
import Hero from '../blocks/hero.vue'
import Featured from '../blocks/featured.vue'
import Promo from '../blocks/promo.vue'
import Trending from '../blocks/trending.vue'
import Slider from '../blocks/slider.vue'
import Exclusive from '../blocks/exclusive.vue'
import MobileApp from '../blocks/mobileApp.vue'

export default {
  name: 'MainPage',
  components: {
    Hero,
    Featured,
    Promo,
    Trending,
    Slider,
    Exclusive,
    MobileApp
  }
}
</script>