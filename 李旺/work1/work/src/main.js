import Vue from "vue"
import app from "./components/app.vue"
import "./static/css/reset.css"
import "./directives/index.js"
import ajax from "./tool/ajax"
Vue.prototype.$ajax = ajax

var vm = new Vue({
    el: "#app",
    template: "<div><App /></div>",
    components: {
        App: app
    }
})