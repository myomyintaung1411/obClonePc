<template>
   <section class="w-full relative">
      <div class="flex items-center">
      <b class="text-[#333] font-bold text-2xl">返水记录</b>
      <div class="ml-5">
           <div  class="px-4 py-2  rounded  tracking-widest actvie-background-btn font-bold text-sm text-center border-r" >
              一键领取
            </div>
      </div>
      <div class="ml-5 flex items-center space-x-3">
        <span>可领取返水金额 :</span>
        <span class="font-bold text-red-500">0</span>
      </div>
      <div class="ml-5 flex items-center space-x-3">
        <span>总计领取返水金额 :</span>
        <span class="font-bold text-red-500">0</span>
      </div>
    </div>
     <div class="py-5 w-full">
        <div class="flex items-center my-5">
            <div class="text-base text-[#333] tracking-wider">选择游戏：</div>
              <div class="w-[250px] h-10 relative rounded mt-2">
                <select
                  v-model="selectedBank"
                  id="countries"
                  class="bg-white border border-[#ccc] text-[#5f5c5c] tracking-wider text-sm rounded focus:border-[#3678fe] block w-full h-10 px-3"
                >
                  <option disabled value="" class="text-[#ccc]">
                    请选择平台
                  </option>
                  <option
                    class="py-4 text-[#333]"
                    v-for="bank in banks"
                    :key="bank.id"
                    :value="bank.id"
                    :class="{
                      'font-bold text-[#3678fe]': selectedBank === bank.id,
                    }"
                  >
                    {{ bank.value }}
                  </option>
                </select>
              </div>
        </div>

        <div class="flex items-center my-5">
            <div class="text-base text-[#333] tracking-wider">时间选择：</div>
            <div class="flex items-center border border-[#ccc] shadow rounded cursor-pointer">
            <div @click="clickDate(0)" class="px-4 py-2  tracking-wider text-sm text-center border-r"
             :class="date_type === 0 ? 'actvie-background-btn font-bold' : ''"
            >
              今日
            </div>
            <div @click="clickDate(1)" class="px-4 py-2 border-r tracking-wider text-sm text-center" :class="date_type === 1 ? 'actvie-background-btn font-bold' : ''">
              一周内
            </div>
            <div @click="clickDate(2)" class="px-4 py-2  border-r tracking-wider text-sm text-center" :class="date_type === 2 ? 'actvie-background-btn font-bold' : ''">
              半月内
            </div>
            <div @click="clickDate(3)" class="px-4 py-2   tracking-wider text-sm text-center" :class="date_type === 3 ? 'actvie-background-btn font-bold' : ''">
              一月内
            </div>
          </div>
        </div>
        <!--  -->
        <section class="data_section py-5 w-full relative">
            <div class="flex items-center justify-between pb-3 border-b border-[#e7e7e7] text-[#94a6b7]">
                <span>游戏名称</span>
                <span>返水金额</span>
                <span>状态</span>
                <span>返水时间</span>
                <span>金额</span>
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
