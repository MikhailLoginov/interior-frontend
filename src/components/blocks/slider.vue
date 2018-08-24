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
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" class="icon-navi">
            <path fillRule="evenodd" d="M 15 35C 6.72 35 0 28.28 0 20 0 11.72 6.72 5 15 5 23.28 5 30 11.72 30 20 30 28.28 23.28 35 15 35Z" fill="rgb(33,33,33)" opacity="1"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" class="icon-navi">
            <path fillRule="evenodd" d="M 15 35C 6.72 35 0 28.28 0 20 0 11.72 6.72 5 15 5 23.28 5 30 11.72 30 20 30 28.28 23.28 35 15 35Z" fill="rgb(33,33,33)" opacity="1"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" class="icon-navi">
            <path fillRule="evenodd" d="M 15 35C 6.72 35 0 28.28 0 20 0 11.72 6.72 5 15 5 23.28 5 30 11.72 30 20 30 28.28 23.28 35 15 35Z" fill="rgb(33,33,33)" opacity="1"/></svg>
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
