<template>
    <div class="foot">
      <span><a href="javascript:;">首页</a></span>
      <span><a href="javascript:;">分类</a></span>
      <span><a href="javascript:;">发现</a> </span>
      <span><a href="javascript:;">购物车</a></span>
      <span><a href="javascript:;">我的</a> </span>
    </div>
</template>

<script>

  export default {
    name:"app",
    components:{
        
    }


  }
</script>
<style>
  .foot{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-top: 1px solid #ccc;
  }
  .foot span{
    flex:1;
    text-align: center;
  }
</style>
