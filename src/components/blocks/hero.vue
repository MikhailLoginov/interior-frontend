<template lang="pug">
  // Hero starts 
  SECTION.section-hero
    .container
      .hero
        .hero__content
          h3 Trending
          h1 Fishnet Chair
          h5 Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black
          BUTTON.btn-order Order us
        .hero__navi
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" class="icon-navi">
            <path fillRule="evenodd" d="M 15 35C 6.72 35 0 28.28 0 20 0 11.72 6.72 5 15 5 23.28 5 30 11.72 30 20 30 28.28 23.28 35 15 35Z" fill="rgb(33,33,33)" opacity="1"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" class="icon-navi">
            <path fillRule="evenodd" d="M 15 35C 6.72 35 0 28.28 0 20 0 11.72 6.72 5 15 5 23.28 5 30 11.72 30 20 30 28.28 23.28 35 15 35Z" fill="rgb(33,33,33)" opacity="1"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" class="icon-navi">
            <path fillRule="evenodd" d="M 15 35C 6.72 35 0 28.28 0 20 0 11.72 6.72 5 15 5 23.28 5 30 11.72 30 20 30 28.28 23.28 35 15 35Z" fill="rgb(33,33,33)" opacity="1"/></svg>
  // Hero ends 
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped lang="stylus">
.hero
  position relative
  background url('../../assets/images/slider-img.jpg') no-repeat center
  height 800px
  &__content
    display flex
    flex-direction column
    padding 369px 0 0 98px
    max-width 490px
    @media screen and (max-width 768px)
      padding-left 10px
      padding-top 300px
    h1, h3
      text-transform uppercase
    h5
      font-weight 500
      margin-top 12px
      letter-spacing -0.35px
  &__navi
    position absolute
    bottom 14px
    left calc(50% - 60px)
    display flex
    align-items center
    justify-content center

.icon-navi
  cursor pointer
  width 52px
  height 52px
  opacity 0.75
  transition all 0.25s
  &:first-child
    width 40px
    height 40px
    opacity 0.2
  &:last-child
    margin-left -3px
    width 40px
    height 40px
    opacity 0.2
  &:hover
    opacity 0.6
  &:active
    opacity 0.5
</style>

