<template lang="pug">
  // Mobile-app section starts 
  SECTION.section-mobile-app
    .container
      .mobile-app
        .mobile-app__content
          h3 Mobile app
          h1 Find. Follow. Favorite.
          h4 Save your favorites and share your style.
          .mobile-app__links
            A(href="#").mobile-app__link-appstore
            A(href="#").mobile-app__link-googleplay
  // Mobile-app section ends 
  
</template>

<script>
export default {
  name: "MobileApp"
}
</script>

<style lang="stylus" scoped>
.mobile-app
  background url('../../assets/images/back-img.jpg') no-repeat center
  height 516px
  margin-top 91px
  &__content
    display flex
    flex-direction column
    padding 121px 0 0 97px
    @media screen and (max-width 768px)
      padding 121px 0 0 10px
    max-width 458px
    h1, h3
      text-transform uppercase
    h1
      line-height 74px
    h3
      color #6c6c6c
    h4
      margin-top 7px
  &__links
    display flex
    margin-top 31px
  &__link-appstore
    background url("../../assets/images/app-store.png") no-repeat
    width 135px
    height 40px
    margin-right 10px
  &__link-googleplay
    background url("../../assets/images/google-play.png") no-repeat
    width 135px
    height 40px
</style>
