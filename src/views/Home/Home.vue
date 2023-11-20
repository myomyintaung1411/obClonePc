<template>
    <div class="w-full h-full relative">
        <CarousalSection></CarousalSection>
        <section class="content-scroll relative w-full bg-[#3c466380] py-3">
            <div class="max-w-7xl mx-auto text-white ">
                <div class="flex items-center w-full justify-between space-x-3 cursor-pointer">
                    <div>
                        <img src="http://mb1.els.best/static/image/icon-laba.051833f608cedb8253e72e6e93fd6e1c.svg" alt="" class="w-7">
                    </div>
                    <div class="w-[900px] overflow-hidden whitespace-nowrap marquee-container">
                       <p>★★★尊敬的客户：我司亚博体育场馆比分系统于2020年7月7日（星期二）11:00-13:35进行滚球比分系统维护，维护期间将无法查看比分，可以正常游戏，给您带来不便敬请谅解，谢谢。</p>
                    </div>
                    <router-link to="/message" class="">
                        <button class="actvie-background-btn rounded-md px-6 py-2"> <p class="text">更多</p></button>
                    </router-link>
                </div>
            </div>
        </section>
        <!-- two card -->
       <section class="w-full relative pt-10">
         <div class="max-w-7xl mx-auto text-white ">
            <div class="grid grid-cols-2 gap-x-12 cursor-pointer">
                <div @click="goBlog(0)" class=" shadow-xl hover:scale-105 transition-transform duration-300">
                    <img src="http://mb1.els.best/static/image/invalid-name@2x.aa69bc6e48a7db32e690d1c67a4ddec1.png" alt="" class="w-full  h-[180px]">
                </div>
                <div @click="goBlog(1)" class=" shadow-xl hover:scale-105 transition-transform duration-300">
                    <img src="http://mb1.els.best/static/image/asidunlawei@2x.07eeb5904586eafb13a9b498743f53d9.png" alt="" class="w-full  h-[180px]">
                </div>
            </div>
         </div>
       </section>
    <!-- app download -->
       <section class="relative w-full ">
         <div class="py-24 w-full  flex items-center justify-center">
            <div>
                <img src="http://mb1.els.best/static/image/shoujiappxiazai@2x.11b8ec3083d9c0c052b2f8cde0043dcc.png" draggable="false" alt="appdownlaod" class="w-[480px] h-auto">
            </div>
         </div>
             <section class="max-w-7xl mx-auto relative">
                <div class="flex flex-wrap items-center justify-between h-[642px] ">
                    <div class="w-[620px] ">
                        <img src="http://mb1.els.best/static/image/zh.362e9e141ea5be7505e921577983e622.png" alt="" class="w-full h-[630px] object-fill">
                    </div>
                    <div class=" w-[580px] h-full">
                        <div class="flex flex-col pt-16">
                            <div class="font-bold w-full text-center text-gray-600 text-3xl tracking-wider ">
                                随时随地 极致畅享
                            </div>
                            <div class="py-3 text-base  tracking-wide text-left text-gray-600">
                                <p>棋牌、彩票、真人娱乐、体育赛事、电子游艺、电子竞技，您所要的尽在els包网.欧宝演示站。行业种类最全娱乐竞技APP，els包网.欧宝演示站为您呈现别样、缤纷的极致体验。</p>
                            </div>
                            <div class="py-12">
                                <div class="flex items-center w-full justify-evenly">
                                    <div class="flex flex-col w-[40%] ">
                                        <div class="bg-white shadow-lg rounded-lg p-1">
                                            <img src="http://ht1.els.best/uploads/images/e13177382b3e958789c877f71b034ca9.jpg" alt="" class="w-full h-56">
                                        </div>
                                        <div class="py-3 w-full flex flex-col justify-center">
                                            <p class="text-base text-gray-600 text-center">扫码下载APP</p>
                                            <p class="text-base text-gray-600 text-center">支持IOS & Android全设备</p>
                                            <a href="https://www.baidu.com/" target="_blank" class="text-base hover _color_sec text-center">https://www.baidu.com/</a>
                                        </div>

                                    </div>
                                    <div class="flex flex-col w-[40%] ">
                                        <div class="bg-white shadow-lg rounded-lg p-1">
                                            <img src="http://mb1.els.best/static/image/zhijiefangwen@2x.3dfa4abeebf46d64aea082e3d55560c1.png" alt="" class=" w-full h-56">
                                        </div>
                                        <div class="py-3 w-full flex flex-col justify-center">
                                            <p class="text-base text-gray-600 text-center">扫码下载APP</p>
                                            <p class="text-base text-gray-600 text-center">支持IOS & Android全设备</p>
                                            <a href="https://www.baidu.com/" target="_blank" class="text-base hover _color_sec text-center">https://www.baidu.com/</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </section>

       <section class=" w-full relative">
         <div class="py-24 w-full  flex items-center justify-center">
            <div>
                <img src="http://mb1.els.best/static/image/games_title.9badfadfc430eedb4aa92ad013ca2db8.png" draggable="false" alt="appdownlaod" class="w-[480px] h-auto">
            </div>

         </div>
            <section class="max-w-7xl mx-auto relative pb-10">
                <div class="flex items-center space-x-10">
                    <div class="w-[220px] bg-white h-[550px] rounded-xl shadow-lg">
                        <div class="w-full mx-auto flex flex-col justify-around py-5 px-4 h-full">
                        <div v-for="(btn,n) in button_section" :key="n" @click="clickGame(n)"  :class="activeButton === n ? 'actvie-background-btn shadow-md ' : ''"
                            class=" hover:text-white text-gray-700 fill-background transition-background-color transition-shadow duration-500 w-[170px] cursor-pointer h-14 rounded-full bg-white shadow hover:shadow-md mx-auto">
                                <div  class="w-full flex items-center justify-center h-full space-x-4 ">
                                    <span class="text-[15px] tracking-wider ">{{btn.btnText}}</span>
                                    <div>
                                        <img :src="btn.btnimg" alt="football" class="w-10">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="w-[1100px] h-[590px] relative">
                        <div class="w-full h-[550px]">
                            <img v-if="activeButton === 0" src="http://mb1.els.best/static/image/ty@5x.a37ed2b0b2c43c0d7420588637a1fddb.png" alt="" class="w-full h-full animate-fade ">
                            <img v-else-if="activeButton === 1" src="http://mb1.els.best/static/image/dj@3x.83d58e52fe3dcdae81076bb9270a7067.png" alt="" class="w-full h-full animate-fade ">
                            <img v-else-if="activeButton === 2" src="http://mb1.els.best/static/image/zr@3x.788152124fcaceddcb15779235da34d0.png" alt="" class="w-full h-full animate-fade ">
                            <img v-else-if="activeButton === 3" src="http://mb1.els.best/static/image/qp@6x.015d5ab8a00e74f37cd360b39c713883.png" alt="" class="w-full h-full animate-fade ">
                            <img v-else-if="activeButton === 4" src="http://mb1.els.best/static/image/cp@7x.03016bd83654f2210cbf865be193e072.png" alt="" class="w-full h-full animate-fade ">
                            <img v-else-if="activeButton === 5" src="http://mb1.els.best/static/image/dz@3x.ee147cc1d70e62669593c54b0c5391ec.png" alt="" class="w-full h-full animate-fade ">
                        </div>
                        <div v-if="activeButton === 0" class="flex items-center justify-center absolute w-full bottom-0 space-x-7 cursor-pointer">
                            <div class="px-8 py-2 rounded-full text-center actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                AG体育
                            </div>
                            <div class="px-8 py-2 rounded-full actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                OB体育
                            </div>
                            <div class="px-8 py-2 rounded-full actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                SBO体育
                            </div>
                        </div>
                        <div v-else-if="activeButton === 1" class="flex items-center justify-center absolute w-full bottom-0 space-x-7 cursor-pointer">
                            <div class="px-8 py-2 rounded-full text-center actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                OB电竞
                            </div>
                            <div class="px-8 py-2 rounded-full actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                泛亚电竞
                            </div>
                            <div class="px-8 py-2 rounded-full actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                SBO体育
                            </div>
                        </div>
                        <div v-else-if="activeButton === 2" class="flex items-center justify-center absolute w-full bottom-0 space-x-7 cursor-pointer">
                            <div class="px-8 py-2 rounded-full text-center actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                AG视讯
                            </div>
                            <div class="px-8 py-2 rounded-full actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                BBIN视讯
                            </div>
                            <div class="px-8 py-2 rounded-full actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                OB视讯
                            </div>
                        </div>
                        <div v-else-if="activeButton === 3" class="flex items-center justify-center absolute w-full bottom-0 space-x-7 cursor-pointer">
                            <div class="px-8 py-2 rounded-full text-center actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                OB棋牌
                            </div>
                            <div class="px-8 py-2 rounded-full actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                BBIN棋牌
                            </div>
                            <div class="px-8 py-2 rounded-full actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                开元棋牌
                            </div>
                        </div>
                        <div v-else-if="activeButton === 4" class="flex items-center justify-center absolute w-full bottom-0 space-x-7 cursor-pointer">
                            <div class="px-8 py-2 rounded-full text-center actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                VR彩票
                            </div>
                            <div class="px-8 py-2 rounded-full actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                AECP
                            </div>
                            <div class="px-8 py-2 rounded-full actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                IG香港彩
                            </div>
                        </div>
                        <div v-else-if="activeButton === 5" class="flex items-center justify-center absolute w-full bottom-0 space-x-7 cursor-pointer">
                            <div class="px-8 py-2 rounded-full text-center actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                AG电子
                            </div>
                            <div class="px-8 py-2 rounded-full actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                BBIN电子
                            </div>
                            <div class="px-8 py-2 rounded-full actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                OB电子
                            </div>
                        </div>
                    </section>
                </div>
            </section>
       </section>

       <!-- grid card section -->
       <section class="relative w-full">
           <div class="py-24 w-full  flex items-center justify-center">
            <div>
                <img src="http://mb1.els.best/static/image/service.14acf2b8dc2752073524b2c00a851ad0.png" draggable="false" alt="appdownlaod" class="w-[480px] h-auto">
            </div>
         </div>
           <section class="max-w-7xl mx-auto relative pb-20">
             <div class="grid grid-cols-4 gap-x-20 cursor-pointer ">
                <div class="bg_grid_img   bg-transparent  relative ">
                    <div class="w-full h-full bg_img">
                        <div class="w-full h-full flex flex-col  items-center justify-evenly">
                            <div>
                                <img src="http://mb1.els.best/static/image/zhuanye@2x.9b0f3551ce8cf65a8a9852511ef3076f.png" alt="" class="w-28">
                            </div>
                            <div class="font-bold w-full text-center text-gray-600 text-2xl tracking-wider">
                                <p>扫码下</p>
                            </div>
                            <div class="text-[15px] px-5 text-gray-600">
                                <p class="  tracking-[2px]">每天为您提供近千场精彩体育赛事，更有真人、棋牌、彩票、电子游戏等多种娱乐方式供您选择，让您拥有完美游戏体验！</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg_grid_img   bg-transparent  relative">
                    <div class="w-full h-full bg_img">
                        <div class="w-full h-full flex flex-col  items-center justify-evenly">
                            <div>
                                <img src="http://mb1.els.best/static/image/anquan@2x.f0b656cdad3ce8a42d7579555c425bf9.png" alt="" class="w-28">
                            </div>
                            <div class="font-bold w-full text-center text-gray-600 text-2xl tracking-wider">
                                <p>扫码下</p>
                            </div>
                            <div class="text-[15px] px-5 text-gray-600">
                                <p class="  tracking-[2px]">独家开发，采用128位加密技术和严格的安全管理体系，客户资金得到最全面的安全保障，让您尽享娱乐、赛事投注，无后顾之忧！</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg_grid_img   bg-transparent  relative">
                    <div class="w-full h-full bg_img">
                        <div class="w-full h-full flex flex-col  items-center justify-evenly">
                            <div>
                                <img src="http://mb1.els.best/static/image/bainjie@2x.ddaa0144cce2ade3702424d103405ca8.png" alt="" class="w-28">
                            </div>
                            <div class="font-bold w-full text-center text-gray-600 text-2xl tracking-wider">
                                <p>扫码下</p>
                            </div>
                            <div class="text-[15px] px-5 text-gray-600">
                                <p class="  tracking-[2px]">引领市场的卓越技术，自主研发了全套终端应用，让您畅享Web、H5，更有iOS、Android原生App，为您提供最精致的娱乐投注体验！</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg_grid_img   bg-transparent  relative">
                    <div class="w-full h-full bg_img">
                        <div class="w-full h-full flex flex-col  items-center justify-evenly">
                            <div>
                                <img src="http://mb1.els.best/static/image/kuaisu@2x.a730f5d36b02d490c8b25981f7d804c5.png" alt="" class="w-28">
                            </div>
                            <div class="font-bold w-full text-center text-gray-600 text-2xl tracking-wider">
                                <p>扫码下</p>
                            </div>
                            <div class="text-[15px] px-5 text-gray-600">
                                <p class="  tracking-[2px]">采用最新技术自主研发的财务处理系统，真正做到极速存、取、转。独家网络优化技术，为您提供一流的游戏体验，最大优化网络延迟！</p>
                            </div>
                        </div>
                    </div>
                </div>

             </div>
           </section>
       </section>
    </div>
</template>

<script setup>
import {ref} from 'vue'
 import CarousalSection from '@/components/CarousalSection.vue'
import { useRouter } from "vue-router";

const router = useRouter();
const activeButton = ref(0)
const button_section = ref([
    {
        id:1,
        btnText:'体育赛事',
        btnimg:'http://mb1.els.best/static/image/xuanzhongtiyu@2x.876783ff5a66e88140ce3370a090dac7.png',
    },
    {
        id:2,
        btnText:'电子竞技',
        btnimg:'http://mb1.els.best/static/image/weixuanzhongdianzijingji@2x.ac09f7ec18cbaf9e8f9b27586e3c6918.png',
    },
    {
        id:3,
        btnText:'真人娱乐',
        btnimg:'http://mb1.els.best/static/image/weixuanzhongzhenren@2x.e72bd355569a0afc9bc6e27774e54fd5.png',
    },
    {
        id:4,
        btnText:'棋牌游戏',
        btnimg:'http://mb1.els.best/static/image/weixuanzhongqipai@2x.e0475d86c580d8f1cbdf06818842fb95.png',
    },
    {
        id:5,
        btnText:'彩票投注',
        btnimg:'http://mb1.els.best/static/image/weixuanzhongcaipiao@2x.1d4c546588d5bc631c706d92b2988b1f.png',
    },
    {
        id:6,
        btnText:'电子游艺',
        btnimg:'http://mb1.els.best/static/image/weixuanzhongdianziyouyi@2x.03b87e4b9f088d1ab2d9a5e80ebc68f9.png',
    },
])

const clickGame = (number) => {
    activeButton.value = number
}

const goBlog = (number) => {
    router.push({name:'FootballNews',query:{id:number}})
}

</script>

<style scoped>
.marquee-container p {
  animation: marquee 20s linear infinite;
  white-space: nowrap;
}

/* Keyframes for the marquee animation */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}


.fill-background {
     background-color: #fff;
    transition: background-color 0.5s;
    /* animation: fillFromLeft 1s linear forwards; */
}

  .fill-background:hover {
    background: rgb(126,139,190);
    background: linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%);
  }
  .actvie-background-btn{
    color: white;
    background: rgb(126,139,190);
    background: linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%);
  }

  .bg_grid_img{
  /*  */
   width: 314px;
   height: 366px;
   transition: transform 0.5s;

  }
   .bg_grid_img:hover {
    transform: translateY(-20px);
  }

.bg_img{
background: url(https://senbackkg.salinent.com/main-consumer-web/assets-oss/ob/images/home/fuwuyouhuikapian@2x.d53c603fceac6d6dabd6b165df72f133.png?x-oss-process=image/resize,p_100/format,webp);
background-size: 304px 358px;
    background-repeat: no-repeat;
box-shadow: 0 2px 18px 0 rgba(178, 201, 241, .62);
    width: 304px;
    height: 356px;
    border-radius: 22px;
        position: relative;
}

</style>