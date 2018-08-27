<template lang="pug">
  // Featured section starts 
  SECTION.section-featured
    .container
      .featured
        .featured__panel
          UL.featured__switcher
            li.active
              a(href="#") Featured
            li  
              a(href="#") New     
          BUTTON.btn-explore Explore all
        .featured__products
          .small-product.small-product-1
            .small-product__overlay
              BUTTON.small-product__btn-go
              h3 Fishnet Chair
              p Seat and back with upholstery made of cold cure foam
          .small-product.small-product-2
            .small-product__overlay
              BUTTON.small-product__btn-go
              h3 Fishnet Chair
              p Seat and back with upholstery made of cold cure foam
          .small-product.small-product-3
            .small-product__overlay
              BUTTON.small-product__btn-go
              h3 Fishnet Chair
              p Seat and back with upholstery made of cold cure foam
          .small-product.small-product-4
            .small-product__overlay
              BUTTON.small-product__btn-go
              h3 Fishnet Chair
              p Seat and back with upholstery made of cold cure foam
  // Featured section ends
</template>

<script>
export default {
  name: 'Featured'
}
</script>

<style lang="stylus" scoped>
.featured
  margin-top 112px

  &__panel
    margin 0 76px 0 98px
    @media screen and (max-width 768px)
      margin 0 2px 0 10px
    display flex
    justify-content space-between

  &__switcher
    list-style none
    border-bottom 1px solid #6c6c6c
    li
      display inline
      font-weight 700
      padding 0 22px 17px 8px
      @media screen and (max-width 600px)
        padding 0 10px 10px 2px
      a
        font-size 36px
        @media screen and (max-width 600px)
          font-size 20px
        color #6c6c6c
        text-decoration none
        letter-spacing -1px
        &:hover
          color rgb(156, 156, 156) !important
        &:active
          color rgb(217, 222, 225) !important
    .active
      padding 0 15px 14px 6px !important
      border-bottom 3px solid #212121 !important
      @media screen and (max-width 600px)
        padding 0 10px 8px 2px !important
    .active a
      color #212121 !important
      &:hover
        color rgb(108, 108, 108) !important
      &:active
        color rgb(217, 222, 225) !important
  .btn-explore
    @media screen and (max-width 600px)
      margin 0

  &__products
    margin 22px 67px 0 98px
    @media screen and (max-width 768px)
      margin 22px 10px 0 10px
    display flex
    flex-wrap wrap
    justify-content space-around

.small-product
  width 270px
  height 270px
  position relative
  margin 28px 28px 0 0
  @media screen and (max-width 768px)
    margin 28px 0 0 0
  border 1px solid rgb(217, 222, 225)
  &.small-product-1
    background url("../../assets/images/product-1.png") no-repeat
  &.small-product-2
    background url("../../assets/images/product-2.png") no-repeat
  &.small-product-3
    background url("../../assets/images/product-3.png") no-repeat
  &.small-product-4
    background url("../../assets/images/product-4.png") no-repeat
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
    background url("../../assets/images/arrow.png") no-repeat center
    box-shadow 0px 2px 4.85px 0.15px rgba(33, 33, 33, 0.35)
    background-size 12px 18px
    &:hover
      background-color rgba(33, 33, 33, 0.1)
    &:active
      box-shadow 0px 2px 4.85px 0.15px rgba(33, 33, 33, 0.1)
    transition all .25s
  &:hover .small-product__overlay
    position absolute
    left 0
    top 0
    display block
</style>
