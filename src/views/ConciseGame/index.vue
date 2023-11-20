<template>
    <section class="w-full relative realbet">
        <div class="relative min-w-[1200px] h-[553px] z-10 w-full">
            <div class="bg_banner_one">
                <div class="bg_inner_one">

                </div>
            </div>
        </div>
        <!-- grid -->
        <div class="max-w-7xl mx-auto z-10 rounded-md relative pb-10 ">
            <div class="relative bg-white -mt-[50px] px-10 py-10  w-full shadow-lg rounded-md">
                    <div class="px-8 py-2 cursor-pointer inline-block rounded-full actvie-background-btn text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                全部游戏
                     </div>

                     <div class="grid grid-cols-5 gap-10 cursor-pointer pt-10">
                        <div v-for="n in 15" :key="n" class="group w-[224px]  rounded border border-[#dee9f3] h-[220px] relative shadow">
                            <div class="h-[180px] w-full relative transform-origin-center transition-transform duration-300 group-hover:animate-tracking-in-expand">
                                <img src="http://ht1.els.best/uploads/images/ag_logo.png" alt="" class="h-full w-full object-cover group-hover:">
                            </div>
                            <div class="h-10  flex flex-col justify-center pl-5">
                                AG电子
                            </div>
                            <div class="absolute  top-0 z-10 h-[180px] w-full bg-black opacity-0 bg-opacity-30  group-hover:opacity-100 transition-opacity duration-100 group-hover:animate-fadefromTop">
                                <div class="w-full h-full flex flex-col justify-center items-center">
                              <div class="px-8 py-2 cursor-pointer inline-block  bg-blue-600 bg-opacity-60 text-white tracking-wider text-base hover:scale-110 transform-origin-center transition-transform duration-300">
                                全部游戏
                                 </div>
                                </div>
                            </div>
                        </div>
                        
                     </div>
            </div>
        </div>
    </section>
</template>


<style scoped>

    .bg_banner_one{
        background: url(https://senbackkg.salinent.com/main-consumer-web/assets-oss/ob/images/egaming/banner.bb277373d1c639fff9e30214d9839c9c.png?x-oss-process=image/resize,p_100/quality,Q_70/format,webp);
        background-repeat: no-repeat;
        overflow: hidden;
        background-position: top;
        background-size: 100% 622px;
        height: 622px;
        width: 100%;
        margin: auto;
    }
    .bg_inner_one{
        background: url(https://senbackkg.salinent.com/main-consumer-web/assets-oss/commons/images/egame/banner-img-ob.80d5348d9497618f96904fdbd755b6ff.png?x-oss-process=image/resize,m_lfit,w_3840/format,webp);
        width: 1920px;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        top: 0;
        background-repeat: no-repeat;
        background-size: 1920px 622px;
        background-position: top;
        height: 622px;
    }
</style>