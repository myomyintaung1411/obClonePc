<template>
  <section class="w-full relative">
    <div class="flex items-end">
      <b class="text-[#333] font-bold text-2xl">存款</b>
      <span class="text-sm ml-3 text-[#94a6b7]">存款金额会存入中心钱包</span>
    </div>

    <div class="py-5 w-full">
      <div class="flex items-center space-x-5 cursor-pointer">
        <div
          @click="PaymentClick(0)"
          class="w-[120px] shadow rounded flex flex-col items-center justify-center h-[120px] bg-white"
          :class="
            active_btn === 0
              ? 'border-[2px] border-[#3678fe]'
              : 'border border-[#ccc]'
          "
        >
          <img
            src="http://mb1.els.best/static/image/icoOnlineTransfer2@3x.png"
            alt="bank"
            class="w-10"
          />
          <p class="pt-2 tracking-wider text-sm">银行卡充值</p>
        </div>
        <div
          :class="
            active_btn === 1
              ? 'border-[2px] border-[#3678fe]'
              : 'border border-[#ccc]'
          "
          @click="PaymentClick(1)"
          class="w-[120px] shadow rounded flex flex-col items-center justify-center h-[120px] bg-white"
        >
          <img
            src="http://mb1.els.best/static/image/usdt.png"
            alt="bank"
            class="w-10"
          />
          <p class="pt-2 tracking-wider text-sm">USDT充值</p>
        </div>
        <div
          :class="
            active_btn === 2
              ? 'border-[2px] border-[#3678fe]'
              : 'border border-[#ccc]'
          "
          @click="PaymentClick(2)"
          class="w-[120px] shadow rounded flex flex-col items-center justify-center h-[120px] bg-white"
        >
          <img
            src="http://mb1.els.best/static/image/QuickWechat.png"
            alt="bank"
            class="w-10"
          />
          <p class="pt-2 tracking-wider text-sm">微信充值</p>
        </div>
        <div
          :class="
            active_btn === 3
              ? 'border-[2px] border-[#3678fe]'
              : 'border border-[#ccc]'
          "
          @click="PaymentClick(3)"
          class="w-[120px] shadow rounded flex flex-col items-center justify-center h-[120px] bg-white"
        >
          <img
            src="http://mb1.els.best/static/image/pay_alipay.png"
            alt="bank"
            class="w-10"
          />
          <p class="pt-2 tracking-wider text-sm">支付宝充值</p>
        </div>
      </div>
    </div>

    <section v-if="active_btn === 0" class="py-2 w-full relative">
      <div
        class="px-10 py-5 space-y-3 rounded inline-block shadow border border-[#dfeaf6]"
        style="background-image: linear-gradient(180deg, #fff, #f9fcff)"
      >
        <div class="flex items-center">
          <span class="text-[#94a6b7]">收款账号：</span>
          <span>2231 3434 3434 3434 454</span>
        </div>
        <div class="flex items-center">
          <span class="text-[#94a6b7]">银行户名：</span>
          <span>王某某</span>
        </div>
        <div class="flex items-center">
          <span class="text-[#94a6b7]">开 户 行：</span>
          <span>中国农业银行</span>
        </div>
        <div class="flex items-center">
          <span class="text-[#94a6b7]">银行地址：</span>
          <span>中国农业银行海外总行</span>
        </div>
      </div>
      <div class="py-6 w-full relative form_section">
        <form @click.prevent>
          <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">存款银行</div>
            <div class="flex items-center">
              <div class="w-[300px] h-10 relative rounded mt-2">
                <select
                  v-model="selectedBank"
                  id="countries"
                  class="bg-white border border-[#ccc] text-[#5f5c5c] tracking-wider text-sm rounded focus:border-[#3678fe] block w-full h-10 px-3"
                >
                  <option disabled value="" class="text-[#ccc]">
                    请选择支持银行
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
          </div>
          <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">存款人姓名</div>
            <div class="flex items-center space-x-7">
              <div class="w-[300px] h-10 relative rounded mt-2">
                <input
                  type="text"
                  placeholder="请输入信息"
                  class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
                />
              </div>

              <div class="flex items-center space-x-3 mt-2">
                <img
                  src="http://mb1.els.best/static/image/tisi.8d134098e1e18d283c7886fb98257f6d.svg"
                  alt="imge"
                  class="w-5"
                />
                <span class="text-sm tracking-[1px] text-[#94a6b7]"
                  >为及时到账，请务必输入正确的存款人姓名</span
                >
              </div>
            </div>
          </div>
          <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">银行卡号</div>
            <div class="flex items-center space-x-7">
              <div class="w-[300px] h-10 relative rounded mt-2">
                <input
                  type="text"
                  placeholder="请输入银行卡号"
                  class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
                />
              </div>

              <div class="flex items-center space-x-3 mt-2">
                <img
                  src="http://mb1.els.best/static/image/tisi.8d134098e1e18d283c7886fb98257f6d.svg"
                  alt="imge"
                  class="w-5"
                />
                <span class="text-sm tracking-[1px] text-[#94a6b7]"
                  >为及时到账，请务必输入正确的银行卡号</span
                >
              </div>
            </div>
          </div>
          <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">开户行地址</div>
            <div class="flex items-center space-x-7">
              <div class="w-[300px] h-10 relative rounded mt-2">
                <input
                  type="text"
                  placeholder="请输入开户行地址"
                  class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
                />
              </div>

              <div class="flex items-center space-x-3 mt-2">
                <img
                  src="http://mb1.els.best/static/image/tisi.8d134098e1e18d283c7886fb98257f6d.svg"
                  alt="imge"
                  class="w-5"
                />
                <span class="text-sm tracking-[1px] text-[#94a6b7]"
                  >为及时到账，请务必输入正确的开户行地址</span
                >
              </div>
            </div>
          </div>
          <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">存款金额</div>
            <div class="flex items-center space-x-7">
              <div class="w-[300px] h-10 relative rounded mt-2">
                <input
                  type="text"
                  placeholder="请输入取款金额 100 - 1000000"
                  class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
                />
              </div>

              <div class="flex items-center space-x-3 mt-2">
                <img
                  src="http://mb1.els.best/static/image/tisi.8d134098e1e18d283c7886fb98257f6d.svg"
                  alt="imge"
                  class="w-5"
                />
                <span class="text-sm tracking-[1px] text-[#94a6b7]"
                  >建议您存入带尾数的金额（例101、503），以便存款后能更快匹配到账</span
                >
              </div>
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

    <section v-else-if="active_btn === 1" class="py-2 w-full relative">
      <div class="py-5 w-full relative">
        <div class="text-base text-[#333]">协议：</div>
        <div class="mt-2">
          <div class="flex items-center space-x-3 cursor-pointer">
            <div
              :class="
                active_usdt === 0
                  ? 'border-[2px] border-[#3678fe]'
                  : 'border border-[#ccc]'
              "
              @click="usdtClick(0)"
              class="rounded w-[150px] h-10 text-center flex items-center justify-center"
            >
              TRC20
            </div>
            <div
              @click="usdtClick(1)"
              :class="
                active_usdt === 1
                  ? 'border-[2px] border-[#3678fe]'
                  : 'border border-[#ccc]'
              "
              class="border border-[#ccc] rounded w-[150px] h-10 text-center flex items-center justify-center"
            >
              ERC20
            </div>
            <div class="flex items-center space-x-3 mt-2">
              <img
                src="http://mb1.els.best/static/image/tisi.8d134098e1e18d283c7886fb98257f6d.svg"
                alt="imge"
                class="w-5"
              />
              <span class="text-sm tracking-[1px] text-[#94a6b7]"
                >选择协议充值。</span
              >
            </div>
          </div>
          <div class="pt-3 pb-5 text-[#6c7985] text-[12px] tracking-wider">
            小额高频交易推荐
          </div>
          <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">存款金额</div>
            <div class="flex items-center space-x-7">
              <div class="w-[300px] h-10 relative rounded mt-2">
                <input
                  type="text"
                  placeholder="请输入取款金额 0.00 - 0.00"
                  class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
                />
              </div>

              <div class="flex items-center space-x-3 mt-2">
                <img
                  src="http://mb1.els.best/static/image/tisi.8d134098e1e18d283c7886fb98257f6d.svg"
                  alt="imge"
                  class="w-5"
                />
                <span class="text-sm tracking-[1px] text-[#94a6b7]">建议您存入带尾数的金额（例101、503），以便存款后能更快匹配到账</span >
              </div>
            </div>
          </div>
          <div class="py-5 text-[#94a6b7]">
            <span>≈ <span class="text-red-500">0.00</span> USDT</span>
            <span class="ml-16">参考汇率：6.42</span>
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
        </div>
      </div>
    </section>

    <section v-else-if="active_btn === 2 || active_btn === 3" class="py-2 w-full relative">
        <div class=" relative">
           <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">存款金额</div>
            <div class="flex items-center space-x-7">
              <div class="w-[300px] h-10 relative rounded mt-2">
                <input
                  type="text"
                  placeholder="请输入取款金额 0.00 - 0.00"
                  class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
                />
              </div>

              <div class="flex items-center space-x-3 mt-2">
                <img
                  src="http://mb1.els.best/static/image/tisi.8d134098e1e18d283c7886fb98257f6d.svg"
                  alt="imge"
                  class="w-5"
                />
                <span class="text-sm tracking-[1px] text-[#94a6b7]"
                  >建议您存入带尾数的金额（例101、503），以便存款后能更快匹配到账立即存款</span
                >
              </div>
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
        </div>
     </section>
     
  </section>
</template>

<script setup>
import { ref } from "vue";

const active_usdt = ref(0); //for usdt
const active_btn = ref(0); // for bank
const selectedBank = ref(""); //for bank
const banks = [
  { id: 0, value: "中国农业银行" },
  { id: 1, value: "中国银行" },
  { id: 2, value: "交通银行" },
  { id: 3, value: "工商银行" },
];

const PaymentClick = (number) => {
  active_btn.value = number;
};
const usdtClick = (number) => {
  active_usdt.value = number;
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