// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

const BASE_URL = process.env.VUE_DEV_SERVER_URL;

module.exports = {
  'main page is loaded': (browser) => {
    browser
      .url(BASE_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hero__content')
      .end();
  },
  'showroom is loaded': (browser) => {
    browser
      .url(BASE_URL)
      .waitForElementVisible('#app', 5000)
      .click('a[href="/showroom"]')
      .waitForElementVisible('#product', 5000)
      .assert.elementPresent('.products-range')
      .end();
  },
  'cart is loaded': (browser) => {
    browser
      .url(BASE_URL)
      .waitForElementVisible('#app', 5000)
      .click('a[href="/cart"]')
      .waitForElementVisible('.empty-cart', 5000)
      .assert.containsText('.empty-cart',"cart is empty")
      .end();
  },
  'product can be added to the cart': (browser) => {
    browser
      .url(BASE_URL)
      .waitForElementVisible('#app', 5000)
      .click('a[href="/showroom"]')
      .waitForElementVisible('.product.product-1', 5000)
      .moveToElement('.product.product-1', 10, 10)
      .waitForElementVisible('.product-1 > .product__overlay', 5000)
      .click('.product__btn-go')
      .assert.containsText('a[href="/cart"] > span',"1")
      .click('a[href="/cart"]')
      .waitForElementVisible('#cart', 5000)
      .assert.elementPresent('.product.product-1')
      .end();
  },
};
