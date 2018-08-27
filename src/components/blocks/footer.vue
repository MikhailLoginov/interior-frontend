<template lang="pug">
  // Footer starts 
  FOOTER
    .container
      .footer
        .content
          .content__contacts
            h3 Contact us
            p 132A Bridge Road Richmond VIC Australia.
            p Talk to us on 1300 132 info@interior.com
          .content__info
            h3 Useful Information
            .content__links
              .content__col-1
                A(href="#") Sales Terms
                A(href="#") Customer Care
                A(href="#") Delivery
              .content__col-2
                A(href="#") Architect Accounts
                A(href="#") Careers
                A(href="#") Exchanges & Returns
          .content__stay-in-touch
            h3 Let's stay in touch!
            p Subscribe to know about our latest news, products and special offers just for subscribers.
            .email-input
              INPUT(type="email", placeholder="your email address")
              BUTTON.email-input__btn-submit
        .bot-panel
          .bot-panel__copyright
            | &copy; COPYRIGHT - INTERIOR 2016. ALL RIGHTS RESERVED.
          .bot-panel__links
            a(href="")
              img(src="../../assets/images/icon-facebook.png" alt="facebook")
            a(href="")
              img(src="../../assets/images/icon-twitter.png" alt="twitter")
            a(href="")
              img(src="../../assets/images/icon-googleplus.png" alt="googleplus")
            a(href="")
              img(src="../../assets/images/icon-p.png" alt="p")
          .bot-panel__privacy
            A(href="#") TERMS & CONDITIONS
            |  / 
            A(href="#") PRIVACY POLICY & COOKIES
  // Footer ends
  
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="stylus" scoped>
footer
  background-color #f7f7f7

.footer
  padding 116px 88px 20px 99px
  @media screen and (max-width 768px)
    padding 116px 10px 20px 10px

.content
  display flex
  flex-wrap wrap
  justify-content space-between
  h3
    color #6c6c6c
    text-transform uppercase
  a
    text-transform uppercase
  p
    color #212121
    font-size 14px
    font-weight 300
    line-height 22px
    margin 14px 0 22px 0
    letter-spacing -0.15px
  &__contacts
    padding-right 5px
    p
      max-width 225px
  &__info
    margin-right 15px
    margin-left 70px
    @media screen and (max-width 1300px)
      margin-left 0
      margin-right 0
    @media screen and (max-width 920px)
      margin 40px 0 0 0
  &__links
    margin-top 17px
    display flex
    @media screen and (max-width 500px)
      flex-wrap wrap
    a
      margin-bottom 8px
  &__col-1
    display flex
    flex-direction column
    width 184px
    margin-right 50px
  &__col-2
    display flex
    flex-direction column
    width 200px
    margin-right 50px
    @media screen and (max-width 768px)
      margin-right 5px
  &__stay-in-touch
    @media screen and (max-width 1300px)
      margin-top 50px
    p
      max-width 380px
  
.bot-panel
  margin 49px 10px 0 0
  display flex
  flex-wrap wrap
  justify-content space-between
  @media screen and (max-width 1100px)
    flex-direction column
    min-height 100px
    align-items center
  letter-spacing 0.36px
  color #6c6c6c
  font-size 12px
  font-weight 700
  a
    letter-spacing 0.36px
    color #6c6c6c
    font-size 12px
    font-weight 700
    &:hover
      color #212121
    &:active
      color black
  &__links
    height 28px
    margin -7px 0 0 -20px
    a
      margin-right 1px
      &:hover
        opacity 0.7
      &:active
        opacity 0.4
    a:first-child
      margin-right 3px
</style>
