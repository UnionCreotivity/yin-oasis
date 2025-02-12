<template>
  <article id="home-view">
    <div class="home-view-bg"><img src="../../assets/img/home/home-bg@2x.webp" alt="" /></div>
    <FadeIn>
      <div class="home-view-init" v-show="!isShow" @click.stop="showClick">
        <div class="home-view-init-icon">
          <img src="../../assets/img/home/home-title-2.svg" alt="" />
        </div>
      </div>
    </FadeIn>
    <div class="home-view-main" v-show="isShow">
      <div class="home-view-bird home-view-bird-1">
        <img src="../../assets/img/home/home-bird-1@2x.png" alt="" />
      </div>
      <div class="home-view-bird home-view-bird-2" :class="isStart ? 'bird-float' : ''">
        <img src="../../assets/img/home/home-bird-2@2x.png" alt="" />
      </div>
      <div class="home-view-cloud home-view-cloud-1">
        <img src="../../assets/img/home/cloud@2x.webp" alt="" />
      </div>
      <div class="home-view-cloud home-view-cloud-2">
        <img src="../../assets/img/home/cloud@2x.webp" alt="" />
      </div>
      <div class="home-view-cloud home-view-cloud-3">
        <img src="../../assets/img/home/cloud@2x.webp" alt="" />
      </div>
      <div class="home-view-cloud home-view-cloud-4">
        <img src="../../assets/img/home/cloud@2x.webp" alt="" />
      </div>
      <div class="home-view-title-1">
        <img src="../../assets/img/home/home-title-1.svg" alt="" />
      </div>
      <div class="home-view-title-2">
        <img src="../../assets/img/home/home-title-2.svg" alt="" />
      </div>
      <ul class="home-view-menu">
        <li class="home-view-menu-item" v-for="menu in menuItems" :key="menu.key">
          <router-link :to="{ name: menu.link }" class="home-view-menu-item-link">
            <p class="home-view-menu-item-zh">{{ menu.zhName }}</p>
            <p class="home-view-menu-item-en">{{ menu.enName }}</p>
          </router-link>
        </li>
      </ul>
      <FullScreen />
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import screenfull from 'screenfull'
import FadeIn from '@/components/transition/FadeIn.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import '@/assets/scss/home/home-view.scss'

const isShow = ref(false)

const isStart = ref(false)

const menuItems = [
  {
    key: 'menu-1',
    zhName: '品牌精鑄',
    enName: 'BRAND',
    link: '',
  },
  {
    key: 'menu-2',
    zhName: '13期首席',
    enName: 'BEST CHOICE',
    link: 'metro',
  },
  {
    key: 'menu-3',
    zhName: '上質生活',
    enName: 'STYLE',
    link: 'life',
  },
  {
    key: 'menu-4',
    zhName: '森粼雅居',
    enName: 'BUILDING',
    link: '',
  },
  {
    key: 'menu-5',
    zhName: '智慧精工',
    enName: 'METHOD',
    link: '',
  },
  {
    key: 'menu-6',
    zhName: '市場直擊',
    enName: 'LIVE',
    link: '',
  },
]

const initGsap = () => {
  const tl = gsap.timeline({ delay: 0.25 })

  tl.to('.home-view-bg', {
    maskSize: '400%',
    ease: 'Power0.easeNone',
    duration: 7,
  })
    .from(
      '.home-view-title-1,.home-view-title-2',
      {
        opacity: 0,
        y: '5vw',
        filter: 'blur(10px)',
        stagger: 0.25,
        duration: 2,
      },
      '<+0.25',
    )
    .from(
      '.home-view-menu-item',
      {
        y: '105%',
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
      },
      '<+0.75',
    )
    .from(
      '.home-view-bird-1',
      {
        x: '-50%',
        y: '70%',
        opacity: 0,
        duration: 1.5,
      },
      '<+0.5',
    )
    .from(
      '.home-view-bird-2',
      {
        x: '-50%',
        y: '70%',
        opacity: 0,
        duration: 1,
        onComplete: () => {
          isStart.value = true
        },
      },
      '<+0.25',
    )
}

const showClick = () => {
  isShow.value = !isShow.value
  if (!screenfull.isFullscreen) {
    screenfull.toggle()
  }
  initGsap()
}
</script>

<style scoped>
.full-screen {
  mix-blend-mode: screen;
}
</style>
