<template>
  <section class="w-full h-screen relative">
    <div v-if="active_section === 0" class="animate-fadefromTop">
      <div class="h-full w-full">
        <img
          class="w-full h-full object-cover"
          src="http://mb1.els.best/static/image/banner-1.55bcde09ee8cab8b010f9b6c2b9a066b.jpg"
          alt=""
        />
      </div>
      <div class="bg-image-one">
        <div class="flex max-w-6xl mx-auto">
          <div
            class="mt-20 h-[514px] py-10 px-10 bg-white w-full flex justify-between space-x-4"
          >
            <div class="w-[400px]">
              <h1 class="font-bold text-xl">意甲尤文图斯足球俱乐部</h1>
              <p class="text-sm mt-3" style="line-height: 25px">
                尤文图斯——意大利足球的领军俱乐部，在截止到2020年这九年间，创纪录地连续九次夺得意甲联赛冠军，完成队史上38次夺得意甲联赛冠军的壮举。而在欧战赛场上，尤文更是欧陆第一支把欧洲三大杯（欧洲冠军杯，欧洲联盟杯，欧洲优胜者杯）都收入囊中的球队。尤文图斯，不仅是意大利的冠军队伍，也是欧战的强劲团队。
              </p>
            </div>
            <div class="w-[700px] h-full">
              <img
                class="w-full h-full"
                src="https://senbackkg.salinent.com/static-sponsor/assets-oss/ob/images/juventus-web/sponsor-img.00b028f11dcd3fa07222df88d18d1ece.jpg?x-oss-process=image/resize,p_100/quality,Q_100/format,webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="active_section === 1" class="animate-fadefromTop">
      <div class="h-full w-full">
        <img
          class="w-full h-full object-cover"
          src="http://mb1.els.best/static/image/banner.57c0282eccf86dd00ab9ee36ae51c98e.png"
          alt=""
        />
      </div>
      <div class="bg-image-two">
        <div class="flex max-w-6xl mx-auto">
          <div
            class="mt-20 h-[514px] py-10 px-10 bg-white w-full flex justify-between space-x-4"
          >
            <div class="w-[700px] h-full">
              <h1 class="font-bold text-xl">阿斯顿维拉足球俱乐部</h1>
              <p class="text-sm mt-3" style="line-height: 25px">
                阿斯顿维拉足球俱乐部（绰号维拉人）是一家位于英格兰中部伯明翰市的足球俱乐部，于1874年创立，现时于英格兰足球超级联赛竞逐，是1888年甲组联赛及1992年英格兰足球超级联赛首届赛事球队，因此阿斯顿维拉也是英超之中历史最悠久的球队之一，其主场位于伯明翰市的维拉公园球场。
                　早年，阿斯顿维拉曾经七次赢得顶级联赛冠军和七次英格兰足总杯，更于1982年获得欧洲联赛冠军杯和欧洲超级杯冠军。
              </p>
              <div class="flex items-center space-x-10 mt-12">
                <img
                  class="h-full w-[300px]"
                  src="https://senbackkg.salinent.com/static-sponsor/assets-oss/ob/images/avfc-web/honor1.b769c4e6fe49ac2defecf6dc19443bd7.jpg?x-oss-process=image/resize,p_100/quality,Q_100/format,webp"
                  alt=""
                />
                <img
                  class="h-full w-[300px]"
                  src="https://senbackkg.salinent.com/static-sponsor/assets-oss/ob/images/avfc-web/honor2.9dc36ae8b757f459e5d2615d1ba0b0e8.jpg?x-oss-process=image/resize,p_100/quality,Q_100/format,webp"
                  alt=""
                />
              </div>
            </div>

            <div class="w-[400px] h-full">
              <img
                class="w-full h-full"
                src="https://senbackkg.salinent.com/static-sponsor/assets-oss/ob/images/avfc-web/honor3.833838cd6b550cd25b7c2b7aa59fb1f7.jpg?x-oss-process=image/resize,p_100/quality,Q_100/format,webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="left_nav fixed left-0 top-[410px] cursor-pointer">
      <div
        @click="clickTab(0)"
        :class="active_section === 0 ? 'bg-slate-100' : 'bg-slate-200'"
        class="flex items-center h-[70px] rounded-t animate-fade hover:w-[200px] transition-all ease-in-out duration-300"
      >
        <img
          src="http://mb1.els.best/static/image/juventus.1929882645ae27e7bb14e6e8f1caf89b.png"
          alt=""
          class="w-[70px] h-[70px]"
        />
      </div>
      <div
        @click="clickTab(1)"
        :class="active_section === 1 ? 'bg-slate-100' : 'bg-slate-200'"
        class="flex items-center h-[70px] rounded-b hover:w-[200px] animate-fade transition-all ease-in-out duration-300"
      >
        <img
          src="http://mb1.els.best/static/image/avfc.5a0c0207f0c363dc956bbe3627e80bc8.png"
          alt=""
          class="w-[70px] h-[70px]"
        />
      </div>
    </section>
  </section>
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

<style scoped>
.bg-image-one {
  position: relative;
  background-image: url(http://mb1.els.best/static/image/section-bg.6270bae969fcafe57c292bbcc143d5cb.jpg);
  background-repeat: no-repeat;
  min-width: 1200px;
  height: 100%;
  background-position: 50%;
  background-size: cover;
  transform: translateZ(0);
}
.bg-image-two {
  position: relative;
  background-image: url(http://mb1.els.best/static/image/box.38cc7938cfb2d74763b7ee55bb754536.jpg);
  background-repeat: no-repeat;
  min-width: 1200px;
  height: 100%;
  background-position: 50%;
  background-size: cover;
  transform: translateZ(0);
}
</style>