<template>
     <section class="w-full relative">
      <div class="flex items-end">
      <b class="text-[#333] font-bold text-2xl">个人资料</b>
      <span class="text-sm ml-3 text-[#94a6b7]">为了确保您的账户安全，请您填写相关安全信息，以备不时之需</span>
    </div>
    <div class="py-5 w-full">
        <span class="text-base text-[#333]">基本资料</span>
    </div>
    <div class="my-5 relative w-full">
        <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">真实姓名：</div>
            <div>
              <div class="w-[300px] h-10 relative rounded mt-2">
                <input
                
                  type="text"
                  placeholder="请输入真实姓名"
                  class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
                />
              </div>
            </div>
          </div>
        <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">出生日期：</div>
            <div>
              <div class="w-[300px] h-10 relative rounded mt-2">
                <!-- <input
                
                  type="text"
                  placeholder="选择日期"
                  class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
                /> -->
                      <div class="text-center">
        <!-- <VDatePicker  locale="zh" v-model="date" :mode="date" :masks="masks" :max-date="new Date()"  >
          <template v-slot="{ inputValue, inputEvents }">
            <div class="flex justify-center items-center">
              <input :value="inputValue.start" v-on="inputEvents.start" class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]" />
              <svg class="w-4 h-4 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <input :value="inputValue.end" v-on="inputEvents.end" class="border px-2 py-2 w-60 rounded focus:outline-none focus:border-indigo-300" />
            </div>
          </template>

        </VDatePicker > -->
         <VDatePicker locale="zh" v-model="date" :max-date="new Date()">
    <template #default="{ inputValue, inputEvents }">
      <div class="flex items-center justify-center">
        <input :value="inputValue" v-on="inputEvents" 
                
                  type="text"
                  placeholder="选择日期"
                  class="w-full h-10 border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
                /> 
      </div>
      <!-- <BaseInput :value="inputValue" v-on="inputEvents" /> -->
    </template>
  </VDatePicker>
      </div>
              </div>
            </div>
          </div>
        <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">邮箱：</div>
            <div>
              <div class="w-[300px] h-10 relative rounded mt-2">
                <input
                
                  type="text"
                  placeholder="请输入邮箱"
                  class="w-full h-full border border-[#ccc] rounded px-5 py-2 placeholder:tracking-wider focus:border-[#3678fe]"
                />
              </div>
            </div>
          </div>
        <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">手机号：</div>
            <div>
              <div class="w-[300px] h-10 relative rounded mt-2">
                <input
                
                  type="text"
                  placeholder="请输入手机号"
                  class="w-full h-full border border-[#ccc] rounded px-5 py-2 placeholder:tracking-wider focus:border-[#3678fe]"
                />
              </div>
            </div>
          </div>

           <div class="mt-5 mb-8">
            <div class="w-[300px] h-10 relative rounded">
              <button
                class="w-full rounded py-3 cursor-pointer bg-[#597ef7] hover:bg-blue-700 text-center tracking-wider text-base text-white"
              >
                立即存款
              </button>
            </div>
          </div>

          <div class="h-[1px] bg-slate-200 w-full "></div>
          <div class="py-4 w-full">
            <div class="flex items-center text-sm text-[#5f5c5c]">
                <span class="text-base text-[#333] mr-4">账户安全</span>
                <span>如果要修改请</span>
                <span class="text-[#3678fe] px-2 text-[12px] cursor-pointer">联系客服</span>
            </div>
          </div>
          <div class="py-4 w-full">
            <div class="flex items-center w-[300px] justify-between">
                <div class=" space-x-4 text-[#333] ">
                    <span>登录密码：</span>
                    <span class="text-[#5f5c5c]">*******</span>
                </div>
                 <div class="w-[100px] h-10 relative rounded">
              <button @click="changePassword"
                class="w-full rounded py-2 cursor-pointer actvie-background-btn  text-center tracking-wider text-base text-white"
              >
                修改
              </button>
            </div>
            </div>
            <div class="flex items-center w-[300px] justify-between mt-5">
                <div class=" space-x-4 text-[#333] ">
                    <span>提款密码：</span>
                    <span class="text-[#5f5c5c]">*******</span>
                </div>
                 <div class="w-[100px] h-10 relative rounded">
              <button @click="changePassword"
                class="w-full rounded py-2 cursor-pointer actvie-background-btn  text-center tracking-wider text-base text-white"
              >
                修改
              </button>
            </div>
            </div>
          </div>
    </div>
    </section>

        <ModalDialog :show="loginDialog" @close="close">
    <div
      class="px-10 py-8 bg-white overflow-y-scroll max-w-xl w-[567px] relative"
    >
      <p class="text-[#333] text-lg font-bold py-1 tracking-wide text-center">
        修改登录密码
      </p>
      <div class="py-4 px-3 relative w-full">
        <div class="flex items-center space-x-3 my-5">
          <div
            class="flex items-center text-[#333] text-sm tracking-wider space-x-2 mt-2 mr-10"
          >
            <span class="text-red-500 mt-1">*</span>
            <span>原密码</span>
          </div>
          <div class="w-[300px] h-10 relative rounded mt-2">
            <input
              type="text"
              placeholder="请输入原密码"
              class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
            />
          </div>
        </div>
        <div class="flex items-center space-x-3 my-5">
          <div
            class="flex items-center text-[#333] text-sm tracking-wider space-x-2 mt-2 mr-10"
          >
            <span class="text-red-500 mt-1">*</span>
            <span>新密码</span>
          </div>
          <div class="w-[300px] h-10 relative rounded mt-2">
            <input
              type="text"
              placeholder="请输入新密码"
              class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
            />
          </div>
        </div>
        <div class="flex items-center space-x-3 my-5">
          <div
            class="flex items-center text-[#333] text-sm tracking-wider space-x-2 mt-2 mr-7"
          >
            <span class="text-red-500 mt-1">*</span>
            <span>确认密码</span>
          </div>
          <div class="w-[300px] h-10 relative rounded mt-2">
            <input
              type="text"
              placeholder="请再次输入新密码"
              class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
            />
          </div>
        </div>


        <div class="my-5 ml-[111px]">
          <div class="w-[300px] h-10 relative rounded">
            <button
              class="w-full rounded py-3 cursor-pointer bg-[#597ef7] hover:bg-blue-700 text-center tracking-wider text-base text-white"
            >
              确认操作
            </button>
          </div>
        </div>
      </div>
    </div>
  </ModalDialog>

</template>

<script setup>
import { ref,reactive } from "vue";
import ModalDialog from "@/components/ModalDialog.vue";
const loginDialog = ref(false);

const date = ref(new Date("1998/12/12"));
const masks = reactive({
  input: "YYYY/MM/DD",
});
const clickBtn = ref(-1)

const changePassword = (number) => {
    clickBtn.value = number
   loginDialog.value = true;
};


const close = () => {
  loginDialog.value = false;
};
</script>