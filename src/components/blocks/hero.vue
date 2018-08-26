<template lang="pug">
  // Hero starts 
  SECTION.section-hero
    .container
      .hero
        <el-carousel height="800px">
          <el-carousel-item v-for="item in 3" :key="item">
          </el-carousel-item>
        </el-carousel>
        .hero__content
          h3 Trending
          h1 Fishnet Chair
          h5 Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black
          BUTTON.btn-order Order us
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
  height 800px
  &__content
    position relative
    display flex
    flex-direction column
    z-index 3
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

<style lang="stylus">
.el-carousel
  position absolute 
  width 100%
  height 800px
.el-carousel__button
  width 30px
  height 30px
  border-radius 50%
  background rgba(0,0,0,0.2)
  margin 0 1px
  &:hover
    opacity 0.6
  &:active
    opacity 0.5
.el-carousel__indicator.is-active > .el-carousel__button
  background rgba(0,0,0,0.75)
  width 40px
  height 40px
  margin-top -5px
.el-carousel__indicators
  bottom 8px
.el-carousel__item
  &:nth-child(3n)
    background url('../../assets/images/slider.jpg') no-repeat center
  &:nth-child(3n+1)
    background url('../../assets/images/slider-img.jpg') no-repeat center
  &:nth-child(3n+2)
    background-color rgba(0,0,0,0.1)
</style>


