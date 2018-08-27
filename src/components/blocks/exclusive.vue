<template lang="pug">
  // Exclusive section starts
  SECTION.section-exclusive
    .container
      .exclusive
        .medium-product
          h3 Exclusive
          h2 Fishnet Chair
          p Seat and back with upholstery made of cold cure foam. Steel frame, available in matt
          BUTTON.btn-order Order us
        .exclusive__products
          .product.product-1
            .product__overlay
              BUTTON.product__btn-go
              h3 Fishnet Chair
              p Seat and back with upholstery made of cold cure foam
          .product.product-2
            .product__overlay
              BUTTON.product__btn-go
              h3 Fishnet Chair
              p Seat and back with upholstery made of cold cure foam
          .product.product-3
            .product__overlay
              BUTTON.product__btn-go
              h3 Fishnet Chair
              p Seat and back with upholstery made of cold cure foam
          .product.product-4
            .product__overlay
              BUTTON.product__btn-go
              h3 Fishnet Chair
              p Seat and back with upholstery made of cold cure foam
  // Exclusive section ends
  
</template>

<script>
export default {
  name: "Exclusive"
}
</script>

<style lang="stylus" scoped>
.exclusive
  margin 120px 0 0 98px
  @media screen and (max-width 1300px)
    margin 118px 10px 0 10px
    display flex
    flex-wrap wrap
    justify-content space-around

  &__products
    display flex
    flex-wrap wrap
    justify-content space-around
    padding 0 81px 0 15px
    @media screen and (max-width 1300px)
      padding 0

  .product
    position relative
    width 270px
    height 270px
    margin 0 15px 30px 15px
    @media screen and (max-width 768px)
      margin 0 10px 30px 10px
    &.product-1
      background url("../../assets/images/product-2-sm.jpg") no-repeat
    &.product-2
      background url("../../assets/images/product-3-sm.jpg") no-repeat
    &.product-3
      background url("../../assets/images/product-4-sm.jpg") no-repeat
    &.product-4
      background url("../../assets/images/product-5-sm.jpg") no-repeat
    &__overlay
      width 100%
      height 100%
      display flex
      flex-direction column
      text-align center
      background-color white
      opacity 0.9
      display none
      border 1px solid #9c9c9c
      h3
        margin-top 15px
        color #212121
        font-weight 700
        font-size 22px
      p
        color #6c6c6c
        margin 23px 10px 0 10px
        text-overflow ellipsis
        max-height 50px
        overflow hidden
    &__btn-go
      margin 62px 111px 0 111px
      cursor pointer
      border-radius 50%
      width 48px
      height 48px
      background url("../../assets/images/arrow.png") no-repeat center
      background-size 12px 18px
      &:hover
        background-color rgba(33, 33, 33, 0.1)
      &:active
        box-shadow 0px 2px 4.85px 0.15px rgba(33, 33, 33, 0.1)
      transition all .25s
    &:hover .product__overlay
      position absolute
      left 0
      top 0
      display block

.medium-product
  float left
  width 570px
  height 570px
  background url("../../assets/images/product-1-lg.jpg") no-repeat center
  @media screen and (max-width 1300px)
    padding-bottom 30px
  h3
    color #1e88e5
    text-transform uppercase
    padding 183px 0 6px 30px
    @media screen and (max-width 768px)
      padding-left 10px
  h2
    padding 0 0 9px 30px
    @media screen and (max-width 768px)
      padding-left 10px
  p
    padding 0 0 0 30px
    @media screen and (max-width 768px)
      padding-left 10px
    max-width 350px
  .btn-order
    margin-left 30px
</style>
