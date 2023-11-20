<template>
   <section class="w-full relative">
      <div class="flex items-center">
      <b class="text-[#333] font-bold text-2xl">红包记录</b>
      <div class="ml-5">
           <div  class="px-4 py-2  rounded  tracking-widest actvie-background-btn font-bold text-sm text-center border-r" >
              领取红包
            </div>
      </div>
      <div class="ml-5 flex items-center space-x-3">
        <span>剩余领取次数 :</span>
        <span class="font-bold text-red-500">0</span>
      </div>
      <div class="ml-5 flex items-center space-x-3">
        <span>累计领取次数 :</span>
        <span class="font-bold text-red-500">0</span>
      </div>
    </div>
     <div class="py-5 w-full">
        <!--  -->
        <section class="data_section py-5 w-full relative">
            <div class="flex items-center justify-between pb-3 border-b border-[#e7e7e7] text-[#94a6b7]">
                <span>序号</span>
                <span>充值金额	</span>
                <span>红包金额	</span>
                <span>充值时间	</span>
                <span>领取时间</span>
            </div>
            <div class="h-20 text-center text-[#b3b0b0] text-base w-full tracking-widest " style="line-height:80px">
                暂无数据
            </div>
        </section>
     </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
const trans_type = ref(0)
const date_type = ref(0)
const selectedBank = ref(""); //for bank
const banks = [
  { id: 0, value: "全平台" },
  { id: 1, value: "FB体育" },
  { id: 2, value: "天豪棋牌" },
  { id: 3, value: "天成彩票" },
  { id: 4, value: "AG亚游" },
];

const clickBtn = (number) => {
    trans_type.value = number
}
const clickDate = (number) => {
    date_type.value = number
}


</script>
