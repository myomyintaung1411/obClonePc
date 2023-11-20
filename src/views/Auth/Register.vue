<template>
  <section
    id="register"
    class="relative min-h-screen min-w-full w-screen h-screen flex flex-col items-center justify-center bg-gray-800 login__"
  >
    <img
      src="http://mb1.els.best/static/image/bg.aeffce071a77b9f3cadbb3e35832d14b.jpg"
      alt=""
      class="w-full h-full object-cover"
    />
    <video
      id="register_video"
      class="register__video__3tV1S bg-cover bg-gray-800"
      autoplay="autoplay"
      muted
      preload="preload"
      loop="loop"
    >
      <source
        src="http://mb1.els.best/static/image/video.mp4"
        type="video/mp4"
      />
    </video>

    <section
      class="login_box z-10 text-center fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center"
    >
      <div>
        <div class="mb-6">
          <a class="block" style="text-decoration: none">
            <img
              src="http://mb1.els.best/static/image/login_logo.0c8565183609c43ac8bf5dcbac9c6ce3.svg"
              alt=""
              class="w-[312px] h-[96px]"
            />
          </a>
        </div>
        <div
          class="mb-[28px] text-white w-[390px] flex flex-col justify-center items-center"
        >
          <div class="flex items-center w-[312px] space-x-4 -ml-14">
            <div class="bg-white h-[1px] w-[130px] bg-opacity-50"></div>
            <div class="whitespace-nowrap">赞助伙伴</div>
            <div class="bg-white h-[1px] w-[130px] bg-opacity-50"></div>
          </div>
          <div class="mt-4 flex items-center -ml-14">
            <img
              src="http://mb1.els.best/static/image/zz_ob.dd3909f497e7ad7b077fddd9c608420a.png"
              alt=""
              class="w-[250px]"
            />
          </div>
        </div>
        <section class="form_section relative -ml-14">
          <form @click.prevent class="text-center w-[298px] mx-auto">
            <div
              class="relative flex mt-5 w-full flex-col rounded-full h-10 bg-white bg-opacity-50 shadow-lg"
            >
              <div class="flex items-center relative w-full h-full px-5">
                <div class="w-7 h-7 rounded-full mt-[2px]">
                  <img
                    src="http://mb1.els.best/static/image/icon_user.8e72b670e8f37fc1e3a9a44b42e918df.svg"
                    alt=""
                  />
                </div>
                <input
                  type="text" autocomplete="off"
                  placeholder="帐号（最少6位，英文及数字）"
                  class="h-full w-full bg-transparent focus:outline-0 outline-0 px-4 text-white placeholder:text-white"
                />
              </div>
            </div>
            <div
              class="relative flex mt-5 w-full flex-col rounded-full h-10 bg-white bg-opacity-50 shadow-lg"
            >
              <div class="flex items-center relative w-full h-full px-5">
                <div class="w-7 h-7 rounded-full mt-[2px]">
                  <img
                    src="http://mb1.els.best/static/image/icon_password.6bb148ea896a170950b3c7954b5772ae.svg"
                    alt=""
                  />
                </div>
                <input autocomplete="off"
                  type="password" maxlength="18"
                  placeholder="密码（最少8位，英文及数字）"
                  class="h-full w-full bg-transparent focus:outline-0 outline-0 px-4 text-white placeholder:text-white"
                />
              </div>
            </div>
            <div
              class="relative flex mt-5 w-full flex-col rounded-full h-10 bg-white bg-opacity-50 shadow-lg"
            >
              <div class="flex items-center relative w-full h-full px-5">
                <div class="w-7 h-7 rounded-full mt-[2px]">
                  <img
                    src="http://mb1.els.best/static/image/icon_password.6bb148ea896a170950b3c7954b5772ae.svg"
                    alt=""
                  />
                </div>
                <input
                  type="password"
                  placeholder="确认密码" maxlength="18"
                  class="h-full w-full bg-transparent focus:outline-0 outline-0 px-4 text-white placeholder:text-white"
                />
              </div>
            </div>

            <div
              class="relative flex mt-5 w-full flex-col rounded-full h-10 bg-white bg-opacity-50 shadow-lg"
            >
              <div class="flex items-center relative w-full h-full px-5">
                <div class="w-7 h-7 rounded-full mt-[2px]">
                  <img
                    src="http://mb1.els.best/static/image/icon_user.8e72b670e8f37fc1e3a9a44b42e918df.svg"
                    alt=""
                  />
                </div>
                <input
                  type="text" autocomplete="off"
                  placeholder="请输入您的真实姓名"
                  class="h-full w-full bg-transparent focus:outline-0 outline-0 px-4 text-white placeholder:text-white"
                />
              </div>
            </div>

            <div
              class="relative flex mt-5 w-full flex-col rounded-full h-10 bg-white bg-opacity-50 shadow-lg"
            >
              <div class="flex items-center relative w-full h-full px-5">
                <div class="w-7 h-7 rounded-full mt-[2px]">
                  <img
                    src="http://mb1.els.best/static/image/icon_password.6bb148ea896a170950b3c7954b5772ae.svg"
                    alt=""
                  />
                </div>
                <input
                  type="password" maxlength="18" autocomplete="off"
                  placeholder="请输入6位取款密码"
                  class="h-full w-full bg-transparent focus:outline-0 outline-0 px-4 text-white placeholder:text-white"
                />
              </div>
            </div>

            <div
              class="relative flex mt-5 w-full flex-col rounded-full h-10 bg-white bg-opacity-50 shadow-lg"
            >
              <div class="flex items-center relative w-full h-full px-5">
            <div class="w-7 h-6 rounded-full mt-[2px] bg-[#dfe1de] flex justify-center items-center">
                  <svg
                    
                    class="text-[#355bd6] flex justify-center items-center w-4 font-bold"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="验证码" autocomplete="off"
                  class="h-full w-full bg-transparent focus:outline-0 outline-0 px-4 text-white placeholder:text-white"
                />
                 <!-- canvas -->
                <div
                  class="img-verify absolute right-4 cursor-pointer select-none"
                >
                  <canvas
                    ref="verify"
                    width="110"
                    height="30"
                    @click="handleDraw"
                  ></canvas>
                </div>
              </div>
            </div>

            <div class="relative text-center cursor-pointer flex mt-5 w-full flex-col rounded-full h-10 actvie-background-btn  shadow-lg" style="line-height:40px">
                <button  class="w-full h-full">注册</button>
            </div>

            <div class="w-full flex items-center justify-between mt-3 text-white tracking-wide cursor-pointer">
               <div>
                 <span>已有账号？</span>
                <router-link to="/login"  class="text-blue-300 text-[12px]">请登录</router-link>
               </div>
               <router-link to="/root">
                先去逛逛
               </router-link>
            </div>
          </form>
        </section>
      </div>
    </section>
  </section>
</template>


<script>
import { ref, onMounted, reactive, toRefs } from "vue";

export default {
  setup() {
    const verify = ref(null);
    const state = reactive({
      pool: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", // 字符串
      width: 120,
      height: 40,
      imgCode: "",
    });

    onMounted(() => {
      // 初始化绘制图片验证码
      state.imgCode = draw();
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
    };
  },
};
</script>
<style scoped>
.register_video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
}
video {
  height: 100vh;
  width: 100%;
  object-fit: cover;
  position: absolute;
}
</style>