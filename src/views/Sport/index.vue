<template>
    <section class="realbet relative w-full">
        <div class="bg_img">
            <div class="mx-auto max-w-[1320px] h-full flex items-center justify-center relative ">
                <div class=" w-[490px] h-[376px] flex flex-col  ">
                    <img v-if="acitve_btn === 0" src="http://ht1.els.best/uploads/images/agty.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 1" src="http://ht1.els.best/uploads/images/obgty_sport_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 2" src="http://ht1.els.best/uploads/images/xsbo_sport_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 3" src="http://ht1.els.best/uploads/images/sbtest_sport_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 4" src="http://ht1.els.best/uploads/images/bbin_sport_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 5" src="http://ht1.els.best/uploads/images/oap_sport_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 6" src="http://ht1.els.best/uploads/images/cmd_sport_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 7" src="http://ht1.els.best/uploads/images/fbty.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 8" src="http://ht1.els.best/uploads/images/xjty.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                
                <div class="  text-base text-[#3651a8] mt-2 animate-fadeleft " style="line-height:30px">倾力打造的刺激火爆的体育娱乐游戏，每天为您提供千场精彩体育赛事，多种娱乐方式选择，让您拥有完美游戏体验。</div>

                 <a class="pt-7  cursor-pointer animate-fadeleft   ">
                    <img src="http://mb1.els.best/static/image/btn.1cfd2c8e17e20f1631dd11d7504e717d.png" alt="" class="  w-40 transform-origin-center transition-transform duration-300 hover:scale-110">
                 </a>
                </div>
                <!--  -->
                <section class="img_section w-[800px] h-[800px] pointer-events-none relative">
                    <img v-if="acitve_btn !== 1 && acitve_btn !== 2 && acitve_btn !== 3" src="http://mb1.els.best/static/image/sport/0.png" alt="" class="w-full -ml-[90px] animate-fade">
                    <img v-else-if="acitve_btn === 1" src="http://mb1.els.best/static/image/sport/1.png" alt="" class="w-full -ml-[90px] animate-fade">
                    <img v-else-if="acitve_btn === 2" src="http://mb1.els.best/static/image/sport/2.png" alt="" class="w-full -ml-[90px] animate-fade">
                    <img v-else-if="acitve_btn === 3" src="http://mb1.els.best/static/image/sport/9.png" alt="" class="w-full -ml-[90px] animate-fade">
                </section>
                <ul class="list-none mt-3 flex flex-col -ml-[132px]">
                    <li @click="gameClick(0)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 0" src="http://ht1.els.best/uploads/images/agty01.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/agty02.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(1)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 1" src="http://ht1.els.best/uploads/images/obgty_sport_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/obgty_sport_inactive.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(2)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 2" src="http://ht1.els.best/uploads/images/xsbo_sport_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/xsbo_sport_inactive.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(3)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 3" src="http://ht1.els.best/uploads/images/sbtest_sport_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/sbtest_sport_inactive.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(4)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 4" src="http://ht1.els.best/uploads/images/bbin_sport_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/bbin_sport_inactive.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(5)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 5" src="http://ht1.els.best/uploads/images/oap_sport_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/oap_sport_inactive.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(6)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 6" src="http://ht1.els.best/uploads/images/cmd_sport_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/cmd_sport_inactive.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(7)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 7" src="http://ht1.els.best/uploads/images/fbty01.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/fbty02.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(8)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 8" src="http://ht1.els.best/uploads/images/xjty01.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/xjty02.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                </ul>
                <img src="http://mb1.els.best/static/image/anm-ob-1.e2d93640f3456429c6182d1aac07e3c8.png" alt="" class="w-20 absolute bottom-20 left-[235px] animate-bounce">
                <img src="http://mb1.els.best/static/image/anm-ob-2.43bc2a0d8aa959e723f9f74fe387cf72.png" alt="" class="w-20 absolute top-28 right-[235px] animate-wiggle">
            </div>
        </div>
    </section>
</template>

<script setup>
 import {ref} from 'vue'

 const acitve_btn = ref(0)
 const gameClick = (number) => {
    acitve_btn.value = number
 }
</script>


<style scoped>
    .realbet{
        height: calc(100vh - 115px);
    }
    .bg_img{
        background: url(http://mb1.els.best/static/image/bg.5858f002c2ae068f4d2657e4074dc97f.jpg);
        background-repeat: no-repeat;
        overflow: hidden;
        background-position: top;
        background-size: cover;
        height: 100%;
        width: 100%;


    }
</style>