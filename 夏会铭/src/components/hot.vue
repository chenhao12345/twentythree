<template>
    <div>
        <div class="hotBox">
            <div class="left">
                <b>京东<span class="sp">快报</span></b>
            </div>
            <div class="center">
                <p><span>热:</span>试了九把剃须刀,这把最好用</p>
            </div>
            <div class="right">
                <span>更多</span>
            </div>
        </div>
        <div class="miao">
            <dl v-for="item in dataList">
                <dt><img :src="item.img"/></dt>
                <dd>
                    <p class="new">{{item.newPrice}}</p>
                    <p class="old">{{item.oldPrice}}</p>
                </dd>
            </dl>
        </div>
    </div>
   
</template>
<script>
    import axios from 'axios';
    export default {
        name:"",
        data(){
            return {
              dataList:[]
            }
         },
         mounted(){
             this.getData();
         },
         methods:{
            getData(){
                axios.get('/mia').then((res)=>{
                    
                    this.dataList = res.data;
                    console.log(this.dataList);
                })
            }
        }
       
    }
</script>
<style scoped>
    .hotBox{
        width:100%;
        height:0.8rem;
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
    .sp{
        display:inline-block;
        background:red;
        padding:0 0.1rem;
        color:#fff;
    }
    .center span{
        color:red;
    }
    .miao{
        width:100%;
        height:2.6rem;
        margin-top:0.2rem;
        overflow-x:scroll;
        display:flex;
        justify-content:space-around;
    }
    .miao dl{
        text-align:center;
    }
    .miao dl dt img{
        display:inline-block;
        height:1.6rem;
    }
    .old{
        font-size:0.24rem;
        color:#999;
        text-decoration:line-through;
    }
    .new{
        color:red;
        font-weight:bolder;
    }
</style>