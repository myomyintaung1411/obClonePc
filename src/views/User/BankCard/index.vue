<template>
  <section class="w-full relative">
    <div class="flex items-end">
      <b class="text-[#333] font-bold text-2xl">我的钱包</b>
      <span class="text-sm ml-3 text-[#94a6b7]">银行卡/USDT 地址管理</span>
    </div>
    <ul
      class="list-nones my-5 flex justify-between p-5 border boder-[#f0f3f7] text-[#4b5e6f] w-full h-[90px] bg-white shadow rounded-md"
    >
      <div class="flex items-center space-x-4">
        <img
          src="http://mb1.els.best/static/image/sdqianbao.dc40ee4f3863c42e32b6a486b5b706fc.svg"
          alt=""
          class="w-10 h-10"
        />
        <div class="flex flex-col cursor-pointer">
          <span>钱包</span>
          <div class="flex items-center space-x-2">
            <span class="text-2xl font-bold text-[#333]">0.00</span>
            <span class="text-base">元</span>
            <span
              ><img
                src="http://mb1.els.best/static/image/shuaxin.6eaac0e1956ef2120631f454674d245a.svg"
                alt=""
                class="w-5"
            /></span>
          </div>
        </div>
      </div>
      <div
        class="bg-[#597ef7] hover:bg-blue-700 px-5 rounded-full h-[30px] text-white tracking-wider cursor-pointer"
        style="line-height: 30px"
      >
        一键回收
      </div>
    </ul>
    <div class="tab_section relative">
      <div
        class="whitespace-nowrap relative z-10 flex items-center space-x-5 cursor-pointer"
      >
        <div
          @click="clickBtn(0)"
          :class="
            active_btn === 0
              ? 'border-b border-[#409eff] text-[#409eff] font-bold'
              : 'font-medium'
          "
          class="h-10 relative text-[#333] hover:text-[#409eff] border-b hover:border-[#409eff]"
          style="line-height: 40px"
        >
          银行卡
        </div>
        <div
          @click="clickBtn(1)"
          :class="
            active_btn === 1
              ? 'border-b border-[#409eff] text-[#409eff] font-bold'
              : 'font-medium'
          "
          class="h-10 relative text-[#333] hover:text-[#409eff] border-b hover:border-[#409eff]"
          style="line-height: 40px"
        >
          USDT
        </div>
      </div>
    </div>
    <section v-if="active_btn === 0" class="relative w-full py-5">
      <div class="w-full flex justify-center items-center">
        <div
          @click="addBankCard()"
          class="w-[400px] rounded py-3 cursor-pointer bg-[#597ef7] hover:bg-blue-700 text-center tracking-wider text-base text-white"
        >
          添加银行卡
        </div>
      </div>
    </section>
    <section v-if="active_btn === 1" class="relative w-full py-5">
      <div class="w-full flex justify-center items-center">
        <div
          @click="addUsdtCard()"
          class="w-[400px] rounded py-3 cursor-pointer bg-[#597ef7] hover:bg-blue-700 text-center tracking-wider text-base text-white"
        >
          添加银行卡
        </div>
      </div>
    </section>
  </section>

  <ModalDialog :show="bankDialog" @close="close">
    <div
      class="px-10 py-8 bg-white overflow-y-scroll max-w-xl w-[567px] relative"
    >
      <p class="text-[#333] text-lg font-bold py-1 tracking-wide text-center">
        绑定银行卡
      </p>
      <div class="py-4 px-3 relative w-full">
        <div class="flex items-center space-x-3 my-5">
          <div
            class="flex items-center text-[#333] text-sm tracking-wider space-x-2 mt-2 mr-10"
          >
            <span class="text-red-500 mt-1">*</span>
            <span>填写开户行</span>
          </div>
          <div class="w-[300px] h-10 relative rounded mt-2">
            <select
              v-model="selectedBank"
              id="countries"
              class="bg-white border border-[#ccc] text-[#5f5c5c] tracking-wider text-sm rounded focus:border-[#3678fe] block w-full h-10 px-3"
            >
              <option disabled value="" class="text-[#ccc]">请选择平台</option>
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
        <div class="flex items-center space-x-3 my-5">
          <div
            class="flex items-center text-[#333] text-sm tracking-wider space-x-2 mt-2 mr-10"
          >
            <span class="text-red-500 mt-1">*</span>
            <span>填写开户行</span>
          </div>
          <div class="w-[300px] h-10 relative rounded mt-2">
            <input
              type="text"
              placeholder="请输入开户行"
              class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
            />
          </div>
        </div>
        <div class="flex items-center space-x-3 my-5">
          <div
            class="flex items-center text-[#333] text-sm tracking-wider space-x-2 mt-2 mr-14"
          >
            <span class="text-red-500 mt-1">*</span>
            <span>填写卡号</span>
          </div>
          <div class="w-[300px] h-10 relative rounded mt-2">
            <input
              type="text"
              placeholder="填写卡号"
              class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
            />
          </div>
        </div>
        <div class="flex items-center space-x-3 my-5">
          <div
            class="flex items-center text-[#333] text-sm tracking-wider space-x-2 mt-2 mr-3"
          >
            <span class="text-red-500 mt-1">*</span>
            <span>填写持卡人姓名</span>
          </div>
          <div class="w-[300px] h-10 relative rounded mt-2">
            <input
              type="text"
              placeholder="填写持卡人姓名"
              class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
            />
          </div>
        </div>
        <div class="flex items-center space-x-3 my-5">
          <div
            class="flex items-center text-[#333] text-sm tracking-wider space-x-2 mt-2 mr-14"
          >
            <span class="text-red-500 mt-1">*</span>
            <span>支付密码</span>
          </div>
          <div class="w-[300px] h-10 relative rounded mt-2">
            <input
              type="text"
              placeholder="支付密码"
              class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
            />
          </div>
        </div>

        <div class="my-5 ml-[142px]">
          <div class="w-[300px] h-10 relative rounded">
            <button
              class="w-full rounded py-3 cursor-pointer bg-[#597ef7] hover:bg-blue-700 text-center tracking-wider text-base text-white"
            >
              绑定
            </button>
          </div>
        </div>
      </div>
    </div>
  </ModalDialog>
  <ModalDialog :show="usdtDialog" @close="close">
    <div
      class="px-10 py-8 bg-white overflow-y-scroll max-w-xl w-[567px] relative"
    >
      <p class="text-[#333] text-lg font-bold py-1 tracking-wide text-center">
        绑定USDT地址
      </p>
      <div class="py-4 px-3 relative w-full">
        <div class="flex items-center space-x-3 my-5">
          <div
            class="flex items-center text-[#333] text-sm tracking-wider space-x-2 mt-2 mr-3"
          >
            <span class="text-red-500 mt-1">*</span>
            <span>USDT地址</span>
          </div>
          <div class="w-[300px] h-10 relative rounded mt-2">
            <input
              type="text"
              placeholder="绑定USDT地址"
              class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
            />
          </div>
        </div>
        <div class="flex items-center space-x-3 my-5">
          <div
            class="flex items-center text-[#333] text-sm tracking-wider space-x-2 mt-2 mr-2"
          >
            <span class="text-red-500 mt-1">*</span>
            <span>USDT协议</span>
          </div>
          <div class="w-[300px] h-10 relative rounded mt-6">
            <div>
              <label class="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio text-[#3678fe] "
                  value="ERC20"
                  v-model="selectedOption"
                />
                <span class="ml-2">ERC20</span>
              </label>
              <label class="inline-flex items-center ml-6 cursor-pointer">
                <input
                  type="radio"
                  class="form-radio text-[#3678fe] ="
                  value="TRC20"
                  v-model="selectedOption"
                />
                <span class="ml-2">TRC20</span>
              </label>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-3 my-5">
          <div
            class="flex items-center text-[#333] text-sm tracking-wider space-x-2 mt-2 mr-6"
          >
            <span class="text-red-500 mt-1">*</span>
            <span>支付密码</span>
          </div>
          <div class="w-[300px] h-10 relative rounded mt-2">
            <input
              type="text"
              placeholder="支付密码"
              class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
            />
          </div>
        </div>

        <div class="my-5 ml-[110px]">
          <div class="w-[300px] h-10 relative rounded">
            <button
              class="w-full rounded py-3 cursor-pointer bg-[#597ef7] hover:bg-blue-700 text-center tracking-wider text-base text-white"
            >
              绑定
            </button>
          </div>
        </div>
      </div>
    </div>
  </ModalDialog>
</template>


<script setup>
import ModalDialog from "@/components/ModalDialog.vue";
import { ref } from "vue";
const active_btn = ref(0);
const bankDialog = ref(false);
const usdtDialog = ref(false);
const selectedOption = ref("ERC20");
const selectedBank = ref(""); //for bank
const banks = [
  { id: 0, value: "中国农业银行" },
  { id: 1, value: "中国银行" },
  { id: 2, value: "交通银行" },
  { id: 3, value: "工商银行" },
  { id: 4, value: "建设银行" },
];

const clickBtn = (number) => {
  active_btn.value = number;
};

const addBankCard = () => {
  bankDialog.value = true;
};
const addUsdtCard = () => {
  usdtDialog.value = true;
};
const close = () => {
  bankDialog.value = false;
  usdtDialog.value = false;
};
</script>


<style scoped>
.tab_section::after {
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