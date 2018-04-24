<template>
  <ul>
    <li>
      <label for="name">姓名：</label>
      <input type="text" id="name" v-test:name="rules" v-model="formData.name">
    </li>
    <li>
      <label for="password">密码：</label>
      <input type="text" id="password"  v-test:password="rules" v-model="formData.password">
    </li>
    <li>
      <label for="age">年龄：</label>
      <input type="text" id="age" v-test:age="rules" v-model="formData.age">
    </li>
    <li>
      <label for="email">邮箱：</label>
      <input type="text" id="email" v-test:email="rules" v-model="formData.email">
    </li>
    <li><button @click="submit">确认</button></li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        formData:{
          name:"",
          password:"",
          age:"",
          email:""
        },

        rules:{
          name:{
            reg:/[\u4e00-\u9fa5]/,
            msg:"请输入中文姓名"
          },

          password:{
            reg:/^[A-Za-z0-9]{6,12}$/,
            msg:"密码为大写+小写+数字(6-12位)"
          },

          age:{
            reg:/^[0-9]*$/,
            msg:"年龄只能为数字"
          },

          email:{
            reg:/^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/,
            msg:"邮箱格式有误"
          }

        }

      }

    },

    methods: {

      submit(){
        let {name,password,age,email} = this.formData

        if(name && password && age && email){
          console.log(this.formData)
        }else{
          alert("请检查输入内容")
        }
       
      }
    },

    mounted() {
      
    },

    directives: {
      test:{
        inserted(el, binding){

          let clearDom=function(){

            let $el=el.parentNode.getElementsByTagName("b")[0]

            if($el){
              el.parentNode.removeChild($el)
            }

          }
          let creatDom=function(msg,state){

            clearDom()

            let $el=document.createElement("b")

            $el.innerHTML=msg

            if(state){
                $el.style.color="green"
            }else{
                $el.style.color="red"
            }

            el.parentNode.appendChild($el)

          }
          el.onchange=()=>{

            let rulesArg=binding.value[binding.arg]
            
            if(rulesArg.reg.test(el.value)){
              creatDom("正确", true)
            }else{
              creatDom(rulesArg.msg, false)
            }

          }

        }

      }

    }

  }

</script>
<style scoped>
  ul li{
    list-style: none
  }
</style>