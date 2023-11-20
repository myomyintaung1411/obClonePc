<template>
    <section class="w-full  relative">
        <div>
            <b class="text-[#333] font-bold text-2xl">消息中心</b>
        </div>

    <div class="tab_section relative my-5">
      <div
        class="whitespace-nowrap relative z-10 flex items-center space-x-5 cursor-pointer"
      >
        <div @click="clickBtn(0)" :class="active_btn === 0 ? 'border-b border-[#409eff] text-[#409eff] font-bold' : 'font-medium'"
          class="h-10 relative  text-[#333] hover:text-[#409eff] border-b hover:border-[#409eff]"
          style="line-height: 40px"
        >
          公告 
        </div>
        <div @click="clickBtn(1)" :class="active_btn === 1 ? 'border-b border-[#409eff] text-[#409eff] font-bold' : 'font-medium'"
          class="h-10 relative  text-[#333] hover:text-[#409eff] border-b hover:border-[#409eff]"
          style="line-height: 40px"
        >
          站内信
        </div>
      </div>
    </div>
    <section class="py-5 w-full relative">
        <div v-for="n in 5" :key="n" class="py-2 text-sm text-[#333] font-medium tracking-widest bg-white px-3 border-b pb-5 border-[#ccc]">
            ★★★尊敬的客户：我司亚博体育场馆比分系统于2020年7月7日（星期二）11:00-13:35进行滚球比分系统维护，维护期间将无法查看比分，可以正常游戏，给您带来不便敬请谅解，谢谢。
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