<template>
   <section class="w-full relative">
      <div class="flex items-center">
      <b class="text-[#333] font-bold text-2xl">活动申请记录</b>
    </div>
     <div class="py-5 w-full">
        <section class="data_section py-5 w-full relative">
            <div class="flex items-center justify-between pb-3 border-b border-[#e7e7e7] text-[#94a6b7]">
                <span>活动标题</span>
                <span>申请时间</span>
                <span>状态</span>
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
</script>
