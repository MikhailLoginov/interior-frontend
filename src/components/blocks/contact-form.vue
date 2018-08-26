
<template lang="pug">
  SECTION.section-contact-form
    .container
      .contact-form
        .contact-form__top-panel
          h1 Contact Us
        form
          input(type="text" placeholder="Name" v-model="name" v-bind:class="nameValError").contact-form__input
          input(type="tel" placeholder="Phone" v-model="phone" v-bind:class="phoneValError").contact-form__input
          input(type="email" placeholder="E-mail" v-model="email" v-bind:class="emailValError").contact-form__input
          .contact-form__city-group
            input(type="text" aria-label="Text input with dropdown button" placeholder="Enter your city"
              v-on:keyup="searchCities" v-model="cityName").contact-form__city-input
            .contact-form__city-dropdown
              button(type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
                v-on:click="openDropdown").btn-dropdown Choose a city
              div(x-placement="bottom-start" v-show="inputFocused").contact-form__dropdown-menu
                a(v-for="city in cities" v-bind:key="city.matching_full_name" 
                  v-on:click="choiceTheCity(city.matching_full_name)").contact-form__dropdown-item {{city.matching_full_name}}
          <div class="contact-form__date-form">
            <span class="contact-form__date-label">Enter your birthday</span>
            <el-date-picker class="contact-form__date-input" v-model="datevalue" type="date" placeholder="YYYY-MM-DD"></el-date-picker>
          </div>
          textarea(type="text" placeholder="Tell us what you think").contact-form__text-input
          button(type="submit" v-on:click.prevent="validate").btn-order Submit
          div(v-bind:class="messageClass") {{messageText}}
</template>

<script>

export default {
  name: "ContactForm",
  data: function() {
    return {
      cities: [],
      inputFocused: false,
      name: "",
      email: "",
      phone: "",
      cityName: "",
      nameValError: "",
      phoneValError: "",
      emailValError: "",
      messageClass: "",
      messageText: "",
      datevalue: ""
    };
  },
  methods: {
    validateForm() {
      if (/[^a-z^A-Z]/.test(this.name) || this.name == "") {
        throw Error('Enter correct name');
      }
      if (!/^\+\d\(\d{3}\)\d{3}-\d{4}$/.test(this.phone) || this.phone == "") {
        throw Error('Phone must be in format +1(123)456-7890');
      }
      if (!/^\w{2,}(\.\w{2,})?(-\w{2,})?@[a-zA-Z_]{2,}\.[a-zA-Z]{2,}$/.test(this.email) || this.email == "") {
        throw Error('Enter correct email');
      }
    },
    validate() {
      this.nameValError = "";
      this.phoneValError = "";
      this.emailValError = "";
      try {
        this.validateForm();
        this.successMessage("Sent successfully!");
      } catch (err) {
        if (err.message.indexOf("name") > -1) {
          this.nameValError = "contact-form__error";
        } else if (err.message.indexOf("Phone") > -1) {
          this.phoneValError = "contact-form__error";
        } else if (err.message.indexOf("email") > -1) {
          this.emailValError = "contact-form__error";
        }
        this.errorMessage(err.message);
      }
    },
    openDropdown() {
      if (this.inputFocused == false) {
        fetch('https://api.teleport.org/api/cities/').then(res => {
          return res.json();
        }).then(data => {
          this.cities = data._embedded["city:search-results"];
        });
        this.inputFocused = true;
      } else {
        this.inputFocused = false;
      }
    },
    searchCities() {
      fetch(`https://api.teleport.org/api/cities/?search=${this.cityName}`).then(res => {
        return res.json();
      }).then(data => {
        this.cities = data._embedded["city:search-results"];
      });
      if (this.inputFocused == false) {
        this.inputFocused = true;
      }
    },
    choiceTheCity(city) {
      this.cityName = city;
      this.inputFocused = false;
    },
    successMessage(text) {
      this.$notify.success({
        title: 'Success',
        message: text
      });
    },
    errorMessage(text) {
      this.$notify.error({
        title: 'Error',
        message: text
      });
    }
  }
}
</script>

<style lang="stylus" scoped>

@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

.contact-form
  &__top-panel
    padding 244px 0 44px 99px
    background-color #f5f5f5
    h1
      letter-spacing -4px
    @media screen and (max-width 768px)
      padding 250px 0 44px 10px

  .btn-order
    width 150px
    margin-top 10px
    &:hover
      background url("../../assets/images/arrow.png") no-repeat 155px 15px

  form 
    display flex
    flex-direction column
    margin 20px 100px
    max-width 450px
    @media screen and (max-width 768px)
      margin 20px
    @media screen and (max-width 450px)
      margin 20px 5px

  &__input
    width 100%
    height 48px
    padding 0 19px
    background-color #ffffff
    border 1px solid rgb(217, 222, 225)
    color #6c6c6c
    font-weight 300
    font-size 14px
    letter-spacing 0.55px
    margin 5px 0
    box-sizing border-box
  &__city-group
    height 48px
    display flex
    width 100%
    margin 5px 0
    box-sizing border-box
  &__city-input
    height 48px
    padding 0 19px
    background-color #ffffff
    border 1px solid rgb(217, 222, 225)
    color #6c6c6c
    font-weight 300
    font-size 14px
    letter-spacing 0.55px
    width 75%
  &__city-dropdown
    position relative
  .btn-dropdown
    height 48px
    cursor pointer
    width 120px
    &:hover
      color grey
    &:active
      opacity 0.7
  &__dropdown-menu
    position absolute
    z-index 1
    width 450px
    display flex
    flex-direction column
    background-color white
    border 1px solid rgb(217, 222, 225)
    padding 10px
    @media screen and (max-width 450px)
      width 300px
    will-change transform
    left -330px
    margin-top 5px
    box-sizing border-box
  &__text-input
    width 100%
    height 148px
    padding 14px 19px
    background-color #ffffff
    border 1px solid rgb(217, 222, 225)
    color #6c6c6c
    font-weight 300
    font-size 14px
    letter-spacing 0.55px
    margin 5px 0
    font-family Arial, sans-serif
    font-weight 400
    box-sizing border-box
  &__dropdown-item
    cursor pointer
    margin 5px 9px
    font-weight 300
    &:hover
      font-weight 600
  &__date-label
    font-size 14px
    font-weight 300
    font-family Arial, sans-serif
    color #6c6c6c
    margin-left 20px
  &__date-form 
    height 48px
    margin 5px 0
    display flex
    justify-content space-between
    align-items center
  &__date-input
    height 100%
  &__error
    border 2px solid #f8d7da
    animation bounce 0.5s
  &__message-success
    margin-top 5px
    color #155724
    background-color #d4edda
    border 1px solid #c3e6cb
    height 50px
    line-height 50px
    padding 0 19px
    border-radius 5px
  &__message-error
    margin-top 5px
    color #721c24
    background-color #f8d7da
    border 1px solid #f5c6cb
    height 50px
    line-height 50px
    padding 0 19px
    border-radius 5px
</style>

<style lang="stylus">
.el-input__inner
  height 48px
</style>
