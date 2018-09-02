import { DatePicker, Notification, Carousel, CarouselItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
locale.use(lang);
Vue.use(DatePicker, {locale});
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.prototype.$notify = Notification;
