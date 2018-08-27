<template lang="pug">
  // Promo section starts 
  SECTION.section-promo
    .container
      .promo
        .large-product.large-product-1
          h3 Exclusive
          h2 Fishnet Chair
          p Seat and back with upholstery made of cold cure foam. Steel frame, available in matt
          BUTTON.btn-order Order us
        .large-product.large-product-2
          h3 Exclusive
          h2 Fishnet Chair
          p Seat and back with upholstery made of cold cure foam. Steel frame, available in matt
          BUTTON.btn-order Order us
  // Promo section ends 
</template>

<script>
export default {
  name: "Promo"
}
</script>

<style lang="stylus" scoped>
.promo
  display flex
  margin-top 120px
  flex-wrap wrap
  justify-content space-around

  .large-product
    width 683px
    height 683px
    h3
      color #1e88e5
      text-transform uppercase
      padding 222px 0 8px 51px
      @media screen and (max-width 768px)
        padding-left 10px
    h2
      padding 0 0 8px 50px
      @media screen and (max-width 768px)
        padding-left 10px
    p
      max-width 400px
      padding-left 51px
      @media screen and (max-width 768px)
        padding-left 10px
    &.large-product-1
      background url("../../assets/images/promo-img1.png") no-repeat right
    &.large-product-2
      background url("../../assets/images/promo-img.jpg") no-repeat right
    .btn-order
      margin-left 50px
      @media screen and (max-width 768px)
        margin-left 10px
</style>
