
<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const activeRoute = ref("");

watch(
  () => route.path,
  () => {
    activeRoute.value = route.path;
  },
  { immediate: true, deep: true }
);

const user_money_click = (number) => {
    switch (number) {
        case 0:
            router.push('/recharge')
            break;
        case 1:
            router.push('/transfer')
            break;
        case 2:
             router.push('/withdraw')
            break;
    
        default:
            break;
    }
}
const goRoute = (number) => {
    switch (number) {
        case 0:
            router.push('/bankcard')
            break;
        case 1:
            router.push('/transRecord')
            break;
        case 2:
             router.push('/betRecord')
            break;
        case 3:
             router.push('/rebateRecord')
            break;
        case 4:
             router.push('/activityRecord')
            break;
        case 5:
             router.push('/applyAgnet')
            break;
        case 6:
             router.push('/center')
            break;
        case 7:
             router.push('/message')
            break;
        case 8:
             router.push('/welfare')
            break;
        case 9:
             router.push('/feeback')
            break;
    
        default:
            break;
    }
}
</script>


<template>
    <section class="w-full h-full bg_section py-10">
        <div class="max-w-7xl mx-auto min-h-[690px] relative flex space-x-8">
            <section class="left_section w-[220px] flex flex-col relative  ">
                <div class="top_left_section h-[236px] mb-3 pt-5 text-center relative shadow-md actvie-background-btn rounded-md">
                    <div class="flex flex-col items-center">
                        <div class="border-4 border-white border-solid rounded-full w-24 cursor-pointer relative ">
                            <img src="http://ht1.els.best/uploads/avatar/1690527967.png" alt="" class="w-full object-cover">
                        </div>
                        <div class="py-2 text-base font-bold tracking-wide"> <span>TikTok11</span></div>
                    </div>
                </div>
                <section class="below_left_section bg-white shadow-lg rounded-md relative  py-3  ">
                    <div class="pt-5 pl-5 flex items-center justify-start text-sm">
                        <p class=" tracking-wider">中心钱包：</p>
                        <p class="_color_sec font-bold">0.00</p>
                    </div>
                    <div>

                       <div class="flex justify-between pb-2 pt-3 px-5">
                         <div @click="user_money_click(0)" :class="activeRoute === '/recharge' ? 'text-[#3678fe]' : 'text-[#8590a6]'" class="flex flex-col hover:scale-105 transform-origin-center transition-transform duration-300 items-center cursor-pointer text-sm ">
                            <img v-if="activeRoute === '/recharge'" src="http://mb1.els.best/static/image/deposit_active.dde1618b4c1e6b81d7129e30d1997845.png" alt="money"
                             class="w-10 h-10 mb-2"
                            >
                            <img v-else src="http://mb1.els.best/static/image/deposit.0947ecf747f936e9f9a20e20fe3a5806.png" alt="money"
                             class="w-10 h-10 mb-2"
                            >
                            <p class=" font-normal">存款</p>
                         </div>
                         <div @click="user_money_click(1)" :class="activeRoute === '/transfer' ? 'text-[#3678fe]' : 'text-[#8590a6]'" class="flex flex-col hover:scale-105 transform-origin-center transition-transform duration-300 items-center cursor-pointer text-sm">
                            <img v-if="activeRoute === '/transfer'" src="http://mb1.els.best/static/image/transfer_active.357f49245ec9940adb0badebb8583edf.png" alt="money"
                             class="w-10 h-10 mb-2"
                            >
                            <img v-else src="http://mb1.els.best/static/image/transfer.cada0b68f36cabf40a9956d59bb9b1fe.png" alt="money"
                             class="w-10 h-10 mb-2"
                            >
                            <p class=" font-normal">转账</p>
                         </div>
                         <div @click="user_money_click(2)" :class="activeRoute === '/withdraw' ? 'text-[#3678fe]' : 'text-[#8590a6]'" class="flex flex-col hover:scale-105 transform-origin-center transition-transform duration-300 items-center cursor-pointer text-sm">
                            <img v-if="activeRoute === '/withdraw'" src="http://mb1.els.best/static/image/withdrawal_active.fd787d889022584f7ac4976505862b6e.png" alt="money"
                             class="w-10 h-10 mb-2"
                            >
                            <img v-else src="http://mb1.els.best/static/image/withdrawal.6fc5b140031dfbd3b77cc6aafbf4fe47.png" alt="money"
                             class="w-10 h-10 mb-2"
                            >
                            <p class=" font-normal">取款</p>
                         </div>
                        </div> 

                        <ul class="list-none py-2 relative">
                            <li @click="goRoute(0)" class="h-[46px] list-none relative  pl-[50px] hover:text-[#3678fe] flex items-center group cursor-pointer "
                             :class="activeRoute === '/bankcard' ? 'text-[#3678fe] bg-[#f3fafd] font-bold' : 'text-[#8590a6] bg-white '"
                            >
                                <div class="w-5 h-5 mr-[10px]">
                                    <img v-if="activeRoute === '/bankcard'" class="w-full h-full" src="http://mb1.els.best/static/image/0-1.79122c3d6a38f284408a86fbc807b0a9.png" alt="">
                                    <img v-else class="w-full h-full" src="http://mb1.els.best/static/image/0.fa44efc644589909c1e16f3dedb07626.png" alt="">
                                </div>
                                <p  style="line-height:46px">我的钱包</p>
                                <div :class="activeRoute === '/bankcard' ? 'h-[46px]' : ' '" class="absolute left-0  w-[2px] h-0   transition-all duration-300 bg-[#3678fe] "></div>
                            </li>
                            <li @click="goRoute(1)" class="h-[46px] list-none relative  pl-[50px] flex items-center group cursor-pointer  hover:text-[#3678fe]"
                             :class="activeRoute === '/transRecord' ? 'text-[#3678fe] bg-[#f3fafd] font-bold' : 'text-[#8590a6] bg-white '"
                            >
                                <div class="w-5 h-5 mr-[10px]">
                                    <img v-if="activeRoute === '/transRecord'" class="w-full h-full" src="http://mb1.els.best/static/image/1-1.87a1c8da3d4ffd24d6197a21d4a769e3.png" alt="">
                                    <img v-else class="w-full h-full" src="http://mb1.els.best/static/image/1.404d07d89fe207dd01ddbbe812b97c01.png" alt="">
                                
                                </div>
                                <p  style="line-height:46px">交易记录</p>
                                <div :class="activeRoute === '/transRecord' ? 'h-[46px]' : ' '" class="absolute left-0  w-[2px] h-0   transition-all duration-300 bg-[#3678fe] "></div>
                            </li>
                            <li @click="goRoute(2)" class="h-[46px] list-none relative  pl-[50px] flex items-center group cursor-pointer  hover:text-[#3678fe]"
                             :class="activeRoute === '/betRecord' ? 'text-[#3678fe] bg-[#f3fafd] font-bold' : 'text-[#8590a6] bg-white '"
                            >
                                <div class="w-5 h-5 mr-[10px]">
                                    <img v-if="activeRoute === '/betRecord'" class="w-full h-full" src="http://mb1.els.best/static/image/2-1.d4198f6fdf5999d2f49d22345981a181.png" alt="">
                                    <img v-else class="w-full h-full" src="http://mb1.els.best/static/image/2.c21324096c848ea53d629c3f8fc20631.png" alt="">
                                
                                </div>
                                <p  style="line-height:46px">投注记录</p>
                                <div :class="activeRoute === '/betRecord' ? 'h-[46px]' : ' '" class="absolute left-0  w-[2px] h-0   transition-all duration-300 bg-[#3678fe] "></div>
                            </li>
                            <li @click="goRoute(3)" class="h-[46px] list-none relative  pl-[50px] flex items-center group cursor-pointer  hover:text-[#3678fe]"
                             :class="activeRoute === '/rebateRecord' ? 'text-[#3678fe] bg-[#f3fafd] font-bold' : 'text-[#8590a6] bg-white '"
                            >
                                <div class="w-5 h-5 mr-[10px]">
                                    <img v-if="activeRoute === '/rebateRecord'" class="w-full h-full" src="http://mb1.els.best/static/image/3-1.d5283afeb84b6fee05f9fd6d682d3d11.png" alt="">
                                    <img v-else class="w-full h-full" src="http://mb1.els.best/static/image/3.983decfccd2bdc503c4c42fdf583de89.png" alt="">
                                
                                </div>
                                <p  style="line-height:46px">返水记录</p>
                                <div :class="activeRoute === '/rebateRecord' ? 'h-[46px]' : ' '" class="absolute left-0  w-[2px] h-0   transition-all duration-300 bg-[#3678fe] "></div>
                            </li>
                            <li @click="goRoute(4)" class="h-[46px] list-none relative  pl-[50px] flex items-center group cursor-pointer  hover:text-[#3678fe]"
                             :class="activeRoute === '/activityRecord' ? 'text-[#3678fe] bg-[#f3fafd] font-bold' : 'text-[#8590a6] bg-white '"
                            >
                                <div class="w-5 h-5 mr-[10px]">
                                    <img v-if="activeRoute === '/activityRecord'" class="w-full h-full" src="http://mb1.els.best/static/image/3-1.d5283afeb84b6fee05f9fd6d682d3d11.png" alt="">
                                    <img v-else class="w-full h-full" src="http://mb1.els.best/static/image/3.983decfccd2bdc503c4c42fdf583de89.png" alt="">
                                
                                </div>
                                <p  style="line-height:46px">活动申请记录</p>
                                <div :class="activeRoute === '/activityRecord' ? 'h-[46px]' : ' '" class="absolute left-0  w-[2px] h-0   transition-all duration-300 bg-[#3678fe] "></div>
                            </li>
                            <li @click="goRoute(5)" class="h-[46px] list-none relative  pl-[50px] flex items-center group cursor-pointer  hover:text-[#3678fe]"
                             :class="activeRoute === '/applyAgnet' ? 'text-[#3678fe] bg-[#f3fafd] font-bold' : 'text-[#8590a6] bg-white '"
                            >
                                <div class="w-5 h-5 mr-[10px]">
                                    <img v-if="activeRoute === '/applyAgnet'" class="w-full h-full" src="http://mb1.els.best/static/image/3-1.d5283afeb84b6fee05f9fd6d682d3d11.png" alt="">
                                    <img v-else class="w-full h-full" src="http://mb1.els.best/static/image/3.983decfccd2bdc503c4c42fdf583de89.png" alt="">
                                
                                </div>
                                <p  style="line-height:46px">申请代理</p>
                                <div :class="activeRoute === '/applyAgnet' ? 'h-[46px]' : ' '" class="absolute left-0  w-[2px] h-0   transition-all duration-300 bg-[#3678fe] "></div>
                            </li>
                            <li class="list-none mx-10 h-[1px] bg-slate-500 my-2"></li>
                            <li @click="goRoute(6)" class="h-[46px] list-none relative  pl-[50px] flex items-center group cursor-pointer  hover:text-[#3678fe]"
                             :class="activeRoute === '/center' ? 'text-[#3678fe] bg-[#f3fafd] font-bold' : 'text-[#8590a6] bg-white '"
                            >
                                <div class="w-5 h-5 mr-[10px]">
                                    <img v-if="activeRoute === '/center'" class="w-full h-full" src="http://mb1.els.best/static/image/4-1.bf6a3939dfd04c242e2da01250df2ad5.png" alt="">
                                    <img v-else class="w-full h-full" src="http://mb1.els.best/static/image/4.d40de41e77eefd350e82d9a3534b25c3.png" alt="">
                                
                                </div>
                                <p  style="line-height:46px">个人资料</p>
                                <div :class="activeRoute === '/center' ? 'h-[46px]' : ' '" class="absolute left-0  w-[2px] h-0   transition-all duration-300 bg-[#3678fe] "></div>
                            </li>
                            <li @click="goRoute(7)" class="h-[46px] list-none relative  pl-[50px] flex items-center group cursor-pointer  hover:text-[#3678fe]"
                             :class="activeRoute === '/message' ? 'text-[#3678fe] bg-[#f3fafd] font-bold' : 'text-[#8590a6] bg-white '"
                            >
                                <div class="w-5 h-5 mr-[10px]">
                                    <img v-if="activeRoute === '/message'" class="w-full h-full" src="http://mb1.els.best/static/image/5-1.fdfceb407e70551f81fe01def26fa7ec.png" alt="">
                                    <img v-else class="w-full h-full" src="http://mb1.els.best/static/image/5.c6da83c12132a221cff965aefc959904.png" alt="">
                                </div>
                                <p  style="line-height:46px">消息中心</p>
                                <div :class="activeRoute === '/message' ? 'h-[46px]' : ' '" class="absolute left-0  w-[2px] h-0   transition-all duration-300 bg-[#3678fe] "></div>
                            </li>
                            <li @click="goRoute(8)" class="h-[46px] list-none relative  pl-[50px] flex items-center group cursor-pointer  hover:text-[#3678fe]"
                             :class="activeRoute === '/welfare' ? 'text-[#3678fe] bg-[#f3fafd] font-bold' : 'text-[#8590a6] bg-white '"
                            >
                                <div class="w-5 h-5 mr-[10px]">
                                    <img v-if="activeRoute === '/welfare'" class="w-full h-full" src="http://mb1.els.best/static/image/6-1.bb8698837dee80be2e5f31658cd0d4da.png" alt="">
                                    <img v-else class="w-full h-full" src="http://mb1.els.best/static/image/6.d62837c7256bdcb8be821f3ad2972ea2.png" alt="">
                                </div>
                                <p  style="line-height:46px">红包</p>
                                <div :class="activeRoute === '/welfare' ? 'h-[46px]' : ' '" class="absolute left-0  w-[2px] h-0   transition-all duration-300 bg-[#3678fe] "></div>
                            </li>
                            <li @click="goRoute(9)" class="h-[46px] list-none relative  pl-[50px] flex items-center group cursor-pointer  hover:text-[#3678fe]"
                             :class="activeRoute === '/feeback' ? 'text-[#3678fe] bg-[#f3fafd] font-bold' : 'text-[#8590a6] bg-white '"
                            >
                                <div class="w-5 h-5 mr-[10px]">
                                    <img v-if="activeRoute === '/feeback'" class="w-full h-full" src="http://mb1.els.best/static/image/7-1.292dc81e3d6f153bdff5393e56dedd29.png" alt="">
                                    <img v-else class="w-full h-full" src="http://mb1.els.best/static/image/7.31525e63cb61f29775d42bb0d42d2027.png" alt="">
                                </div>
                                <p  style="line-height:46px">意见反馈</p>
                                <div :class="activeRoute === '/feeback' ? 'h-[46px]' : ' '" class="absolute left-0  w-[2px] h-0   transition-all duration-300 bg-[#3678fe] "></div>
                            </li>
                        </ul>

                    </div>
                </section>
            </section>
            <section class="right_section bg-white shadow-lg rounded-md w-[960px] p-7 min-h-[860px] ">
                <router-view></router-view>
            </section>
        </div>
    </section>
</template>


<style scoped>
   .bg_section{
    background: url(http://mb1.els.best/static/image/bg.dc5a82a281e10420d019c23e957bd692.png);
    width: 100%;
    height: auto;
    background-color: #e9edf8;
    background-position: 0 0;
    background-size: 100% auto;
    background-repeat: no-repeat;

   } 
</style>