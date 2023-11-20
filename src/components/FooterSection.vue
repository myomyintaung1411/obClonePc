<template>
    <footer class="footer_bg w-full relative text-[#7c8797] ">
        <div class="max-w-7xl mx-auto relative py-5 border-gray-600 border-b  ">
            <div class="w-full flex items-center justify-between space-x-4  cursor-pointer">
               <div @mouseover="imageurl_one = f1a" @mouseleave="imageurl_one = f1">
                    <img :src="imageurl_one" alt="" class="h-13 w-28">
                </div>
                 <div @mouseover="imageurl_two = f1aa" @mouseleave="imageurl_two = f1">
                    <img :src="imageurl_two" alt="" class="h-13 w-28">
                </div>
                <div  @mouseover="imageurl_3 = f2a" @mouseleave="imageurl_3 = f2">
                    <img :src="imageurl_3" alt="" class="h-13 w-28">
                </div>

                <div @mouseover="imageurl_4 = f3a" @mouseleave="imageurl_4 = f3">
                    <img :src="imageurl_4" alt="" class="h-13 w-28">
                </div>
                <div @mouseover="imageurl_5 = f4a" @mouseleave="imageurl_5 = f4">
                    <img :src="imageurl_5" alt="" class="h-13 w-32">
                </div>
                <div @mouseover="imageurl_6 = f5a" @mouseleave="imageurl_6 = f5">
                    <img :src="imageurl_6" alt="" class="h-13 w-32">
                </div>
                <div @mouseover="imageurl_7 = f6a" @mouseleave="imageurl_7 = f6">
                    <img :src="imageurl_7" alt="" class="h-13 w-32">
                </div>
                <div @mouseover="imageurl_8 = f7a" @mouseleave="imageurl_8 = f7">
                    <img :src="imageurl_8" alt="" class="h-13 w-32">
                </div>
                <div @mouseover="imageurl_9 = f8a" @mouseleave="imageurl_9 = f8">
                    <img :src="imageurl_9" alt="" class="h-13 w-32">
                </div>
            </div>
        </div>
           <div class="max-w-5xl mx-auto relative py-5 cursor-pointer text-center text-[15px] hover:text-[#f5f5f5] transition-colors duration-300 ">
            <p>els包网.欧宝演示站拥有欧洲马耳他MGA和菲律宾政府（PAGCOR）颁发的合法牌照。 注册于英属维尔京群岛，是受国际协会认可的合法公司。进行注册并娱乐前，请确保您年满18周岁！</p>
           </div>
           <div class="max-w-5xl mx-auto relative  text-center text-[15px]">
            <div class="w-full flex items-center justify-center space-x-10 cursor-pointer">
                <div class="flex flex-col items-center hover:text-[#f5f5f5] transition-colors duration-300 space-y-2">
                    <img src="http://mb1.els.best/static/image/footer_logo2.png" alt="" class="w-40">
                    <p class="text-sm tracking-wide">马耳他牌照(MGA)认证</p>
                </div>
                <div class="flex flex-col items-center hover:text-[#f5f5f5] transition-colors duration-300 space-y-2">
                    <img src="http://mb1.els.best/static/image/footer_logo3.png" alt="" class="w-40">
                    <p class="text-sm tracking-wide">英属维尔京群岛(BVI)认证</p>
                </div>
                <div class="flex flex-col items-center hover:text-[#f5f5f5] transition-colors duration-300 space-y-2">
                    <img src="http://mb1.els.best/static/image/footer_logo4.png" alt="" class="w-10">
                    <p class="text-sm tracking-wide">菲律宾(PAGCOR)监督牌照</p>
                </div>
            </div>
           </div>
           <div class="w-full flex items-center justify-center pt-3 space-x-5 cursor-pointer ">
             <span @click="goAbout(0)" class=" px-2  text-[15px] hover:text-white transition-colors duration-300">常见问题</span>
             <span class="w-[3px] h-[20px] bg-slate-500"></span>
             <span @click="goAbout(1)" class=" px-2  text-[15px] hover:text-white transition-colors duration-300">常见问题</span>
             <span class="w-[3px] h-[20px] bg-slate-500"></span>
             <span @click="goAbout(2)" class=" px-2  text-[15px] hover:text-white transition-colors duration-300">常见问题</span>
             <span class="w-[3px] h-[20px] bg-slate-500"></span>
             <span @click="goAbout(3)" class=" px-2  text-[15px] hover:text-white transition-colors duration-300">常见问题</span>
             <span class="w-[3px] h-[20px] bg-slate-500"></span>
             <span @click="goAbout(4)" class=" px-2  text-[15px] hover:text-white transition-colors duration-300">常见问题</span>
             
           </div>
           <div class="pt-5 pb-2 text-center w-full">
            <p class="text-sm hover:text-[#f5f5f5] cursor-pointer tracking-wider transition-colors duration-300">版权所有 ©2018-2023 els包网.欧宝演示站 保留所有权</p>
           </div>
    </footer>
</template>

<script setup>
import {ref} from 'vue'
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
 import f1 from '@/assets/home/f1.png'
 import f2 from '@/assets/home/f2.png'
 import f3 from '@/assets/home/f3.png'
 import f4 from '@/assets/home/f4.png'
 import f5 from '@/assets/home/f5.png'
 import f6 from '@/assets/home/f6.png'
 import f7 from '@/assets/home/f7.png'
 import f8 from '@/assets/home/f8.png'

  import f1a from '@/assets/home/f1a.png'
 import f1aa from '@/assets/home/f1aa.png'
 import f2a from '@/assets/home/f2a.png'
 import f3a from '@/assets/home/f3a.png'
 import f4a from '@/assets/home/f4a.png'
 import f5a from '@/assets/home/f5a.png'
 import f6a from '@/assets/home/f6a.png'
 import f7a from '@/assets/home/f7a.png'
 import f8a from '@/assets/home/f8a.png'

 const imageurl_one = ref(f1)
 const imageurl_two = ref(f1)
 const imageurl_3 = ref(f2)
 const imageurl_4 = ref(f3)
 const imageurl_5 = ref(f4)
 const imageurl_6 = ref(f5)
 const imageurl_7 = ref(f6)
 const imageurl_8 = ref(f7)
 const imageurl_9 = ref(f8)

 const goAbout = (number) => {
    router.push({name:'AboutUs',query:{id:number}})
 }
</script>