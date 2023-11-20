<template>
    <section class="realbet relative w-full">
        <div class="bg_img">
            <div class="mx-auto max-w-[1320px] h-full flex items-center justify-center relative ">
                <div class=" w-[490px] h-[376px] flex flex-col  ">
                    <img v-if="acitve_btn === 0" src="http://ht1.els.best/uploads/images/obgqp_joker_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 1" src="http://ht1.els.best/uploads/images/obgty_sport_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 2" src="http://ht1.els.best/uploads/images/leg_joker_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 3" src="http://ht1.els.best/uploads/images/bl.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 4" src="http://ht1.els.best/uploads/images/gdq.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 5" src="http://ht1.els.best/uploads/images/th.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 6" src="http://ht1.els.best/uploads/images/ly_joker_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 7" src="http://ht1.els.best/uploads/images/kx_joker_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                    <img v-else-if="acitve_btn === 8" src="http://ht1.els.best/uploads/images/xsj_joker_title.png" alt="" draggable="false" class="w-[450px] min-h-[126px] animate-fade">
                
                <div class="  text-base text-[#3651a8] mt-2 animate-fadeleft " style="line-height:30px">热门经典任君选择，真实万人同台，竞技娱乐爽快，快乐所在！</div>

                 <a class="pt-7  cursor-pointer animate-fadeleft   ">
                    <img src="http://mb1.els.best/static/image/btn.1cfd2c8e17e20f1631dd11d7504e717d.png" alt="" class="  w-40 transform-origin-center transition-transform duration-300 hover:scale-110">
                 </a>
                </div>
                <!--  -->
                <section class="img_section w-[800px] h-[800px] pointer-events-none relative">
                    <img v-if="acitve_btn !== 1 && acitve_btn !== 2 && acitve_btn !== 3 && acitve_btn !== 4 && acitve_btn !== 5" src="http://mb1.els.best/static/image/joker/0.png" alt="" class="w-full -ml-[90px] animate-fade">
                    <img v-else-if="acitve_btn === 1" src="http://mb1.els.best/static/image/joker/1.png" alt="" class="w-full -ml-[90px] animate-fade">
                    <img v-else-if="acitve_btn === 2" src="http://mb1.els.best/static/image/joker/2.png" alt="" class="w-full -ml-[90px] animate-fade">
                    <img v-else-if="acitve_btn === 3" src="http://mb1.els.best/static/image/joker/3.png" alt="" class="w-full -ml-[90px] animate-fade">
                    <img v-else-if="acitve_btn === 4" src="http://mb1.els.best/static/image/joker/4.png" alt="" class="w-full -ml-[90px] animate-fade">
                    <img v-else-if="acitve_btn === 5" src="http://mb1.els.best/static/image/joker/5.png" alt="" class="w-full -ml-[90px] animate-fade">
                </section>
                <ul class="list-none mt-3 flex flex-col -ml-[132px]">
                    <li @click="gameClick(0)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 0" src="http://ht1.els.best/uploads/images/obgqp_joker_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/obgqp_joker_inactive.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(1)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 1" src="http://ht1.els.best/uploads/images/bbin_joker_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/bbin_joker_inactive.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(2)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 2" src="http://ht1.els.best/uploads/images/leg_joker_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/leg_joker_inactive.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(3)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 3" src="http://ht1.els.best/uploads/images/bl01.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/bl02.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(4)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 4" src="http://ht1.els.best/uploads/images/gdq01.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/gdq02.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(5)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 5" src="http://ht1.els.best/uploads/images/th01.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/th02.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(6)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 6" src="http://ht1.els.best/uploads/images/ly_joker_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/ly_joker_inactive.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(7)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 7" src="http://ht1.els.best/uploads/images/kx_joker_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/kx_joker_inactive.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                    <li @click="gameClick(8)" class="mb-1 cursor-pointer list-none">
                        <img v-if="acitve_btn === 8" src="http://ht1.els.best/uploads/images/xsj_joker_active.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                        <img v-else src="http://ht1.els.best/uploads/images/xsj_joker_inactive.png" alt="" 
                        class="w-[180px] hover:scale-110 transform-origin-center transition-transform duration-300">
                    </li>
                </ul>
                <img src="http://mb1.els.best/static/image/anm-ob-2.1b95e7435c816c6c18081e735c02608b.png" alt="" class="w-20 absolute bottom-20 left-[235px] animate-bounce">
                <img src="http://mb1.els.best/static/image/anm-ob-3.86fbdb9702edb9d41676c604c1fdbbcd.png" alt="" class="w-20 absolute top-28 right-[235px] animate-wiggle">
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