<template lang="pug">
  // Products-range section starts 
  SECTION.section-products-range
    .container
      .products-range
        .products-range__top-panel
          h1 Our Products Range
        UL.products-range__switcher
          li.active
            a(href="#") 
              h3 All
          li
            a(href="#")
              h3 Home
          li
            a(href="#")
              h3 Office
          li
            a(href="#")
              h3 Furniture
          li
            a(href="#")
              h3 Modern
          li
            a(href="#")
              h3 Classic
        .products-range__products
          .product(v-for="product in $root.products.slice(0,currLength)" :key="product.id" :class="getProductClass(product)" draggable="true" @dragstart="dragStart(product)" 
            :style="{ 'background' : 'url(' + product.image + ') no-repeat center', 'background-size' : 'cover' }")
            .product__overlay
              BUTTON(@click="$root.cart.push(product)").product__btn-go
              h3 {{product.name}}
              p {{product.description}}        
        .products-range__bottom-panel
          BUTTON(@click="currLength+=3" v-show="$root.products[currLength]").btn-show-more
  // Products-range section ends 
  
</template>

<script>

export default {
  name: "ProductsRange",
  data() {
    return {
      currLength: 6
    }
  },
  methods: {
    getProductClass(product) {
      return `product-${product.id}`;
    },
    dragStart(product) {
      this.$root.currProduct = JSON.parse(JSON.stringify(product));
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
    li
      display inline-block
      @media screen and (max-width 560px)
        display block
      font-weight 700
      padding 0 17px 17px 0
      margin-right 7px
      @media screen and (max-width 800px)
        padding 0 10px 10px 2px
      h3
        text-transform uppercase
        @media screen and (max-width 768px)
          font-size 14px
        color #6c6c6c
        text-decoration none
        &:hover
          color rgb(156, 156, 156) !important
        &:active
          color rgb(217, 222, 225) !important
      &.active
        padding 0 29px 15px 5px !important
        border-bottom 3px solid #212121 !important
        @media screen and (max-width 600px)
          padding 0 10px 8px 2px !important
        @media screen and (max-width 560px)
          border none !important
        h3
          color #212121 !important
          &:hover
            color rgb(108, 108, 108) !important
          &:active
            color rgb(217, 222, 225) !important
  .btn-explore
    @media screen and (max-width 600px)
      margin 0

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
