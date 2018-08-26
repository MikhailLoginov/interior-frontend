<template lang="pug">
  // Slider section starts 
  SECTION.section-slider
    .container
      .slider
        <el-carousel height="800px">
          <el-carousel-item v-for="item in 3" :key="item">
          </el-carousel-item>
        </el-carousel>
        .slider__content
          h3 Hot deal
          h1 Fishnet Chair
          h5 Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black
          BUTTON.btn-order Order us
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
  height 800px
  &__content
    position relative
    z-index 3
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
