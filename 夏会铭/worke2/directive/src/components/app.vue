<template>
    <div>
      <forms />
      <h4>{{info}}</h4>
      <h3 v-add:click="fns">{{count}}</h3>
    </div>
</template>

<script>
import forms from "./form"
import kid from "./kid"
  export default {
  components:{
    forms
  },
    name:"app",
    data(){
        return {
          info:"hello world",
          count:0
        }
    },
    methods:{
      fns(){
        this.count++;
      }
    },
    //自定义指令
    directives:{
      add:{
        bind(el,binding){
          console.log("bb");
        },
        inserted(el){
          el.onclick=()=>{
            console.log('++');
          }
        }
      }
    }
  }
</script>