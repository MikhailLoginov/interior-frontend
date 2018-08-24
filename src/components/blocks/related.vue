<template lang="pug">
  // Related section starts 
  SECTION.section-related
    .container
      .related
        .related__panel
          h2 Related Products
          BUTTON.btn-explore Explore all
        .related__products
          .product.product-1
            .product__overlay
              BUTTON.product__btn-go
              h3 Fishnet Chair
              h5 Seat and back with upholstery made of cold cure foam
          .product.product-2
            .product__overlay
              BUTTON.product__btn-go
              h3 Fishnet Chair
              h5 Seat and back with upholstery made of cold cure foam
          .product.product-3
            .product__overlay
              BUTTON.product__btn-go
              h3 Fishnet Chair
              h5 Seat and back with upholstery made of cold cure foam
  // Related section ends 
  
</template>

<script>
export default {
  name: "Related"
}
</script>

<style lang="stylus" scoped>
.related
  margin 237px 0 107px 0
  &__panel
    margin 0 76px 0 98px
    @media screen and (max-width 768px)
      margin 0 2px 0 10px
    display flex
    justify-content space-between
  .btn-explore
    margin 9px 0 0 1px
    @media screen and (max-width 768px)
      margin-top -5px
  &__products
    display flex
    flex-wrap wrap
    margin 35px 84px 50px 84px
    @media screen and (max-width 768px)
      margin 35px 10px 50px 10px
    justify-content space-around
</style>
