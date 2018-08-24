<template lang="pug">
#app
  Header
  router-view
  Footer
</template>

<script>
import Header from './components/blocks/header.vue'
import Footer from './components/blocks/footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus">

@import "assets/styles/main.styl"

</style>
