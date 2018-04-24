<template>
  <ul>
    <li>
      <label for="name">姓名：</label>
      <input type="text" id="name" v-infos:name="rules" v-model="forms.name">
    </li>
    <li>
      <label for="password">密码：</label>
      <input type="password" id="password"  v-infos:password="rules" v-model="forms.password">
    </li>
    <li>
      <label for="age">年龄：</label>
      <input type="text" id="age" v-infos:age="rules" v-model="forms.age">
    </li>
    <li>
      <label for="email">邮箱：</label>
      <input type="text" id="email" v-infos:email="rules" v-model="forms.email">
    </li>
    <li><span @click="clk">提交</span></li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        forms:{
          name:"",
          password:"",
          age:"",
          email:""
        },
        rules:{
          name:{
            reg:/[\u4e00-\u9fa5]/,
            msg:"请正确输入姓名"
          },
          password:{
            reg:/^[A-Za-z0-9]{6,12}$/,
            msg:"请正确输入密码"
          },
          age:{
            reg:/^[0-9]*$/,
            msg:"请正确输入年龄"
          },
          email:{
            reg:/^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/,
            msg:"请正确输入邮箱"
          }
        }
      }
    },
    methods: {
      clk(){
        let {name,password,age,email}=this.forms
        if(name&&password&&age&&email){
          console.log(this.formData)
        }else{
          alert("请填写正确的信息")
        }
       
      }
    },
    directives: {
      infos:{
        inserted(el,binding){
       // 创建
          let creatDom=function(msg,state){
            let $el=document.createElement("b")
            $el.innerHTML=msg
            if(state){
                $el.style.color="green"
            }else{
              $el.style.color="orange"
            }
            el.parentNode.appendChild($el)
          }
          el.onchange=()=>{
           
            let rulesArg=binding.value[binding.arg]
            console.log(rulesArg)
            if(rulesArg.reg.test(el.value)){
              // console.log("ok")
              creatDom("ok",true)
            }else{
              creatDom(rulesArg.msg,false)
            }
            
          }
        }
      }
    }
  }
</script>
<style scoped>
 ul{
   list-style: none
 }
ul li{
  line-height:30px;
}
 span{
 width:70px;
 height:20px;
 display:block;
 background:#cfc;
 text-align:center;
 line-height:20px;
 border-radius:7%;
 }
</style>