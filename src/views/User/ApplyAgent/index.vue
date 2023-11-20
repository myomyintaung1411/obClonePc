<template>
     <section class="w-full relative">
      <div class="flex items-end">
      <b class="text-[#333] font-bold text-2xl">申请代理</b>
      <span class="text-sm ml-3 text-[#94a6b7]">请填写真实申请信息，以便管理员审核代理信息！</span>
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
            <div class="text-base text-[#333] tracking-wider">联系方式：</div>
            <div>
              <div class="w-[300px] h-10 relative rounded mt-2">
                <input
                
                  type="text"
                  placeholder="请输入您的联系方式"
                  class="w-full h-full border border-[#ccc] rounded px-5 placeholder:tracking-wider focus:border-[#3678fe]"
                />
              </div>
            </div>
          </div>
        <div class="my-5">
            <div class="text-base text-[#333] tracking-wider">申请说明：</div>
            <div>
              <div class="w-[300px] h-20 relative rounded mt-2">
                <textarea
                
                  type="text"
                  placeholder="请输入您的联系方式"
                  class="w-full h-full border border-[#ccc] rounded px-5 py-2 placeholder:tracking-wider focus:border-[#3678fe]"
                />
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
</template>