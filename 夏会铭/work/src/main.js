import Vue from "vue";
import jdlist from './components/jdlist';
import ajax from "./tool/ajax";
import mock from '../mock/mock';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);
Vue.prototype.$ajax = ajax
var vm = new Vue({
    el: "#app",
    template: "<div class='wrap'><jdlist/></div>",
    components: {
        jdlist
    }
})