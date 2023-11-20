<template>
    <section class="w-full  relative">
        <div class="flex items-center justify-between">
           <div class="flex  items-end ">
            <b class="text-[#333] font-bold text-2xl">转账</b>
            <span class="text-sm ml-3 text-[#94a6b7]">场馆钱包和场馆钱包之间不可以互转</span>
          </div>
          <div class="flex items-center border border-[#ccc] shadow rounded cursor-pointer">
            <div @click="clickBtn(0)" class="px-4 py-2  tracking-wider text-sm text-center"
             :class="active_btn === 0 ? 'actvie-background-btn font-bold' : ''"
            >
              转账模式
            </div>
            <div @click="clickBtn(1)" class="px-4 py-2  tracking-wider text-sm text-center" :class="active_btn === 1 ? 'actvie-background-btn font-bold' : ''">
              转账模式
            </div>
          </div>
        </div>
        <ul class="list-nones my-5 flex justify-between p-5 border boder-[#f0f3f7] text-[#4b5e6f] w-full h-[90px] bg-white shadow rounded-md">
            <div class="flex items-center space-x-4">
                <img src="http://mb1.els.best/static/image/sdqianbao.dc40ee4f3863c42e32b6a486b5b706fc.svg" alt="" class="w-10 h-10">
            <div class="flex flex-col cursor-pointer">
                <span>钱包</span>
                <div class="flex items-center space-x-2">
                    <span class="text-2xl font-bold text-[#333]">0.00</span>
                    <span class="text-base">元</span>
                    <span><img src="http://mb1.els.best/static/image/shuaxin.6eaac0e1956ef2120631f454674d245a.svg" alt=""
                     class="w-5"
                    ></span>
                </div>
            </div>
            </div>
            <div class="bg-[#597ef7] hover:bg-blue-700  px-5 rounded-full h-[30px] text-white tracking-wider cursor-pointer " style="line-height:30px">一键回收</div>
        </ul>
        <section class="py-5 w-full  relative">
            <div class="grid grid-cols-4  gap-4 cursor-pointer">
                <div v-for="n in 8" :key="n" class="border-[#dfeaf6] border relative rounded w-[210px] h-[90px] " style="background-image: linear-gradient(180deg, #fff, #f9fcff)">
                    <div class="w-full h-full py-3 px-3 flex flex-col justify-center  ">
                        <div class="flex justify-between items-center text-[#333] w-full">
                            <span class="text-[12px]">FB体育</span>
                            <span>刷新</span>
                        </div>
                        <div class="pt-2 font-bold text-black">
                            0.00
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>
import { ref } from "vue";
const active_btn = ref(0); 

const clickBtn = (number) => {
  active_btn.value = number;
};

</script>

<style scoped>
    .tab_section::after{
   content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #e4e7ed;
    z-index: 1;
    }
</style>