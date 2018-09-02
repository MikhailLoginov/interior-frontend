<template lang="pug">
  // Products-range section starts 
  SECTION.section-products-range
    .container
      .products-range
        .products-range__top-panel
          h1 Your Cart
        .products-range__products
          .product(v-for="product in $root.cart" :class="getProductClass(product)")
            .product__overlay
              BUTTON.product__btn-go
              h3 {{product.name}}
              p {{product.description}}
        BUTTON(v-show="$root.cart.length != 0").btn-order Order Now
        .empty-cart(v-show="$root.cart.length == 0") Your cart is empty
  // Products-range section ends 
  
</template>

<script>

export default {
  name: "CartComp",
  methods: {
    getProductClass(product) {
      return `product-${product.id}`;
    }
  }
}
</script>

<style lang="stylus" scoped>
.products-range
  &__top-panel
    padding 244px 0 44px 99px
    background-color #f5f5f5
    h1
      letter-spacing -4px
    @media screen and (max-width 768px)
      padding 250px 0 44px 10px

  &__switcher
    position relative
    list-style none
    margin 62px 0 0 100px
    letter-spacing 2px
    transition all .25s
    &:after
      content ""
      border-bottom 1px solid #6c6c6c
      position absolute
      bottom 0
      left 0
      width 300px
    @media screen and (max-width 768px)
      margin 50px 0 0 10px
  .btn-explore
    @media screen and (max-width 600px)
      margin 0

  .btn-order
    width 200px
    margin-left 100px
    &:hover
      background url("../../assets/images/arrow.png") no-repeat 193px 16px
      color #212121

  .empty-cart
    margin 100px

  &__products
    margin 35px 82px 0 82px
    @media screen and (max-width 768px)
      margin 22px 10px 0 10px
    display flex
    flex-wrap wrap
    justify-content space-around


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
      margin-top 19px
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
    background url("/assets/images/arrow.png") no-repeat center
    background-size 12px 18px
    box-shadow 0px 2px 4.85px 0.15px rgba(33, 33, 33, 0.35)
    &:hover
      background-color rgba(33, 33, 33, 0.1)
    &:active
      background-color rgba(33, 33, 33, 0.25)
    transition all .25s
  &:hover .small-product__overlay
    position absolute
    left 0
    top 0
    display block
  &__bottom-panel
    margin 38px 0 125px 0
    display flex
    justify-content center
  .btn-show-more
    float center
</style>
