<template>
  <div id="main" class="w-full h-full relative min-w-[1280px]">
    <header-section></header-section>
    <router-view></router-view>
    <footer-section></footer-section>
    <section class="fixed right-0 top-[52vh] z-10">
      <div
        class="h-20 flex mb-2 flex-col box_center_one justify-center items-center space-y-1 cursor-pointer shadow bg-white text-[#597ef7] hover:text-white hover:bg-[#597ef7] rounded-s-md"
      >
        <img
          src="http://mb1.els.best/static/image/icon-kefu@2x.3ba295ec2200cdad6ff3a168c20d9e63.png"
          alt=""
          class="w-8"
        />
        <p class="text-[12px]">客服</p>
      </div>
      <div
        class="h-20 mb-2 flex flex-col box_center_two justify-center items-center space-y-1 cursor-pointer shadow bg-white text-[#597ef7] hover:text-white hover:bg-[#597ef7] rounded-s-md"
      >
        <img
          src="http://mb1.els.best/static/image/icon-code-2@2x.e3e328483fac0fbb5939239175d09a94.png"
          alt=""
          class="w-8"
        />
        <p class="text-[12px]">二维码</p>
      </div>
      <div
        class="h-20 mb-2 flex flex-col box_center_three justify-center items-center space-y-1 cursor-pointer shadow bg-white text-[#597ef7] hover:text-white hover:bg-[#597ef7] rounded-s-md"
      >
        <img
          src="http://mb1.els.best/static/image/icon-bangzhu@2x.67d442bf9a281234b967f74531b57248.png"
          alt=""
          class="w-8"
        />
        <p class="text-[12px]">帮助</p>
      </div>
<!-- 
      <div
        class="h-20 mb-2 flex flex-col box_center_four justify-center items-center space-y-1 cursor-pointer shadow bg-white text-[#597ef7] hover:text-white hover:bg-[#597ef7] rounded-s-md"
      >
        <img
          src="http://mb1.els.best/static/image/icon-dingbu@2x.b0450f3e41f74e721c0913f1bcd40002.png"
          alt=""
          class="w-8"
        />
        <p class="text-[12px]">回到顶部</p>
      </div> -->

      <div class="qr_code">
        <div class="w-40 h-40 bg-white shadow rounded">
          <img src="http://ht1.els.best/uploads/images/e13177382b3e958789c877f71b034ca9.jpg" alt="" class="w-full h-full p-1">
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";
</script>

<style scoped>
.box_center_one {
  width: 55px;
  position: absolute;
  transition: 0.3s ease-in-out;
  right: 0;
}
.box_center_one:hover {
  width: 69px;
}
.box_center_two {
  position: absolute;
  width: 55px;
  transition: 0.3s ease-in-out;
  right: 0;
  margin-top: 86px;
}
.box_center_two:hover {
  width: 69px;
}
.box_center_three {
  position: absolute;
  width: 55px;
  transition: 0.3s ease-in-out;
  right: 0;
  margin-top: 172px;
}
.box_center_four {
  position: absolute;
  width: 55px;
  transition: 0.3s ease-in-out;
  right: 0;
  margin-top: 258px;
}
.box_center_three:hover {
  width: 69px;
}
.box_center_four:hover {
  width: 69px;
}
.qr_code{
  position: absolute;
  right: 86px;
  top: 86px;
  display: none;
}
.box_center_two:hover ~ .qr_code {
  display: block;
}


</style>