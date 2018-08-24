<template lang="pug">
  // Contacts section starts 
  SECTION.section-contacts
    .container
      .contacts
        .contacts__top-panel
          h1 Contact Us
        .contacts__content
          - for(let j = 0; j < 3; j++)
            .contact-card
              img(src="../../assets/images/icon-location.png" alt="location")
              h3 CALIFORNIA
              h5.ttl Phone:
              a(href="tel:190012345678")
                h5.strong 1900 - 1234 - 5678
              h5.ttl Email:
              a(href="mailto:info@interior.com")
                h5.strong info@interior.com
              h5.ttl Address:
              h5 12 W 1st St. 90001 Los Angeles, California
  // Contacts section ends 
  
</template>

<script>
export default {
  name: "Contacts"
}
</script>

<style lang="stylus" scoped>
.contacts
  &__top-panel
    padding 244px 0 44px 99px
    background-color #f5f5f5
    h1
      letter-spacing -4px
    @media screen and (max-width 768px)
      padding 250px 0 44px 10px
  
  &__content
    display flex
    justify-content space-around
    flex-wrap wrap
    margin 57px 83px 112px 83px
    @media screen and (max-width 768px)
      margin 67px 0 122px 0
  
.contact-card
  width 368px
  height 368px
  text-align center
  border 1px solid #9c9c9c
  margin 10px
  img
    margin 47px 0 26px 0
  h3
    font-size 20px
    color #212121
    letter-spacing 0.6px
    margin-bottom 12px
  .ttl
    font-weight 700
    margin 6px 0 -2px 0
</style>
