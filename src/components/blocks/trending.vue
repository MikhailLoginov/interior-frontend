<template lang="pug">
  // Trending section starts 
  SECTION.section-trending
    .container
      .trending
        .trending__panel
          h2 Trending Products
          BUTTON.btn-explore Explore all
        .trending__products
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
          .product.product-4
            .product__overlay
              BUTTON.product__btn-go
              h3 Fishnet Chair
              h5 Seat and back with upholstery made of cold cure foam
          .product.product-5
            .product__overlay
              BUTTON.product__btn-go
              h3 Fishnet Chair
              h5 Seat and back with upholstery made of cold cure foam
          .product.product-6
            .product__overlay
              BUTTON.product__btn-go
              h3 Fishnet Chair
              h5 Seat and back with upholstery made of cold cure foam
  // Trending section ends 
  
</template>

<script>
export default {
  name: "Trending"
}
</script>

<style lang="stylus" scoped>
.trending
  margin-top 112px
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
