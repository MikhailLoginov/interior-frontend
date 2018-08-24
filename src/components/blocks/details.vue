<template lang="pug">
  // Details section starts 
  SECTION.section-details
    .container
      .details
        .products-menu
          ul
            li.active
              a(href="#")
                h3 ALL
            li
              a(href="#")
                h3 HOME
            li
              a(href="#")
                h3 OFFICE
            li
              a(href="#")
                h3 FURNITURE
            li
              a(href="#")
                h3 MODERN
            li
              a(href="#")
                h3 CLASSIC
        .details__content
          .details__product
            .details__big-pic
            .details__preview
              .details__product-preview.preview-1
              .details__product-preview.preview-2
              .details__product-preview.preview-3.active
          .details__info
            h2 Fishnet Chair
            h3 HOT DEAL
            .price
              .price__currency $
              .price__amount 36.7
              .price__other /sq
            BUTTON.btn-order ORDER US
            .details__text
              p The majesty of Mountains - Ugmonk style.
              p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptatem, provident voluptatibus.
              p Quam nulla assumenda suscipit voluptate? Inventore natus amet sit minima facilis aliquam maiores error dolorum consequuntur, expedita laboriosam deserunt ipsa, commodi.
              p Facere repellendus deleniti sint ut quisquam nisi magnam quam itaque dignissimos odio, facilis perferendis. Nihil accusantium ullam earum et ad quod eaque tempore.
              
  // Details section ends 
  
</template>

<script>
export default {
  name: "Details"
}
</script>

<style lang="stylus" scoped>
.details
  margin 120px 0 0 0
  @media screen and (max-width 380px)
    margin-top 200px
  &__content
    margin 70px 97px 100px 97px
    display flex
    justify-content space-between
    @media screen and (max-width 1300px)
      flex-wrap wrap
      justify-content space-around
      margin 70px 10px 100px 10px
    @media screen and (max-width 1100px)
      flex-direction column
      align-items center
  &__product
    display flex
    flex-direction column
    width 570px
    @media screen and (max-width 590px)
      width 100%
  &__big-pic
    height 570px
    background url("../../assets/images/product1.jpg") no-repeat left
  &__preview
    display flex
    justify-content center
    margin 12px 35px 0 0
    .active
      opacity 0.3
  &__product-preview
    width 70px
    height 70px
    cursor pointer
    margin 0 5px
    transition all 0.25s
    &.preview-1
      background url("../../assets/images/preview-1.jpg") no-repeat
    &.preview-2
      background url("../../assets/images/preview-2.jpg") no-repeat
    &.preview-3
      background url("../../assets/images/preview-3.jpg") no-repeat
    &:hover
      opacity 0.8
    &:active
      opacity 0.6
  &__info
    max-width 488px
    display flex
    align-items center
    flex-direction column
    margin 0 42px 0 0
    @media screen and (max-width 1300px)
      margin 0
    @media screen and (max-width 1100px)
      margin-top 30px
    h2
      margin-top 41px
      letter-spacing -1.2px
    h3
      margin-top 10px
      color rgb(229, 57, 53)

  &__text
    margin 29px 0 0 -10px
    @media screen and (max-width 440px)
      margin 29px 5px 0 5px
      font-size 12px
    p
      margin 15px 0 0 0
      line-height 23px
  .btn-order
    width 96%
    background-color #f44336
    color white
    text-align center
    height 71px
    border-radius 35px
    padding 0 40px 0 2px
    margin 20px 5px 0 0
    font-size 22px
    letter-spacing 4.4px
    @media screen and (max-width 440px)
      padding 0
      width 300px
    &:hover
      background #f44336 url("../../assets/images/white-arrow.png") no-repeat 350px 22px
      @media screen and (max-width 440px)
        background #f44336 url("../../assets/images/white-arrow.png") no-repeat 250px 22px
    &:active
      box-shadow none


.products-menu
  height 70px
  background-color #f4f4f4
  display flex
  align-items center
  justify-content center
  ul
    list-style none
    li
      display inline
      margin 0 28px 0 0
      &:last-child
        margin 0
      a
        h3
          display inline
          transition all .25s
          @media screen and (max-width 768px)
            font-size 14px
          color #6c6c6c
          &:hover
            color rgba(108,108,108,.7)
          &:active
            color rgba(108,108,108,.4)
  .active a h3
    color #212121

.price
  margin 13px 0 0 0
  font-family Gotham, Montserrat, sans-serif
  font-weight 300
  display flex
  align-items flex-end
  &__currency
    font-size 36px
    margin 0 14px 8px 0
  &__amount
    font-size 72px
  &__other
    font-size 36px
    margin 0 0 8px 0
</style>
