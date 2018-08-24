<template lang="pug">
#app
  Header
  Hero
  Featured
  Promo
  Trending
  Slider
  Exclusive
  MobileApp
  Footer
</template>

<script>
import Hero from './components/blocks/hero.vue'
import Header from './components/blocks/header.vue'
import Featured from './components/blocks/featured.vue'
import Promo from './components/blocks/promo.vue'
import Trending from './components/blocks/trending.vue'
import Slider from './components/blocks/slider.vue'
import Exclusive from './components/blocks/exclusive.vue'
import MobileApp from './components/blocks/mobileApp.vue'
import Footer from './components/blocks/footer.vue'

export default {
  name: 'app',
  components: {
    Hero,
    Header,
    Featured,
    Promo,
    Trending,
    Slider,
    Exclusive,
    MobileApp,
    Footer
  }
}
</script>

<style lang="stylus">

@import "assets/styles/main.styl"

</style>
