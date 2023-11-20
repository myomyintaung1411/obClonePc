<template>
    <section class="realbet relative w-full">
        <div class="bg_img">
            <div class="mx-auto max-w-[1320px] h-full flex items-center justify-center relative ">
                <div class=" w-[490px] h-[376px] flex flex-col  ">
                    <img v-if="acitve_btn === 0" src="http://ht1.els.best/uploads/images/ag_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 1" src="http://ht1.els.best/uploads/images/bbin_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 2" src="http://ht1.els.best/uploads/images/obgzr_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 3" src="http://ht1.els.best/uploads/images/wm_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 4" src="http://ht1.els.best/uploads/images/ybzr.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 5" src="http://ht1.els.best/uploads/images/xgzr.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 6" src="http://ht1.els.best/uploads/images/CQ93.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 7" src="http://ht1.els.best/uploads/images/bg_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 8" src="http://ht1.els.best/uploads/images/allbet_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                
                <div class="  text-base text-[#3651a8] mt-2 animate-fadeleft " style="line-height:30px">业内独家多机位百家乐真人游戏，惊艳、美丽、专业的荷官，高清真实的现场环境，为您呈现奢华游戏体验！</div>
                 <ul class=" list-none w-[350px] flex justify-between mt-7 animate-fadeleft  ">
                    <li class="flex flex-col items-center list-none ">
                        <img src="http://mb1.els.best/static/image/icon-1.a22b97f337ffbc181e0a62558dc609b6.png" alt="" draggable="false" class="w-8">
                     <p class="pt-2 leading-4 text-[#3651a8]">百家乐</p>
                    </li>
                    <li class="flex flex-col items-center list-none ">
                        <img src="http://mb1.els.best/static/image/icon-1.a22b97f337ffbc181e0a62558dc609b6.png" alt="" draggable="false" class="w-8">
                     <p class="pt-2 leading-4 text-[#3651a8]">百家乐</p>
                    </li>
                    <li class="flex flex-col items-center list-none ">
                        <img src="http://mb1.els.best/static/image/icon-1.a22b97f337ffbc181e0a62558dc609b6.png" alt="" draggable="false" class="w-8">
                     <p class="pt-2 leading-4 text-[#3651a8]">百家乐</p>
                    </li>
                    <li class="flex flex-col items-center list-none ">
                        <img src="http://mb1.els.best/static/image/icon-1.a22b97f337ffbc181e0a62558dc609b6.png" alt="" draggable="false" class="w-8">
                     <p class="pt-2 leading-4 text-[#3651a8]">百家乐</p>
                    </li>
                    <li class="flex flex-col items-center list-none ">
                        <img src="http://mb1.els.best/static/image/icon-1.a22b97f337ffbc181e0a62558dc609b6.png" alt="" draggable="false" class="w-8">
                     <p class="pt-2 leading-4 text-[#3651a8]">百家乐</p>
                    </li>
                    <li class="flex flex-col items-center list-none ">
                        <img src="http://mb1.els.best/static/image/icon-1.a22b97f337ffbc181e0a62558dc609b6.png" alt="" draggable="false" class="w-8">
                     <p class="pt-2 leading-4 text-[#3651a8]">百家乐</p>
                    </li>
                 </ul>
                 <a class="pt-7  cursor-pointer animate-fadeleft   ">
                    <img src="http://mb1.els.best/static/image/btn.1cfd2c8e17e20f1631dd11d7504e717d.png" alt="" class="  w-40 transform-origin-center transition-transform duration-300 hover:scale-110">
                 </a>
                </div>
                <!--  -->
                <section class="img_section w-[800px] h-[800px] pointer-events-none relative">
                    <img v-if="acitve_btn !== 1 && acitve_btn !== 2 && acitve_btn !== 3" src="http://mb1.els.best/static/image/realbet/0.png" alt="" class="w-full -ml-[90px] animate-fade">
                    <img v-else-if="acitve_btn === 1" src="http://mb1.els.best/static/image/realbet/1.png" alt="" class="w-full -ml-[90px] animate-fade">
                    <img v-else-if="acitve_btn === 2" src="http://mb1.els.best/static/image/realbet/2.png" alt="" class="w-full -ml-[90px] animate-fade">
                    <img v-else-if="acitve_btn === 3" src="http://mb1.els.best/static/image/realbet/3.png" alt="" class="w-full -ml-[90px] animate-fade">
                </section>
                <ul class="list-none mt-3 flex flex-col -ml-[132px]">
                    <li @click="gameClick(0)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 0" src="http://ht1.els.best/uploads/images/ag_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/669da3606ceed1ae428edd9d07303b9c.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(1)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 1" src="http://ht1.els.best/uploads/images/bbin_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/bbin.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(2)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 2" src="http://ht1.els.best/uploads/images/obgzr_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/obgzr.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(3)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 3" src="http://ht1.els.best/uploads/images/wm_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/wm.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(4)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 4" src="http://ht1.els.best/uploads/images/ybzr01.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/ybzr02.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(5)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 5" src="http://ht1.els.best/uploads/images/xgzr01.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/xgzr02.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(6)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 6" src="http://ht1.els.best/uploads/images/CQ92.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/CQ91.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(7)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 7" src="http://ht1.els.best/uploads/images/bg_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/bg.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(8)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 8" src="http://ht1.els.best/uploads/images/allbet_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/allbet.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                </ul>
                <img src="http://mb1.els.best/static/image/anm-ob-2.0ba124fbac5f79fc4f688870dcd6c251.png" alt="" class="w-20 absolute bottom-20 left-[235px] animate-bounce">
                <img src="http://mb1.els.best/static/image/anm-ob-1.c2c95beac7b57cad2e6711b6c97ea63a.png" alt="" class="w-20 absolute top-28 right-[235px] animate-wiggle">
                <img src="http://mb1.els.best/static/image/anm-ob-5.a3d992b84fa2530cd3c9f6a5003ac1bb.png" alt="" class="w-20 absolute bottom-48 right-[235px]  animate-wiggle">
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