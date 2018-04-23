import Vue from "vue"
import app  from "./components/app.vue"
import ajax from "./tool/ajax.js"
import './components/register.js'
import "./css/swiper-3.4.2.min.css"
import "./js/swiper-3.4.2.min.js"
Vue.prototype.$ajax=ajax

var vm=new Vue({
  el:"#app",
  template:"<App/>",
  components:{
    App:app
  }
})