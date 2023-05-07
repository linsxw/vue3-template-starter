<script setup lang="ts">

</script>

<template>
  <div class="bg-[#d8dae2] flex justify-center items-center min-h-screen">
    <div class="bg-[#eff0f1] p-10 rounded-3xl [&_*]:transition-all [&_*]:ease-linear [&_*]:duration-200">
      <div>
        <div>
          <div class="text-xl font-bold w-[40vw]">
            <h2>Vue3-template-starter</h2>
          </div>
          <div class="hidden md:flex items-center gap-4 mt-4 mb-8 [&>*]:bg-white [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-lg [&>*:hover]:bg-slate-900 [&>*:hover]:text-white [&>*]:cursor-pointer">
            <div @click="$router.push('/home')">
              <h2>首页</h2>
            </div>
            <div @click="$router.push('/about')">
              <h2>关于</h2>
            </div>
          </div>
        </div>

        <div class="bg-white p-4 rounded">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
