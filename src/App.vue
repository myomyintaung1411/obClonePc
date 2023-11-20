<script setup>
  import {load} from '@/utils/loading'
  load.show('Loading...', 1500);
</script>


<template>
  <router-view />
</template>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*:focus {
  outline: none;
}
html {
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
body{
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-family: PingFang SC, Hiragino Sans GB, Helvetica Neue, Microsoft Yahei, sans-serif, arial;
  min-height: 100vh;
  background: #f5f5f5;
  color: #212121;
  width: 100%;

}
::-webkit-scrollbar {
  width: 0px;
  height: 7px;
  cursor: pointer;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #b4b3b3;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(233, 229, 229, 0.842);
}

.color_f5{
  color:#f5f5f5;
}
.secondary_color{
  background:#7490ff ;
}
._color_sec{
  color:#7490ff ;
}

.footer_bg{
  background: #353f4b;
}

  .actvie-background-btn{
    color: white;
    background: rgb(126,139,190);
    background: linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%);
  }
</style>
