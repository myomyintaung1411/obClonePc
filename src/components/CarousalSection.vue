  <script setup>
  import {reactive,computed} from 'vue'
  import { Swiper, SwiperSlide } from "swiper/vue";
  import 'swiper/css';
  import 'swiper/css/effect-fade';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';


  
  </script>

<template>
    <section class="w-full h-[550px]  relative">
    <swiper :effect="'fade'" :loop="true"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"  
    :modules="[Autoplay,Pagination,Navigation,EffectFade]" class="mySwiper h-full w-full"
    :autoplay='{
    "delay": 2500,
    "disableOnInteraction": false,
  }'
    >
    <swiper-slide v-for="n in 5" :key="n">
        <img v-if="n == 0" src="http://ht1.els.best/uploads/images/781cba08e4241d1aeac53a0b5843d808.jpg" alt="" class="w-full h-[550px] object-cover">
        <img v-if="n == 1" src="http://ht1.els.best/uploads/images/8ce76b6b1c5f2c8d1204cef7d17a0a16.jpg" alt="" class="w-full h-[550px] object-cover">
        <img v-if="n == 2" src="http://ht1.els.best/uploads/images/7dc9570ad0c20e98edfdcafd1f7b34ac.jpg" alt="" class="w-full h-[550px] object-cover">
        <img v-if="n == 3" src="http://ht1.els.best/uploads/images/86f4c907baaa4837bdcb397bd67c2e06.jpg" alt="" class="w-full h-[550px] object-cover">
        <img v-else src="http://ht1.els.best/uploads/images/0bd1d53d6d146186b319a1fcde6ac2c2.jpg" alt="" class="w-full h-[550px] object-cover">
    </swiper-slide>


  </swiper>
    </section>
</template>


<style >
  .swiper-pagination-bullet {
        background-color: #7490ff;
        width: 1rem;
        height: 1rem;
    }

    .swiper-button-prev{
      background: rgba(0, 0, 0, .4) !important;
      padding: 30px 20px !important;
      height: 20px !important;
      width: 10px !important;
      /* border-radius: 10px; */
      position: absolute;
      left: 0;
      color:white !important;
      font-size: 10px !important;
      z-index: 999 !important;
      
    }
    .swiper-button-next{
      background: rgba(0, 0, 0, .4) !important;
      padding: 30px 20px !important;
      height: 20px !important;
      width: 10px !important;
      /* border-radius: 10px; */
      position: absolute;
      right: 0;
      color:white !important;
      font-size: 10px !important;
      z-index: 999 !important;
      
    }
    .swiper-button-next:after{
      font-size: 30px !important;
    }
    .swiper-button-prev:after{
      font-size: 30px !important;
    }

    /* .swiper-pagination {
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    width: 5rem;
    height: 5rem;

} */
</style>