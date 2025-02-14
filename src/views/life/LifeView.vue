<template>
  <ViewFixed id="life-view">
    <div class="life-view-container">
      <div class="life-view-left">
        <ScaleDrag :init="{ x: 100, y: 100 }" :max-ratio="2">
          <img src="/src/assets/img/life/life-left-img02@2x.webp" alt="" />
        </ScaleDrag>
      </div>
      <div class="life-view-right">
        <div class="life-view-right-top">
          <h3>生活機能</h3>
          <div class="life-view-right-top-p-en">
            <img src="/src/assets/img/life/life-para-en.svg" alt="" />
          </div>
        </div>
        <div class="life-view-right-bottm">
          <div class="life-view-right-bottom-item" v-for="life in lifeList" :key="life.key">
            <div class="life-list-squre"></div>
            <p class="life-list-ani life-list-zh">{{ life.zhName }}</p>
            <p class="life-list-ani life-list-en">{{ life.enName }}</p>
          </div>
          <div class="life-view-right-cloud">
            <img src="/src/assets/img/life/life-cloud@2x.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  </ViewFixed>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import ViewFixed from '@/components/view-fixed/ViewFixed.vue'
import '@/assets/scss/life/life.scss'

const lifeList = [
  {
    key: 'list-1',
    zhName: '交通樞紐',
    enName: 'Transportation',
  },
  {
    key: 'list-2',
    zhName: '產業雲集',
    enName: 'Bustling Area',
  },
  {
    key: 'list-3',
    zhName: '購物商圈',
    enName: 'Shopping Hub',
  },
  {
    key: 'list-4',
    zhName: '公園休閒',
    enName: 'Verdant Park',
  },
  {
    key: 'list-5',
    zhName: '人文薈萃',
    enName: 'Cultural Hub',
  },
]

const gsapInit = () => {
  const tl = gsap.timeline()
  tl.from('.life-view-right-cloud', {
    x: '50%',
    y: '50%',
    opacity: 0,
    duration: 2.5,
  })
    .from(
      '.life-view-right-top,.life-view-right-top-p-en',
      {
        y: '2vw',
        opacity: 0,
        stagger: 0.15,
        duration: 1.5,
      },
      '<+0.25',
    )
    .from(
      '.life-list-ani',
      {
        x: '50%',
        opacity: 0,
        stagger: 0.15,
        duration: 1.5,
      },
      '<+0.25',
    )
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
