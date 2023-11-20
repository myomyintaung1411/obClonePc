<template>
    <section class="realbet relative w-full">
        <div class="bg_img relative h-full">
            <img v-if="acitve_btn === 0 || acitve_btn === 4" src="http://mb1.els.best/static/image/gaming/0.png" alt="" class="w-full object-cover h-full absolute">
            <img v-if="acitve_btn === 1" src="http://mb1.els.best/static/image/gaming/1.png" alt="" class="w-full object-cover h-full absolute">
            <img v-if="acitve_btn === 2" src="http://mb1.els.best/static/image/gaming/2.png" alt="" class="w-full object-cover h-full absolute">
            <img v-if="acitve_btn === 3" src="http://mb1.els.best/static/image/gaming/3.png" alt="" class="w-full object-cover h-full absolute">
            <div class="mx-auto max-w-[1320px]  h-full flex items-center justify-center relative   ">
                
                <div v-if="acitve_btn === 0 || acitve_btn === 4"  class="relative w-[800px] h-[800px] pointer-events-none animate-fadeleft ">
                    <img src="http://mb1.els.best/static/image/gaming/0_gaming_left.png" alt=""
                     class="w-full  absolute -left-[261px] ml-0 h-full object-cover"
                    >
                </div>
                <div v-if="acitve_btn === 1" class="relative w-[800px] h-[800px] pointer-events-none animate-fadeleft ">
                    <img src="http://mb1.els.best/static/image/gaming/1_gaming_left.png" alt=""
                     class="w-full  absolute -left-[261px] ml-0 h-full object-cover"
                    >
                </div>
                <div v-if="acitve_btn === 2" class="relative w-[800px] h-[800px] pointer-events-none animate-fadeleft ">
                    <img src="http://mb1.els.best/static/image/gaming/2_gaming_left.png" alt=""
                     class="w-full  absolute -left-[261px] ml-0 h-full object-cover"
                    >
                </div>
                <div v-if="acitve_btn === 3" class="relative w-[800px] h-[800px] pointer-events-none  animate-fadeleft">
                    <img src="http://mb1.els.best/static/image/gaming/3_gaming_left.png" alt=""
                     class="w-full  absolute -left-[261px] ml-0 h-full object-cover"
                    >
                </div>


                <div class="w-[490px] h-[376px]  flex flex-col box absolute items-center top-[210px] z-10">
                    <img v-if="acitve_btn === 0" src="http://ht1.els.best/uploads/images/obgdj_gaming_title.png" alt="" class="mb-3 w-[450px] min-h-[120px] overflow-hidden block animate-flip">
                    <img v-if="acitve_btn === 1" src="http://ht1.els.best/uploads/images/avia_gaming_title.png" alt="" class="mb-3 w-[450px] min-h-[120px] overflow-hidden block animate-flip">
                    <img v-if="acitve_btn === 2" src="http://ht1.els.best/uploads/images/ia_gaming_title.png" alt="" class="mb-3 w-[450px] min-h-[120px] overflow-hidden block animate-flip">
                    <img v-if="acitve_btn === 3" src="http://ht1.els.best/uploads/images/ld_gaming_title.png" alt="" class="mb-3 w-[450px] min-h-[120px] overflow-hidden block animate-flip">
                    <img v-if="acitve_btn === 4" src="http://ht1.els.best/uploads/images/imdj.png" alt="" class="mb-3 w-[450px] min-h-[120px] overflow-hidden block animate-flip">

                    <div class=" pointer-events-none w-[1260px]  absolute -top-[90px]" style="z-index:-1">
                     <img src="http://mb1.els.best/static/image/anm-ob-1.a8f00566894e5e6da6e0d5a595278bc7.png" alt="" class="pointer-events-none " />
                    </div>
                    <div class="  z-40 pointer-events-none w-[1260px]  absolute -top-[90px]">
                     <img src="http://mb1.els.best/static/image/anm-ob-1.a8f00566894e5e6da6e0d5a595278bc7.png" alt="" class="z-20 pointer-events-none " />
                    </div>

                   <span class="text-white text-center tracking-[2.2px] text-lg drop-shadow-md ">丰富的电竞赛事，玩法多元，结算快捷。高清直播让您体验精彩热血竞技，是最受玩家喜爱的竞猜娱乐平台。

                    <ul class="w-[350px] flex justify-between list-none"></ul>
                   </span>
                   <a class="" style="text-decoration:none">
                    <img src="http://mb1.els.best/static/image/btn.6ae85c77b9899a7e4590b47da7b41266.png" alt="" class=" cursor-pointer text-lg drop-shadow-md flex items-center justify-center mt-4 mb-3 w-[342px] transform-origin-center transition-transform duration-300 hover:scale-110">
                   </a>
                   <div>
                    <img src="http://mb1.els.best/static/image/logos.d5c2cb0861129c60db8fbec3508a45c7.png" alt="" class="block w-[487px]">
                   </div>
                </div>

                  <div v-if="acitve_btn === 0 || acitve_btn === 4" class="relative w-[800px] h-[800px] pointer-events-none animate-fade ">
                    <img src="http://mb1.els.best/static/image/gaming/0_gaming_right.png" alt=""
                     class="w-full  absolute -right-[240px] ml-0 h-full object-cover"
                    >
                </div>
                  <div v-if="acitve_btn === 1" class="relative w-[800px] h-[800px] pointer-events-none animate-fade">
                    <img src="http://mb1.els.best/static/image/gaming/1_gaming_right.png" alt=""
                     class="w-full  absolute -right-[240px] ml-0 h-full object-cover"
                    >
                </div>
                  <div v-if="acitve_btn === 2" class="relative w-[800px] h-[800px] pointer-events-none animate-fade">
                    <img src="http://mb1.els.best/static/image/gaming/2_gaming_right.png" alt=""
                     class="w-full  absolute -right-[240px] ml-0 h-full object-cover"
                    >
                </div>
                  <div v-if="acitve_btn === 3" class="relative w-[800px] h-[800px] pointer-events-none animate-fade">
                    <img src="http://mb1.els.best/static/image/gaming/3_gaming_right.png" alt=""
                     class="w-full  absolute -right-[240px] ml-0 h-full object-cover"
                    >
                </div>

                <ul class="flex absolute top-[68px] m-0 list-none">
                    <li @click="gameClick(0)" class=" cursor-pointer mx-[3px]">
                        <img v-if="acitve_btn === 0"  src="http://ht1.els.best/uploads/images/obgdj_gaming_active.png" alt="" class="w-[212px] transform-origin-center transition-transform duration-300 hover:scale-110">
                        <img v-else src="http://ht1.els.best/uploads/images/obgdj_gaming_inactive.png" alt="" class="w-[212px] transform-origin-center transition-transform duration-300 hover:scale-110">
                    </li>
                    <li  @click="gameClick(1)" class=" cursor-pointer mx-[3px]">
                        <img v-if="acitve_btn === 1" src="http://ht1.els.best/uploads/images/avia_gaming_active.png" alt="" class="w-[212px] transform-origin-center transition-transform duration-300 hover:scale-110">
                        <img v-else src="http://ht1.els.best/uploads/images/avia_gaming_inactive.png" alt="" class="w-[212px] transform-origin-center transition-transform duration-300 hover:scale-110">
                    </li>
                    <li  @click="gameClick(2)" class=" cursor-pointer mx-[3px]">
                        <img v-if="acitve_btn === 2" src="http://ht1.els.best/uploads/images/ia_gaming_active.png" alt="" class="w-[212px] transform-origin-center transition-transform duration-300 hover:scale-110">
                        <img v-else src="http://ht1.els.best/uploads/images/ia_gaming_inactive.png" alt="" class="w-[212px] transform-origin-center transition-transform duration-300 hover:scale-110">
                    </li>
                    <li  @click="gameClick(3)" class=" cursor-pointer mx-[3px]">
                        <img v-if="acitve_btn === 3" src="http://ht1.els.best/uploads/images/ld_gaming_active.png" alt="" class="w-[212px] transform-origin-center transition-transform duration-300 hover:scale-110">
                        <img v-else src="http://ht1.els.best/uploads/images/ld_gaming_inactive.png" alt="" class="w-[212px] transform-origin-center transition-transform duration-300 hover:scale-110">
                    </li>
                    <li  @click="gameClick(4)" class=" cursor-pointer mx-[3px]">
                        <img v-if="acitve_btn === 4" src="http://ht1.els.best/uploads/images/imdj01.png" alt="" class="w-[212px] transform-origin-center transition-transform duration-300 hover:scale-110">
                        <img v-else src="http://ht1.els.best/uploads/images/imdj02.png" alt="" class="w-[212px] transform-origin-center transition-transform duration-300 hover:scale-110">
                    </li>
                </ul>

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
        overflow: hidden;
        background-size: cover;
        height: 100%;
        width: 100%;
    }
</style>