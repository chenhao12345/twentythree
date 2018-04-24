import Vue from "vue"
import app  from "./components/app.vue"
import ajax from "./tool/ajax.js"
import './components/register.js'
Vue.prototype.$ajax=ajax

var vm=new Vue({
  el:"#app",
  template:"<App/>",
  components:{
    App:app
  }
})