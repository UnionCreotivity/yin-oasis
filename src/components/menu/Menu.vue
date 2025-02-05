<template>
  <div class="menu-icon" @click.stop="showClick(true)">
    <img src="../../assets/img/other/menu-icon.svg" alt="" />
  </div>
  <Transition name="mask">
    <div class="menu-main" v-if="is_Show">
      <div class="menu-main-bg"><img src="../../assets/img/menu/menu-bg@2x.webp" alt="" /></div>
      <div class="menu-top">
        <router-link :to="{ name: 'home' }" class="menu-top-left">
          <div class="menu-title-1">
            <img src="../../assets/img/menu/menu-title-1.svg" alt="" />
          </div>
          <div class="menu-title-2">
            <img src="../../assets/img/menu/menu-title-2.svg" alt="" />
          </div>
        </router-link>
        <ul class="menu-top-right">
          <li class="menu-top-right-item" v-for="item in menuData" :key="item.key">
            <h4>{{ item.zhName }}</h4>
            <h5>{{ item.enName }}</h5>
            <div class="menu-links">
              <router-link :to="{ name: link.link }" v-for="link in item.list" :key="link.key">
                <p>{{ link.name }}</p>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
      <div class="menu-icon-close" @click.stop="showClick(false)">
        <img src="../../assets/img/other/close-button.svg" alt="" />
      </div></div
  ></Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { menuData } from './menuData'
import '@/assets/scss/menu/menu.scss'

const is_Show = ref(false)

const showClick = (val: boolean) => {
  is_Show.value = val
}
</script>

<style lang="scss">
.mask-enter-active,
.mask-leave-active {
  transition: all 1.5s ease;
}

.mask-enter-from,
.mask-leave-to {
  mask-position: 0vw;
}
</style>
