<template>
  <header class="sticky top-0 z-30 select-none">
    <section class="above_section w-full bg-[#353f4b]">
      <div class="w-full max-w-7xl mx-auto py-2 text-white">
        <div class="w-full flex items-center justify-between">
          <div class="color_f5">{{ currentTime }}</div>
          <!-- <div class="flex items-center">
            <form @click.prevent class="flex items-center">
              <div class="flex items-center space-x-4 w-full">
                <div class="form w-44">
                  <input
                    class="input py-2 px-3 placeholder:text-[#f5f5f5] rounded"
                    placeholder="请输入帐号"
                    required
                    type="text"
                  />
                  <span class="input-border"></span>
                </div>
                <div class="form w-44">
                  <input
                    class="input py-2 px-3 placeholder:text-[#f5f5f5] rounded"
                    placeholder="请输入登录密码"
                    required
                    type="text"
                  />
                  <span class="input-border"></span>
                </div>
                <div class="form w-20">
                  <input maxlength="4"
                    class="input py-2 px-3 placeholder:text-[#f5f5f5] rounded"
                    placeholder="验证码"
                    required
                    type="text"
                  />
                  <span class="input-border"></span>
                </div>
                <div class="form w-34 cursor-pointer">
                <canvas
                    ref="verify"
                    width="110"
                    height="35"
                    @click="handleDraw"
                  ></canvas>
                </div>
                <div class="w-auto">
                  <button
                    class="py-2 px-5 actvie-background-btn color_f5 transition ease-in-out rounded hover:bg-[#fff] hover:text-black"
                  >
                    登录
                  </button>
                </div>
                <div class="w-auto">
                  <button
                    class="py-2 px-5 actvie-background-btn color_f5 transition duration-100 ease-in-out rounded hover:bg-[#fff] hover:text-black"
                  >
                    登记
                  </button>
                </div>
              </div>
            </form>
          </div> -->
          <div
            
            class="flex items-center text-gray-300 text-sm cursor-pointer"
          >
            <div  class="flex items-center space-x-5">
              <div @click="goUser" class="hover:text-white tracking-wider">欢迎您,</div>
              <div @click="goUser" class="hover:text-white tracking-wider">tiktok11</div>
              <div
                class="px-3 py-[0.5px] rounded bg-blue-500 shadow-lg text-center uppercase text-white"
              >
                vip1
              </div>
              <div class="h-4 w-[1px] bg-gray-400"></div>
            </div>

            <div  class="flex items-center space-x-2 pl-4">
              <div class="hover:text-white tracking-wider">总资产:</div>
              <div class="tracking-wider text-[#f4d48c]">0.00元</div>
            </div>
            <div  class="pl-2">
              <img
                src="@/assets/reload.svg"
                alt="reload"
                draggable="false"
                class="w-5"
              />
            </div>
            <div class="flex items-center space-x-5 pl-4">
              <div @click="goSetting(0)" class="hover:text-white tracking-wider">存款</div>
              <div @click="goSetting(1)" class="hover:text-white tracking-wider">取款</div>
              <div @click="goSetting(2)" class="hover:text-white tracking-wider">转账</div>
              <div class="h-4 w-[1px] bg-gray-400"></div>
              <div @click="logoutDialog = true">
                <svg
                  class="w-5 h-5 text-[#f4d48c] hover:scale-110 transform-origin-center transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0519 14.8285L13.4661 16.2427L17.7087 12L13.4661 7.7574L12.0519 9.17161L13.8803 11H6.34318V13H13.8803L12.0519 14.8285Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <section class="below_section">
      <section class="bg-white w-full relative h-20">
        <div class="w-full max-w-7xl mx-auto h-full">
          <div class="w-full flex items-center justify-between h-full">
            <div class="img_logo">
              <img
                src="http://ht1.els.best/uploads/images/b54739111c2e7c228462b1f9d7070bdb.gif"
                alt=""
                class="w-48"
              />
            </div>
            <div class="flex items-center">
              <ul class="flex items-center h-full space-x-7 cursor-pointer list-none">

                <div class="relatvie">
                  <router-link
                    to="/root"
                    class="text-base tracking-wide h-full py-7 border-[#7490ff] relative group"
                  >
                    首页
                    <div
                      :class="activeRoute === '/root' ? 'h-[3px]' : ''"
                      class="absolute bottom-0 left-0 w-full h-0 bg-[#7490ff] transition-all duration-300 group-hover:h-[3px]"
                    ></div>
                  </router-link>
                </div>

                <div class="relatvie hover_tab1">
                  <router-link
                    to="/realbet"
                    class="text-base tracking-wide h-full py-7 border-[#7490ff] relative group hover_tab1"
                  >
                    真人娱乐
                    <div
                      :class="activeRoute === '/realbet' ? 'h-[3px]' : ''"
                      class="absolute bottom-0 left-0 w-full h-0 bg-[#7490ff] transition-all duration-300 group-hover:h-[3px]"
                    ></div>
                  </router-link>
                  <!-- hover1 -->
                  <section
                    class="box1 w-full absolute left-0 top-[81px] bg-white shadow-lg rounded h-[325px] animate-fade z-20"
                  >
                    <div class="mx-auto max-w-7xl relative h-full">
                      <div
                        class="w-full flex items-center justify-between cursor-pointer"
                      >
                        <div
                          class="flex flex-col items-center space-y-3 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">AG视讯</span>
                          <span>身临其境 美女如云</span>
                          <img
                            class="w-[270px] h-[240px] object-cover"
                            src="http://mb1.els.best/static/image/model-ob.f7d9288eb03c74e2719a47c8522617ae.png"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex flex-col items-center space-y-3 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">BBIN视讯</span>
                          <span>美艳荷官 现场互动</span>
                          <img
                            class="w-[270px] h-[240px] object-cover"
                            src="http://mb1.els.best/static/image/model-bg.ec17e9248b1abbeaef8de1b0884288a0.png"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex flex-col items-center space-y-3 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">OB视讯</span>
                          <span>视觉盛宴 革命体验</span>
                          <img
                            class="w-[270px] h-[240px] object-cover"
                            src="http://mb1.els.best/static/image/model-ag.c294fe9c7dedeec529f992f4130b82d5.png"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex flex-col items-center space-y-3 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">完美真人</span>
                          <span>现场直播 美女互动</span>
                          <img
                            class="w-[270px] h-[240px] object-cover"
                            src="http://mb1.els.best/static/image/model-ebet.e68c32250e149edefcedccc56347164d.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div class="relatvie hover_tab2">
                  <router-link
                    to="/sport"
                    class="text-base tracking-wide h-full py-7 border-[#7490ff] relative group hover_tab2"
                  >
                    体育赛事
                    <div
                      :class="activeRoute === '/sport' ? 'h-[3px]' : ''"
                      class="absolute bottom-0 left-0 w-full h-0 bg-[#7490ff] transition-all duration-300 group-hover:h-[3px]"
                    ></div>
                  </router-link>
                  <!-- hover2 -->
                  <section
                    class="box2 w-full absolute left-0 top-[81px] bg-white shadow-lg rounded h-[325px] animate-fade z-20"
                  >
                    <div class="mx-auto max-w-7xl relative h-full">
                      <div
                        class="w-full flex items-center justify-between cursor-pointer px-4"
                      >
                        <div
                          class="flex items-center py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <img
                            class="w-[270px] h-[300px] object-cover"
                            src="http://mb1.els.best/static/image/model-ob.4a6215c4c47ed9bddc336c89a60da03b.png"
                            alt=""
                          />
                          <div class="space-y-2">
                            <h2 class="font-bold text-xl">AG体育</h2>
                            <span>多元化的万场投注赛事</span>
                            <img
                              class="w-[110px]"
                              src="http://mb1.els.best/static/image/btn-enter.62374a382990732bc66da6739112a0b8.png"
                              alt=""
                            />
                          </div>
                        </div>

                        <div
                          class="flex items-center py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <img
                            class="w-[270px] h-[300px] object-cover"
                            src="http://mb1.els.best/static/image/model-xj.cf8af7740c9e164bdbf5bf4954a1ce6c.png"
                            alt=""
                          />
                          <div class="space-y-2">
                            <h2 class="font-bold text-xl">OB体育</h2>
                            <span>全亚洲口碑最好的品牌</span>
                            <img
                              class="w-[110px]"
                              src="http://mb1.els.best/static/image/btn-enter.62374a382990732bc66da6739112a0b8.png"
                              alt=""
                            />
                          </div>
                        </div>

                        <div
                          class="flex items-center py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <img
                            class="w-[270px] h-[300px] object-cover"
                            src="http://mb1.els.best/static/image/model-im.fd9d7c98531bbf699c6127700af9cd7d.png"
                            alt=""
                          />
                          <div class="space-y-2">
                            <h2 class="font-bold text-xl">SBO体育</h2>
                            <span>专业体育赛事投注</span>
                            <img
                              class="w-[110px]"
                              src="http://mb1.els.best/static/image/btn-enter.62374a382990732bc66da6739112a0b8.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div class="relatvie hover_tab3">
                  <router-link
                    to="/gaming"
                    class="text-base tracking-wide h-full py-7 border-[#7490ff] relative group"
                  >
                    电子竞技
                    <div
                      :class="activeRoute === '/gaming' ? 'h-[3px]' : ''"
                      class="absolute bottom-0 left-0 w-full h-0 bg-[#7490ff] transition-all duration-300 group-hover:h-[3px]"
                    ></div>
                  </router-link>
                  <!-- hover3 -->
                  <section
                    class="box3 w-full absolute left-0 top-[81px] bg-white shadow-lg rounded h-[325px] animate-fade z-20"
                  >
                    <div
                      class="mx-auto max-w-7xl relative  h-full"
                    >
                      <div
                        class="w-full flex items-center justify-between cursor-pointer"
                      >
                        <div
                          class="flex flex-col items-center space-y-3 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">OB电竞</span>
                          <span>主流赛事 专业玩家</span>
                          <img
                            class="w-[270px] h-[240px] object-cover"
                            src="http://mb1.els.best/static/image/model-ob.ebb35e6306efb15a10697acc8c033313.png"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex flex-col items-center space-y-3 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">泛亚电竞</span>
                          <span>专业电竞平台 值得信赖</span>
                          <img
                            class="w-[270px] h-[240px] object-cover"
                            src="http://mb1.els.best/static/image/model-lh.e6b48f117643602b3e950ff430f4fa1c.png"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex flex-col items-center space-y-3 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">小艾电竞</span>
                          <span>畅玩电竞 不二之选</span>
                          <img
                            class="w-[270px] h-[240px] object-cover"
                            src="http://mb1.els.best/static/image/model-fy.13a024900754d2a8d121aeded914b7b8.png"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex flex-col items-center space-y-3 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">雷火电竞</span>
                          <span>精彩赛事 主流玩法</span>
                          <img
                            class="w-[270px] h-[240px] object-cover"
                            src="http://mb1.els.best/static/image/model-ob.7f26dc12242baa4ed30560f72a98f097.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div class="relatvie hover_tab4">
                  <router-link
                    to="/joker"
                    class="text-base tracking-wide h-full py-7 border-[#7490ff] relative group"
                  >
                    棋牌游戏
                    <div
                      :class="activeRoute === '/joker' ? 'h-[3px]' : ''"
                      class="absolute bottom-0 left-0 w-full h-0 bg-[#7490ff] transition-all duration-300 group-hover:h-[3px]"
                    ></div>
                  </router-link>
                  <!-- hover4 -->
                  <section
                    class="box4 w-full absolute left-0 top-[81px] bg-white shadow-lg rounded h-[325px] animate-fade z-20"
                  >
                    <div
                      class="mx-auto max-w-7xl relative  h-full"
                    >
                      <div
                        class="w-full flex items-center justify-between cursor-pointer"
                      >
                        <div
                          class="flex flex-col items-center space-y-2 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">OB棋牌</span>
                          <span>真实万人 同台竞技</span>
                          <img
                            class="w-[230px] h-[230px] object-contain"
                            src="http://mb1.els.best/static/image/model-ob.adabd64f040dcc73c142c3455bf4e298.png"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex flex-col items-center space-y-2 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">BBIN棋牌</span>
                          <span>热门游戏 应有尽有</span>
                          <img
                            class="w-[230px] h-[230px] object-contain"
                            src="http://mb1.els.best/static/image/model-im.299443815640aa1e05d29007a0902cb9.png"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex flex-col items-center space-y-2 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">开元棋牌</span>
                          <span>好友相约 竞技娱乐</span>
                          <img
                            class="w-[230px] h-[230px] object-contain"
                            src="http://mb1.els.best/static/image/model-gd.d31b2632a15154a3280a99c5b14afa7e.png"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex flex-col items-center space-y-2 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">博乐棋牌</span>
                          <span>棋牌娱乐 惊喜不断</span>
                          <img
                            class="w-[230px] h-[230px] object-contain"
                            src="http://mb1.els.best/static/image/model-by.22947db6915caa29e85c38a94532eb15.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div class="relatvie hover_tab5">
                  <router-link
                    to="/concise"
                    class="text-base tracking-wide h-full py-7 border-[#7490ff] relative group"
                  >
                    电子游艺
                    <div
                      :class="activeRoute === '/concise' ? 'h-[3px]' : ''"
                      class="absolute bottom-0 left-0 w-full h-0 bg-[#7490ff] transition-all duration-300 group-hover:h-[3px]"
                    ></div>
                  </router-link>
                  <!-- hover5 -->
                  <section
                    class="box5 w-full absolute left-0 top-[81px] bg-white shadow-lg rounded h-[325px] animate-fade z-20"
                  >
                    <div
                      class="mx-auto max-w-7xl relative  h-full"
                    >
                      <div
                        class="w-full flex items-center justify-between cursor-pointer"
                      >
                        <div
                          class="flex flex-col items-center space-y-2 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">AG电子</span>
                          <span>经典游戏 巨额大奖</span>
                          <img
                            class="w-[230px] h-[230px] object-contain"
                            src="http://mb1.els.best/static/image/concises/dz-1.3e3d53d73f4b94714f55db58891ecb6a.png"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex flex-col items-center space-y-2 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">BBIN电子</span>
                          <span>享受视觉盛宴</span>
                          <img
                            class="w-[230px] h-[230px] object-contain"
                            src="http://mb1.els.best/static/image/concises/dz-2.b89cf0cffb1da2ca26aead2dad4ca33a.png"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex flex-col items-center space-y-2 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">OB电子</span>
                          <span>推陈出新 趣妙横生</span>
                          <img
                            class="w-[230px] h-[230px] object-contain"
                            src="http://mb1.els.best/static/image/concises/dz-3.cb757b71e983a8f35f0e9231baafa3b0.png"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex flex-col items-center space-y-2 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">TTG电子</span>
                          <span>经典玩法 高额奖金随心拿</span>
                          <img
                            class="w-[230px] h-[230px] object-contain"
                            src="http://mb1.els.best/static/image/concises/dz-4.b989cf61999e6d75c33a2deb973a179d.png"
                            alt=""
                          />
                        </div>
                        <div
                          class="flex flex-col items-center space-y-2 py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <span class="font-bold text-xl">AT电子</span>
                          <span>这片区域归你了</span>
                          <img
                            class="w-[230px] h-[230px] object-contain"
                            src="http://mb1.els.best/static/image/concises/dz-5.d772e90ba70a2e1405d6205613f5c074.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div class="relatvie hover_tab6">
                  <router-link
                    to="/lottery"
                    class="text-base tracking-wide h-full py-7 border-[#7490ff] relative group"
                  >
                    真人娱乐
                    <div
                      :class="activeRoute === '/lottery' ? 'h-[3px]' : ''"
                      class="absolute bottom-0 left-0 w-full h-0 bg-[#7490ff] transition-all duration-300 group-hover:h-[3px]"
                    ></div>
                  </router-link>
                  <!-- hover6 -->
                  <section
                    class="box6 w-full absolute left-0 top-[81px] bg-white shadow-lg rounded h-[325px] animate-fade z-20"
                  >
                    <div
                      class="mx-auto max-w-7xl relative  h-full"
                    >
                      <div
                        class="w-full flex items-center justify-between cursor-pointer px-4"
                      >
                        <div
                          class="flex items-center py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <img
                            class="w-[270px] h-[300px] object-cover"
                            src="http://mb1.els.best/static/image/model-ob.a9c43641662cc922653821e41b271398.png"
                            alt=""
                          />
                          <div class="space-y-2">
                            <h2 class="font-bold text-xl">VR彩票</h2>
                            <span>旗舰彩种 应有尽有</span>
                            <img
                              class="w-[110px]"
                              src="http://mb1.els.best/static/image/btn-enter.62374a382990732bc66da6739112a0b8.png"
                              alt=""
                            />
                          </div>
                        </div>

                        <div
                          class="flex items-center py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <img
                            class="w-[270px] h-[300px] object-cover"
                            src="http://mb1.els.best/static/image/model-sg.42fec46df9aa69fe79e44bcaae2c5775.png"
                            alt=""
                          />
                          <div class="space-y-2">
                            <h2 class="font-bold text-xl">AECP</h2>
                            <span>经典彩种 极易操作</span>
                            <img
                              class="w-[110px]"
                              src="http://mb1.els.best/static/image/btn-enter.62374a382990732bc66da6739112a0b8.png"
                              alt=""
                            />
                          </div>
                        </div>

                        <div
                          class="flex items-center py-3 hover:scale-105 transition-transform duration-300"
                        >
                          <img
                            class="w-[270px] h-[300px] object-cover"
                            src="http://mb1.els.best/static/image/model-tcg.f36c7f872d1d19309f182fb89a82f6b4.png"
                            alt=""
                          />
                          <div class="space-y-2">
                            <h2 class="font-bold text-xl">IG香港彩</h2>
                            <span>业界首创区块链彩票</span>
                            <img
                              class="w-[110px]"
                              src="http://mb1.els.best/static/image/btn-enter.62374a382990732bc66da6739112a0b8.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </ul>
            </div>

            <div class="flex items-center space-x-5">
              <div
                class="flex flex-col items-center justify-center cursor-pointer"
              >
                <img
                  src="http://mb1.els.best/static/image/kf.db2638cc7222c080d75627fd6eb158db.svg"
                  alt=""
                  class="w-8"
                />
                <span class="text-sm">客服</span>
              </div>
              <div
                class="flex flex-col items-center justify-center cursor-pointer"
              >
                <img
                  src="http://mb1.els.best/static/image/discount.764db12c939e1b3d0d0744f61383d92b.svg"
                  alt=""
                  class="w-8"
                />
                <span class="text-sm">优惠</span>
              </div>
              <div
                class="flex flex-col items-center justify-center cursor-pointer"
              >
                <img
                  src="http://mb1.els.best/static/image/sponsor.80ac76b8f6b7c0d2b404991d75685641.svg"
                  alt=""
                  class="w-8"
                />
                <span class="text-sm">代理</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </header>

  <ModalDialog :show="logoutDialog" @close="closeLogout">
    <div
      class="px-10  bg-white overflow-y-scroll max-w-xl w-[400px] relative"
    >
      <p class="text-[#333] text-lg font-bold py-1 tracking-wide text-center pt-5">
        您确定要退出登录吗?
      </p>

      <div class="py-7 w-full flex items-center justify-center space-x-3">
        <div @click="logoutDialog = false" class="flex-1 border text-center py-2 cursor-pointer">
                    点错了
        </div>
        <div @click="goLogout" class="flex-1 actvie-background-btn py-2 rounded text-center cursor-pointer">
          是的
        </div>
      </div>
    </div>
  </ModalDialog>

</template>

 


<script>
import { ref, onMounted, reactive, toRefs,watch,onUnmounted } from "vue";
import timer from "@/utils/countdown.js";
import { useRouter, useRoute } from "vue-router";
import ModalDialog from "@/components/ModalDialog.vue";
export default {
  components:{
   ModalDialog
  },
  setup() {
    const router = useRouter();
  const route = useRoute();

  const logoutDialog = ref(false);

  const activeRoute = ref("");
   const currentTime = ref("");

   const isLogin = ref(false) //for testing purpose only user is login or not

    const verify = ref(null);
    const state = reactive({
      pool: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", // 字符串
      width: 120,
      height: 40,
      imgCode: "",
    });

    const displayDate = () => {
  return (currentTime.value = timer._currentDate());
};

const dateTime = () => {
  setInterval(() => {
    displayDate();
  }, 1000);
};

const closeLogout = () => {
  logoutDialog.value = false
};

watch(
  () => route.path,
  () => {
    activeRoute.value = route.path;
  },
  { immediate: true, deep: true }
);

const intervalId = dateTime(); // Start the interval and store the ID in a variable

onUnmounted(() => {
  clearInterval(intervalId); // Clear the interval when the component is unmounted
});

const goUser = () => {
  router.push("/userCenter");
};
const goSetting = (number) => {
   switch (number) {
    case 0:
      router.push("/recharge");
      break;
    case 1:
      router.push("/withdraw");
      break;
    case 2:
      router.push("/transfer");
      break;
   
    default:
      break;
   }
};

const goLogout = () =>{
  logoutDialog.value = false
  router.push('/login')
}

    onMounted(() => {
      // 初始化绘制图片验证码
      if(isLogin.value){

        state.imgCode = draw();
      }
    });

    // 点击图片重新绘制
    const handleDraw = () => {
      state.imgCode = draw();
    };

    // 随机数
    const randomNum = (min, max) => {
      return parseInt(Math.random() * (max - min) + min);
    };
    // 随机颜色
    const randomColor = (min, max) => {
      const r = randomNum(min, max);
      const g = randomNum(min, max);
      const b = randomNum(min, max);
      return `rgb(${r},${g},${b})`;
    };

    // 绘制图片
    const draw = () => {
      // 3.填充背景颜色，背景颜色要浅一点
      const ctx = verify.value?.getContext("2d");
      // 填充颜色
      ctx.fillStyle = randomColor(180, 230);
      // 填充的位置
      ctx.fillRect(0, 0, state.width, state.height);
      // 定义paramText
      let imgCode = "";
      // 4.随机产生字符串，并且随机旋转
      for (let i = 0; i < 4; i++) {
        // 随机的四个字
        const text = state.pool[randomNum(0, state.pool.length)];
        imgCode += text;
        // 随机的字体大小
        const fontSize = randomNum(18, 40);
        // 字体随机的旋转角度
        const deg = randomNum(-30, 30);
        /*
         * 绘制文字并让四个文字在不同的位置显示的思路 :
         * 1、定义字体
         * 2、定义对齐方式
         * 3、填充不同的颜色
         * 4、保存当前的状态（以防止以上的状态受影响）
         * 5、平移translate()
         * 6、旋转 rotate()
         * 7、填充文字
         * 8、restore出栈
         * */
        ctx.font = fontSize + "px Simhei";
        ctx.textBaseline = "top";
        ctx.fillStyle = randomColor(80, 150);
        /*
         * save() 方法把当前状态的一份拷贝压入到一个保存图像状态的栈中。
         * 这就允许您临时地改变图像状态，
         * 然后，通过调用 restore() 来恢复以前的值。
         * save是入栈，restore是出栈。
         * 用来保存Canvas的状态。save之后，可以调用Canvas的平移、放缩、旋转、错切、裁剪等操作。 restore：用来恢复Canvas之前保存的状态。防止save后对Canvas执行的操作对后续的绘制有影响。
         *
         * */
        ctx.save();
        ctx.translate(30 * i + 15, 15);
        ctx.rotate((deg * Math.PI) / 180);
        // fillText() 方法在画布上绘制填色的文本。文本的默认颜色是黑色。
        // 请使用 font 属性来定义字体和字号，并使用 fillStyle 属性以另一种颜色/渐变来渲染文本。
        // context.fillText(text,x,y,maxWidth);
        ctx.fillText(text, -15 + 5, -15);
        ctx.restore();
      }
      // 5.随机产生5条干扰线,干扰线的颜色要浅一点
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(randomNum(0, state.width), randomNum(0, state.height));
        ctx.lineTo(randomNum(0, state.width), randomNum(0, state.height));
        ctx.strokeStyle = randomColor(180, 230);
        ctx.closePath();
        ctx.stroke();
      }
      // 6.随机产生40个干扰的小点
      for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.arc(
          randomNum(0, state.width),
          randomNum(0, state.height),
          1,
          0,
          2 * Math.PI
        );
        ctx.closePath();
        ctx.fillStyle = randomColor(150, 200);
        ctx.fill();
      }
      //state.imgCode = imgCode
      return imgCode;
    };

    return {
      ...toRefs(state),
      verify,
      handleDraw,
      logoutDialog,
      activeRoute,
      currentTime,
     closeLogout,
     goUser,
     goSetting,
     goLogout
    };
  },
};
</script>

<style scoped>
.form {
  --border-height: 1px;
  --border-before-color: rgba(221, 221, 221, 0.952);
  --border-after-color: #ffffff;
  --input-hovered-color: #7490ff8e;
  position: relative;
}
/* styling of Input */
.input {
  color: #f5f5f5;
  font-size: 0.9rem;
  background-color: #7490ff8e;
  width: 100%;
  box-sizing: border-box;
  /* padding-inline: 0.5em;
 padding-block: 0.7em; */
  border: none;

  /* border-bottom: var(--border-height) solid var(--border-before-color); */
}
/* styling of animated border */
.input-border {
  position: absolute;
  background: var(--border-after-color);
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 0;
  transition: 0.3s;
}
/* Hover on Input */
input:hover {
  background: var(--input-hovered-color);
}

/* input:focus {
 outline: none;
} */
/* here is code of animated border */
input:focus ~ .input-border {
  width: 100%;
}
/* === if you want to do animated border on typing === */
/* remove input:focus code and uncomment below code */
input:valid ~ .input-border {
  width: 100%;
}

.actvie-background-btn {
  color: white;
  background: rgb(126, 139, 190);
  background: linear-gradient(
    90deg,
    rgb(84, 110, 216) 0%,
    rgba(116, 144, 255, 1) 35%,
    rgba(111, 129, 200, 1) 100%
  );
}

.box1 {
  display: none;
}
.hover_tab1:hover .box1 {
  display: block !important;
}

.box2 {
  display: none;
}
.hover_tab2:hover  .box2 {
  display: block !important;
}

.box3 {
  display: none;
}
.hover_tab3:hover .box3 {
  display: block !important;
}

.box4 {
  display: none;
}
.hover_tab4:hover  .box4 {
  display: block !important;
}

.box5 {
  display: none;
}
.hover_tab5:hover  .box5 {
  display: block !important;
}

.box6 {
  display: none;
}

.hover_tab6:hover  .box6 {
  display: block !important;
}
</style>