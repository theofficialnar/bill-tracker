<template>
  <div id="app">
    <app-navbar/>
    <div class="container">
      <transition name="slide-fade" mode="out-in">
          <router-view class="box"/>
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { db } from "@/main";

export default {
  components: {
    "app-navbar": Navbar
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 2.5rem;
}

.box {
  background-color: #d4cdcd;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
