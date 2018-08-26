<template lang="pug">
  // Header starts 
  HEADER
    .container
      .header
        <router-link to="/">
          img(src="../../assets/images/logo.png" alt="logo")
        </router-link>
        NAV
          ul.nav-menu
            li
              <router-link to="/">Home</router-link>
            li
              A(href="") Products
            li
              //A(href="#") History
              <router-link to="/product">History</router-link>
            li
              <router-link to="/showroom">Showroom</router-link>
            li
              <router-link to="/contacts">Contact</router-link>
          A(href="#")
            img(src="../../assets/images/search.png" alt="search")
          A(href="#")
            <svg aria-hidden="true" data-prefix="fas" data-icon="shopping-cart" class="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
            SPAN {{cart.length}}
  // Header ends 
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      cart: []
    }
  }
}
</script>

<style lang="stylus" scoped>
header
  position absolute
  width 100%
  z-index 3
  left 0
  top 0

.header
  padding 63px 167px 0 98px
  display flex
  justify-content space-between
  flex-wrap wrap
  @media screen and (max-width 1100px)
    padding 63px 15px 0 98px
    a img
      margin-bottom 30px
  @media screen and (max-width 866px)
    padding 20px 10px 0 10px

nav 
  display flex

.nav-menu
  list-style none
  @media screen and (max-width 600px)
    display flex
    flex-direction column
  li
    float left
    text-align center
    width 100px
    &:first-child
      width 74px
    &:nth-child(2)
      width 116px
    &:nth-child(3)
      width 97px
    &:nth-child(4)
      width 122px
    &:nth-child(5)
      width 118px
      @media screen and (max-width 600px)
        width 108px
    a
      padding 0 15px 10px 15px
      width 100%
      text-decoration none
      color #8c8c8c
      font-size 14px
      font-weight 500
      text-transform uppercase
      text-align center
      @media screen and (max-width 600px)
        text-align left
      letter-spacing 1.1px
      transition all .25s
      &:hover
        border-bottom 3px solid #212121
        color #212121
        font-weight 700
        @media screen and (max-width 600px)
          border-bottom none
      &:active
        border-bottom 3px solid rgb(217, 222, 225)
        color rgb(217, 222, 225)
        font-weight 700

.fa-shopping-cart
  width 30px
  height 30px
</style>
