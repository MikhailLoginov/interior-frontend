<template lang="pug">
  // Slider section starts 
  SECTION.section-slider
    .container
      .slider
        .slider__content
          h3 Hot deal
          h1 Fishnet Chair
          h5 Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black
          BUTTON.btn-order Order us
        .slider__navi
          //+inline-svg('icon-navi')
          //+inline-svg('icon-navi')
          //+inline-svg('icon-navi')
  // Slider section ends 
  
</template>

<script>
export default {
  name: "Slider"
}
</script>

<style lang="stylus" scoped>
.slider
  margin-top 105px
  position relative
  background url('../../assets/images/slider.jpg') no-repeat center
  height 800px
  &__content
    display flex
    flex-direction column
    padding 284px 0 0 98px
    @media screen and (max-width 768px)
      padding 284px 0 0 10px
    max-width 468px
    h1, h3
      text-transform uppercase
    h3
      color #e53935
    h5
      margin-top 12px
  &__navi
    position absolute
    bottom 14px
    left calc(50% - 60px)
    display flex
    align-items center
    justify-content center
    cursor pointer

.icon-navi
  width 52px
  height 52px
  &:first-child
    width 40px
    height 40px
  &:last-child
    margin-left -3px
    width 40px
    height 40px
</style>
