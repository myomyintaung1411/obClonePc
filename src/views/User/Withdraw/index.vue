<template>
  <section class="w-full relative">
    <div class="flex items-end">
      <b class="text-[#333] font-bold text-2xl">取款</b>
      <span class="text-sm ml-3 text-[#94a6b7]"
        >通常您的提款只需3 -
        15分钟即可到账，若超过30分钟仍未到账，请联系在线客服核查</span
      >
    </div>

    <div class="tab_section relative my-5">
      <div
        class="whitespace-nowrap relative z-10 flex items-center space-x-5 cursor-pointer"
      >
        <div @click="clickBtn(0)" :class="active_btn === 0 ? 'border-b border-[#409eff] text-[#409eff] font-bold' : 'font-medium'"
          class="h-10 relative  text-[#333] hover:text-[#409eff] border-b hover:border-[#409eff]"
          style="line-height: 40px"
        >
          银行卡取款
        </div>
        <div @click="clickBtn(1)" :class="active_btn === 1 ? 'border-b border-[#409eff] text-[#409eff] font-bold' : 'font-medium'"
          class="h-10 relative  text-[#333] hover:text-[#409eff] border-b hover:border-[#409eff]"
          style="line-height: 40px"
        >
          USDT取款
        </div>
      </div>
    </div>
    <section class="relative w-full py-5">

      <div class="w-full flex justify-between space-x-10 items-center">
        <div class="h-[90px] w-[435px] bg-white shadow rounded-md">
          <div class="flex items-center space-x-4 h-full pl-5">
            <img
              src="http://mb1.els.best/static/image/sdqianbao.dc40ee4f3863c42e32b6a486b5b706fc.svg"
              alt=""
              class="w-10 h-10"
            />
            <div class="flex flex-col cursor-pointer">
              <span>中心钱包</span>
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
        </div>
        <div class="h-[90px] w-[435px] bg-white shadow rounded-md">
          <div class="flex items-center space-x-4 h-full pl-5">
            <img
              src="http://mb1.els.best/static/image/zxqianbao.0949a0930bb15fa74de93288493d5fc9.svg"
              alt=""
              class="w-10 h-10"
            />
            <div class="flex flex-col cursor-pointer">
              <span>打码量</span>
              <div class="flex items-center space-x-2">
                <span class="text-2xl font-bold text-[#333]">0.00</span>
                <span class="text-base">元</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--  -->
      <div v-if="active_btn === 0" class="py-6 w-full relative form_section">
        <form @click.prevent>
          <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">取款金额</div>
            <div>
              <div class="w-[300px] h-10 relative rounded mt-2">
                <input
                  type="text"
                  placeholder="取款金额"
                  class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
                />
              </div>
            </div>
          </div>
          <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">取款密码</div>
            <div>
              <div class="w-[300px] h-10 relative rounded mt-2">
                <input
                  type="text"
                  placeholder="取款资金密码"
                  class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
                />
              </div>
            </div>
          </div>
          <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">选择银行</div>
            <div>
              <div  @click="addBankCard()" class="w-[300px] h-10 relative rounded mt-2 border border-[#ccc] hover:border-[#3678fe] cursor-pointer ">
                <div class="h-full w-full flex items-center justify-center space-x-3 text-[#3678fe]">
                    <img src="http://mb1.els.best/static/image/tianjia.5395050f231e402684eb5cd3a300729a.svg" alt="addimage" class="w-5">
                 <span>添加银行卡</span>
                </div>
              </div>
            </div>
          </div>
          <div class="my-5">
              <div class="flex items-center space-x-3 mt-2">
                <img
                  src="http://mb1.els.best/static/image/tisi.8d134098e1e18d283c7886fb98257f6d.svg"
                  alt="imge"
                  class="w-5"
                />
                <span class="text-sm tracking-[1px] text-[#94a6b7]"
                  >您还没绑定银行卡，为了您的资金安全，绑定银行卡时，需要填写您的个人信</span
                >
              </div>
          </div>
           <div class="my-5">
            <div class="w-[300px] h-10 relative rounded">
              <button
                class="w-full rounded py-3 cursor-pointer bg-[#597ef7] hover:bg-blue-700 text-center tracking-wider text-base text-white"
              >
                立即存款
              </button>
            </div>
          </div>
        </form>
      </div>

      <div v-if="active_btn === 1" class="py-6 w-full relative form_section">
        <form @click.prevent>

          <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">存款银行</div>
            <div class="flex items-center">
              <div class="w-[300px] h-10 relative rounded mt-2">
                <select
                  v-model="selectedUSDT"
                  id="countries"
                  class="bg-white border   border-[#ccc] text-[#5f5c5c] tracking-wider text-sm rounded focus:border-[#3678fe] block w-full h-10 px-3"
                >
                  <option disabled value="" class="text-[#ccc]">
                    请选择USDT地址
                  </option>
                  <option
                    class=" text-[#333] py-2   " 
                    v-for="usdt in usdtData"
                    :key="usdt.id"
                    :value="usdt.id"
                    :class="{
                      'font-bold text-[#3678fe] ': selectedBank === usdt.id,
                    }"
                  >
                    {{ usdt.value }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">取款金额</div>
            <div>
              <div class="w-[300px] h-10 relative rounded mt-2">
                <input
                  type="text"
                  placeholder="取款金额"
                  class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
                />
              </div>
            </div>
          </div>

          <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">取款密码</div>
            <div>
              <div class="w-[300px] h-10 relative rounded mt-2">
                <input
                  type="text"
                  placeholder="取款资金密码"
                  class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
                />
              </div>
            </div>
          </div>

          <div class="my-5">
            <div class="flex items-center">
                <span class="text-[#333] ">USDT换算：</span>
                <span class="text-[#94a6b7] ml-7">≈0.00 USDT </span>
                <span class="text-[#94a6b7] ml-7">参考汇率：6.56</span>
            </div>
          </div>

          <div class="my-5">
            <div class="flex items-center">
                <span class="text-[#333] ">实际到账：</span>
                <span class="text-[#94a6b7] ml-7">0.00 USDT</span>
            </div>
          </div>

           <div class="my-5">
            <div class="w-[300px] h-10 relative rounded">
              <button
                class="w-full rounded py-3 cursor-pointer bg-[#597ef7] hover:bg-blue-700 text-center tracking-wider text-base text-white"
              >
                立即存款
              </button>
            </div>
          </div>

        </form>
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
            class="flex items-center text-[#333] text-sm tracking-wider space-x-2 mt-2 mr-3"
          >
            <span class="text-red-500 mt-1">*</span>
            <span>请选择支持银行</span>
          </div>
          <div class="w-[300px] h-10 relative rounded mt-2">
            <select
              v-model="selectedBank"
              id="countries"
              class="bg-white border border-[#ccc] text-[#5f5c5c] tracking-wider text-sm rounded focus:border-[#3678fe] block w-full h-10 px-3"
            >
              <option disabled value="" class="text-[#ccc]">请选择支持银行</option>
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
</template>

<script setup>
import ModalDialog from "@/components/ModalDialog.vue";

import { ref } from "vue";
const active_btn = ref(0); 
const bankDialog = ref(false);

const selectedUSDT = ref(""); //for usdt

const selectedBank = ref(""); //for bank
const banks = [
  { id: 0, value: "中国农业银行" },
  { id: 1, value: "中国银行" },
  { id: 2, value: "交通银行" },
  { id: 3, value: "工商银行" },
  { id: 4, value: "建设银行" },
];

const usdtData = [
  { id: 0, value: "675464565465464564564565" },
  { id: 1, value: "078657554654645645645645" },
  { id: 2, value: "453587678767867876866786" },
  { id: 3, value: "344756765765756757657656" },
];


const clickBtn = (number) => {
  active_btn.value = number;
};

const addBankCard = () => {
  bankDialog.value = true;
};

const close = () => {
  bankDialog.value = false;
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