<template>
    <div class="wrap">
        <header class="Header">
            <div><img src="../static/image/gd.png" alt=""></div>
            <div>
                <div class="inp"><input type="text" placeholder="PLUS会员精选爆款"></div>
            </div>
            <div>登录</div>
        </header>
        <section class="Section">
            <div class="banner">
                <ul class="bannerCon swiper-wrapper">
                    <li class="swiper-slide"><img src="../static/image/banner1.png" alt=""></li>
                    <li class="swiper-slide"><img src="../static/image/banner2.png" alt=""></li>
                    <li class="swiper-slide"><img src="../static/image/banner3.png" alt=""></li>
                </ul>
                <ol class="swiper-container">
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
            <div class="menu">
                <dl>
                    <dt><img src="../static/image/ico1.png" alt=""></dt>
                    <dd>京东超市</dd>
                </dl>
                <dl>
                    <dt><img src="../static/image/ico2.png" alt=""></dt>
                    <dd>全球购</dd>
                </dl>
                <dl>
                    <dt><img src="../static/image/ico3.png" alt=""></dt>
                    <dd>京东服饰</dd>
                </dl>
                <dl>
                    <dt><img src="../static/image/ico4.png" alt=""></dt>
                    <dd>京东生鲜</dd>
                </dl>
                <dl>
                    <dt><img src="../static/image/ico5.png" alt=""></dt>
                    <dd>机票</dd>
                </dl>
                <dl>
                    <dt><img src="../static/image/ico5.png" alt=""></dt>
                    <dd>充值缴费</dd>
                </dl>
                <dl>
                    <dt><img src="../static/image/ico4.png" alt=""></dt>
                    <dd>9.9元拼</dd>
                </dl>
                <dl>
                    <dt><img src="../static/image/ico3.png" alt=""></dt>
                    <dd>领券</dd>
                </dl>
                <dl>
                    <dt><img src="../static/image/ico2.png" alt=""></dt>
                    <dd>赚钱</dd>
                </dl>
                <dl>
                    <dt><img src="../static/image/ico1.png" alt=""></dt>
                    <dd>物流查询</dd>
                </dl>
            </div>
            <div class="img"><img src="../static/image/menu.png" alt=""></div>
        </section>
        <footer class="Footer">
            <div><img src="../static/image/f1.png" alt=""></div>
            <div><img src="../static/image/f2.png" alt=""></div>
            <div><img src="../static/image/f3.png" alt=""></div>
            <div><img src="../static/image/f4.png" alt=""></div>
            <div><img src="../static/image/f5.png" alt=""></div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data(){
            return {
               
            }
        },
        methods: {
          
        },
         mounted() {
        var mSwiper=new Swiper('.banner',{
            autoplay:1000,
            loop:true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
        }
    }
   
</script>

<style>
@import "../css/style.css";
</style>