<template>
    <main class="main">
        <div class="banner">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="item in imgs">
                    <img :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination page"  slot="pagination"></div>
		    </swiper>
        </div>
        <navlist/>
        <hot/>
    </main>
</template>
<script>
    import {swiper,swiperSlide} from "vue-awesome-swiper";
    import './register';
    import navlist from './navlist';
    import hot from './hot';
    export default {
        name:"",
        data(){
            return {
                imgs:[
                    "../../image/swiper1.jpg",
                    "../../image/swiper2.jpg",
                    "../../image/swiper3.jpg",
                    "../../image/swiper4.jpg",
                    "../../image/swiper5.jpg",
                    "../../image/swiper6.jpg",
                    "../../image/swiper7.jpg",
                    "../../image/swiper8.jpg"
                ],
			    swiperOption: {
                    autoplayDisableOnInteraction:false,
                    autoplay: true,
                    effect:"coverflow",
                    paginationType:"bullets",
		            pagination : '.swiper-pagination',
		            paginationClickable :true,
     		    }
		    }
        },
        componetns:{
            swiper,
            swiperSlide,
            navlist,
            hot
        },
        computed:{
            swiper(){
                return this.$refs.mySwiper.swiper
            }
        }
    }
</script>
<style scoped>
    .banner{
        width:100%;
        height:3.6rem;
    }
    .banner img{
        display:block;
        width:100%;
        height:100%;
    }
    
</style>