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
  // Header ends 
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
header
  position absolute
  width 100%
  z-index 1
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

</style>
