<template>
  <div class="about-us w-full h-full relative py-10">
    <div
      class="max-w-7xl mx-auto min-h-[690px] relative flex bg-white shadow rounded"
    >
      <div
        class="left_section w-[240px] flex flex-col relative border-r border-[#e1e4e6]"
      >
        <div class="relative">
          <ul class="list-none py-5 px-0">
            <li
              @click="clickTab(0)"
              :class="active_section === 0 ? 'bg-[#f3fafd]' : ''"
              class="h-[50px] transition-all duration-300 hover:bg-[#f3fafd] relative cursor-pointer text-[#364a51] w-full mb-2"
              style="line-height: 50px"
            >
              <div class="flex items-center ml-10 space-x-4 h-full">
                <img
                  class="w-5"
                  src="http://mb1.els.best/static/image/1587555761884253.png"
                  alt=""
                />
                <p class="text-sm font-bold">常见问题</p>
              </div>
            </li>
            <li
              @click="clickTab(1)"
              :class="active_section === 1 ? 'bg-[#f3fafd]' : ''"
              class="h-[50px] transition-all duration-300 hover:bg-[#f3fafd] relative cursor-pointer text-[#364a51] w-full mb-2"
              style="line-height: 50px"
            >
              <div class="flex items-center ml-10 space-x-4 h-full">
                <img
                  class="w-5"
                  src="http://mb1.els.best/static/image/1587556756778694.png"
                  alt=""
                />
                <p class="text-sm font-bold">博彩责任</p>
              </div>
            </li>
            <li
              @click="clickTab(2)"
              :class="active_section === 2 ? 'bg-[#f3fafd]' : ''"
              class="h-[50px] transition-all duration-300 hover:bg-[#f3fafd] relative cursor-pointer text-[#364a51] w-full mb-2"
              style="line-height: 50px"
            >
              <div class="flex items-center ml-10 space-x-4 h-full">
                <img
                  class="w-5"
                  src="http://mb1.els.best/static/image/1587555785235453.png"
                  alt=""
                />
                <p class="text-sm font-bold">隐私政策</p>
              </div>
            </li>
            <li
              @click="clickTab(3)"
              :class="active_section === 3 ? 'bg-[#f3fafd]' : ''"
              class="h-[50px] transition-all duration-300 hover:bg-[#f3fafd] relative cursor-pointer text-[#364a51] w-full mb-2"
              style="line-height: 50px"
            >
              <div class="flex items-center ml-10 space-x-4 h-full">
                <img
                  class="w-5"
                  src="http://mb1.els.best/static/image/1587555761884253.png"
                  alt=""
                />
                <p class="text-sm font-bold">免责说明</p>
              </div>
            </li>
            <li
              @click="clickTab(4)"
              :class="active_section === 4 ? 'bg-[#f3fafd]' : ''"
              class="h-[50px] transition-all duration-300 hover:bg-[#f3fafd] relative cursor-pointer text-[#364a51] w-full mb-2"
              style="line-height: 50px"
            >
              <div class="flex items-center ml-10 space-x-4 h-full">
                <img
                  class="w-5"
                  src="http://mb1.els.best/static/image/1587557843086979.png"
                  alt=""
                />
                <p class="text-sm font-bold">联络我们</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <section class="right_section w-[960px] p-7 min-h-[860px]">
        <section
          v-if="active_section === 0"
          class="px-3 py-3 relative w-full text-sm tracking-wider text-[#333]"
        >
          <div class="space-y-2">
            <div class="text-base">常见问题</div>
            <div>1.TG集团线上娱乐实力怎样？</div>
            <div>您好，请参阅主页“关于我们”。</div>
          </div>

          <div class="space-y-1 pt-10">
            <div class="text-base">2.在贵公司进行游戏是否安全？</div>
            <div class="pt-2">
              您好，本公司系统绝对安全。我们决不泄漏客户的个人资料给任何商业机构。此外，我们亦要求有交易往来的银行，信用卡中转代理等严格保密客户的资料。所有的存款将视为贸易户口，并不会交给其它的人士进行。
            </div>
          </div>

          <div class="space-y-1 pt-10">
            <div class="text-base">3.网上博彩是否合法？</div>
            <div class="pt-2">
              您好，我们是合法注册于菲律宾之博彩公司,一切博彩操作皆遵从菲律宾政府条约,不受其他地区管辖，请根据您自身的风险承受能力及当地法律决定是否投注。本公司不能亦不会接受任何人士违犯当地法律所引致之任何责任。
            </div>
          </div>

          <div class="space-y-1 pt-10">
            <div class="text-base">
              4.在TG集团线上娱乐进行投注是否有年龄限制？
            </div>
            <div class="pt-2">您好，是的，投注合法年龄必须年满18岁。</div>
          </div>

          <div class="space-y-1 pt-10">
            <div class="text-base">5.开户是否要填写真实姓名？</div>
            <div class="pt-2">
              您好，基于安全理由，提款时财务部会按照注册姓名进行审核，银行卡户名必须与注册姓名一致方可提款，所以请您在开户时填写的真实姓名必须与您提款的银行卡户名一致。
            </div>
          </div>

          <div class="space-y-1 pt-10">
            <div class="text-base">6.忘记密码怎么办？</div>
            <div class="pt-2">
              您好，请您联系7*24小时在线客服核对身份后申请更改密码。
            </div>
          </div>
        </section>

        <section
          v-if="active_section === 1"
          class="px-3 py-3 relative w-full text-sm tracking-wider text-[#333]"
        >
          <div class="space-y-3">
            <div class="text-base">博彩责任</div>
            <div>一、竞猜责任</div>
            <div style="line-height: 24px">
              TG集团是一个专业在线网上娱乐城。然则我们强烈建议所有玩家都保持一个娱乐的心态来面对所有游戏。将会通过极致的用户体验、颠覆性娱乐产品、超本土化的个性服务来为所有玩家提供一个舒适健康的娱乐环境。
              我们希望所有玩家在游戏的同时能及时调整好自己的心态，
              切勿由于过度沉迷游戏而造成个人经济、事业、家庭等各个方面受到影响。
              对此，我们强烈建议阁下重新审视自己的行为，明确和调整自己的娱乐心态，
              重新投入正常的生活和工作中来。
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div class="text-base">二、超过18岁</div>
            <div style="line-height: 24px">
              阁下必须超过18岁（或在阁下居住的管辖范围内不被视为未成年人）才可进入此网站。
              任何未满18岁的人不得在我们网站开户和投注，我们将以严谨的态度看待和处理此问题。
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div class="text-base">三、赌博问题防护</div>
            <div style="line-height: 24px">
              我们强烈建议阁下定期审视您的竞猜行为，检验自己是否投入过度。
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div class="text-base">1.有否曾因赌博而耽误工作时间?</div>
            <div class="text-base">2.赌博有否影响您的声望?</div>
            <div class="text-base">
              3.赌博之后，您是否感到自责?阁下有否曾经用赌博所赢得的钱来还债，或者解决财政因难?
            </div>
            <div class="text-base">4.赌博有否导致您的抱负及效率减低?</div>
            <div class="text-base">
              5.输钱后，你是否感觉您一定要尽快回来赚回您所失去的?
            </div>
            <div class="text-base">
              6.赢钱后，您是否有一种强烈的欲望，回来赢得更多?
            </div>
            <div class="text-base">7.您是否时常赌博至分文都用尽?</div>
            <div class="text-base">8.你是否借钱，作赌博之用?</div>
            <div class="text-base">9.你是否出卖任何物件，作赌博之用?</div>
            <div class="text-base">
              10.你是否不愿意用 "赌本" 来付正常的开支?
            </div>
            <div class="text-base">
              11.赌博是否令您疏忽您自己及您家人的健康快乐?
            </div>
            <div class="text-base">12.您是否花比预计更多的时间在赌博上?</div>
            <div class="text-base">
              13.您是否以赌博来逃避忧虑及困难?您是否犯罪或考虑犯罪，为赌博筹备资金?
            </div>
            <div class="text-base">14.赌博有否令您有睡眠的困难?</div>
            <div class="text-base">
              15.围绕您的争执、失望或挫败有否造成赌博的推动力?
            </div>
            <div class="text-base">
              16.您是否为数小时的赌博而有冲动去庆祝好运?
            </div>
            <div class="text-base">17.您是否因赌博的结果而自毁或自杀?</div>
          </div>
        </section>

        <section
          v-if="active_section === 2"
          class="px-3 py-3 relative w-full text-sm tracking-wider text-[#333]"
        >
          <div class="space-y-3">
            <div class="text-base">隐私政策</div>
            <div style="line-height: 24px" class="text-sm">
              1、TG集团十分尊重及重视会员的隐私权，我们将竭力保证您的信息与数据安全，让客户无后顾之忧，这是我们一直遵循的隐私权政策宗旨。
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div style="line-height: 24px" class="text-sm">
              2、TG集团绝不会透露任何能识别个人身份的资料给任何第三方，除非收到法庭传票或应可行法律的要求及判决。我们有权通过网站向有关付款平台服务提供商以及金融保险机构提供必要的个人信息以完成付款要求。
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div style="line-height: 24px" class="text-sm">
              3、会员提供的所有个人信息，其传送均通过128位SSL加密的安全端口，并存放在普通公众无法进入的保密环境之中。所有数据的内部出入将受到严格限制和严密监控。
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div class="text-base">
              下列是关于客户个人信息隐私权保护规则的内容：
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div class="text-sm" style="line-height: 24px">
              网站服务由TG集团提供。为了让客户在这能享受到安全愉悦的服务体验，对待客户的个人隐私，本公司本着严谨的态度。
              为了让客户享受进一步服务，有时我们可能需要客户提供个人信息。本政策将会涵盖相关客户个人信息的使用事项，同时也涉及相关信息的记录程序。有时，客户接受进一步服务前，可能需要客户提供个人信息（如：姓名，通信地址，邮箱地址，会员编号，电话或手机号码，出生日期或支付信息），任何情况下，我们都将对照此政策来处理您的个人信息。在使用您的个人信息时我们将适用现行的法律条款，并竭力采取最佳最稳妥的方式处理。同时，我们也将监控您在本网站的活动内容，可能包括您的访问量，访问页面，网络服务的原始域名等，这将有助于我们建立客户个人文件数据。其中部分资料将被聚合统计，意旨我们将不能对其单独进行检验。
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div class="text-base">数据机密性</div>
            <div class="text-sm" style="line-height: 24px">
            TG集团将尽全力保护客户提供给我们的个人资料，不会蓄意将该数据泄漏给外人，除非此政策条款里有明文规定。所有TG集团员工都被要求遵循该政策条款。员工有义务严密的保守客户的个人信息，即使员工离开TG集团后仍须坚守此义务。您本人也须保护好您的个人信息，严守您的帐户密码，不应将此透露给其他人。
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div class="text-base">服务声明</div>
            <div class="text-sm" style="line-height: 24px">
            出于服务质保，防止诈骗和法规遵循方面的原因，我们将对客户的通信记录进行保存和监控（如：电话和邮件记录）。客户有权要求我们勿将其个人信息直接用于市场推销。如果您想行使此权利，客户应准备以下；书面提交申请提供可以证明您身份的信息（如：账号，用户名，注册信息）写明个人信息哪里不正确及需修正的内容。隐私权保护规则的认同一旦客户在TG集团注册开户就代表您认同此隐私权保护规则条款。我们将定期更新此政策条款，因此我们建议客户您也定期进行查阅。如果我们对该政策有所更改，我们将在相关网页上发布消息。政策更改后，客户持续使用TG集团网站将被视为客户认同该政策的更改。如果用户不接受此政策的更改，您可以选择停用我们的网站服务。如果该政策条款与其它局部特殊条款产生分歧，将适用局部特殊条款。
            </div>
          </div>

        </section>


        <section
          v-if="active_section === 3"
          class="px-3 py-3 relative w-full text-sm tracking-wider text-[#333]"
        >
          <div class="space-y-3">
            <div class="text-base" >免责说明</div>
            <div style="line-height: 24px">1、每日取款上限1000000.00元人民币，完成全额有效投注，手续费全免；</div>
          </div>

          <div class="space-y-3 pt-8">
            <div style="line-height: 24px">
            2、取款到账时间一般3-5分钟，如遇到银行系统维护或财务清算等不可抗拒因素，到账将有所延迟或暂停出款；
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div style="line-height: 24px">
             3、所有线上博彩在未申请优惠情况下需完成存款一倍有效流水才可申请提款，申请优惠请参照相关优惠流水要求；
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div style="line-height: 24px">
            4、公司保留权利审核会员帐号；
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div style="line-height: 24px">
            5、各类游戏和局/未接受/取消注单，不纳入有效投注计算。 运动博弈游戏项目，大赔率玩法计算有效投注金额，小赔率玩法计算输赢金额为有效投注（大赔率产品包括：过关、波胆、总入球、半全场、双胜彩、冠军赛等）；
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div style="line-height: 24px">
             如有任何疑问，请咨询24小时在线客服。
            </div>
          </div>
        </section>

        <section
          v-if="active_section === 4"
          class="px-3 py-3 relative w-full text-sm tracking-wider text-[#333]"
        >
          <div class="space-y-3">
            <div class="text-base" >联系我们</div>
            <div style="line-height: 24px">一、合营计划联系方式</div>
          </div>

          <div class="space-y-3 pt-8">
            <div class="text-base" >合营部Skype </div>
            <div style="line-height: 24px">
            live:.cid.abd79c917c885961
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div class="text-base" >二、客服邮箱 </div>
            <div style="line-height: 24px">
            service@tgames.vip
            </div>
          </div>

          <div class="space-y-3 pt-8">
            <div class="text-base" >三、在线客服 </div>
            <div style="line-height: 24px">
            我们的客服人员持续秉持着尽心尽责的服务态度，在线客服全天24小时为您提供咨询和帮助
            </div>
          </div>
        </section>

      </section>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const active_section = ref(0);

const clickTab = (number) => {
  active_section.value = number;
};

onMounted(() => {
  if (route?.query !== undefined && route.query?.id !== undefined) {
    active_section.value = Number(route?.query?.id);
  }
});
</script>