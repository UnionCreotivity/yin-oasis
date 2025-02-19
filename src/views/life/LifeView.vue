<template>
  <ViewFixed id="life-view">
    <div class="life-view-container">
      <div class="life-view-left">
        <ScaleDrag :init="initXY" :max-ratio="2">
          <img class="life-map" src="/src/assets/img/life/map@2x.webp" alt="" />
          <!-- <Glow /> -->
          <!-- <div class="life-mask">
            <div class="life-mask-inner">
              <div class="life-mask-light"></div>
            </div>
          </div> -->
          <div
            class="life-view-point"
            v-for="point in lifeData"
            :key="point.id"
            :class="[point.className, tag === point.tag ? 'active' : '']"
            @click.stop="showFancybox(point.id)"
          >
            <img src="/src/assets/img/life/point@2x.png" alt="" />
          </div>
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
          <div
            class="life-view-right-bottom-item"
            v-for="life in lifeList"
            :key="life.key"
            @click.stop="handleTag(life.key)"
            :class="tag === life.key ? 'active' : ''"
          >
            <div class="life-list-squre"></div>
            <div class="life-list-text">
              <p class="life-list-ani life-list-zh">{{ life.zhName }}</p>
              <p class="life-list-ani life-list-en">{{ life.enName }}</p>
            </div>
          </div>
          <div class="life-view-right-cloud">
            <img src="/src/assets/img/life/life-cloud@2x.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
    <FadeIn>
      <LifeFancybox v-if="fancyboxItem" :fancyItem="fancyboxItem" @show-fancybox="showFancybox" />
    </FadeIn>
  </ViewFixed>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import ViewFixed from '@/components/view-fixed/ViewFixed.vue'
import LifeFancybox from '@/components/life-fancybox/LifeFancybox.vue'
import FadeIn from '@/components/transition/FadeIn.vue'
import { lifeData, lifeFancyData } from './LifeData'
import '@/assets/scss/life/life.scss'

const lifeList = [
  {
    key: 'life-1',
    zhName: '交通樞紐',
    enName: 'Transportation',
  },
  {
    key: 'life-2',
    zhName: '產業雲集',
    enName: 'Bustling Area',
  },
  {
    key: 'life-3',
    zhName: '購物商圈',
    enName: 'Shopping Hub',
  },
  {
    key: 'life-4',
    zhName: '公園休閒',
    enName: 'Verdant Park',
  },
  {
    key: 'life-5',
    zhName: '人文薈萃',
    enName: 'Cultural Hub',
  },
]

const tag = ref('')

const fancyboxItem = ref<{ key: string; image: string; txt: string }[] | null>(null)

const handleTag = (val: string) => {
  tag.value = val
}

const showFancybox = (val: string) => {
  if (val) {
    const fancyContent = lifeFancyData.find((item) => item.tag === val)?.content
    if (fancyContent) {
      fancyboxItem.value = fancyContent
    }
  } else {
    fancyboxItem.value = null
  }
}

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

const initXY = computed(() => {
  return window.innerWidth > 1400 ? { x: 300, y: -200 } : { x: 100, y: -100 }
})
onMounted(() => {
  gsapInit()
})
</script>

<style scoped>
#life-view .life-view-container .life-view-left .life-view-point:hover {
  animation: pointAni 1.5s ease infinite forwards;
}
#life-view
  .life-view-container
  .life-view-right
  .life-view-right-bottom-item:hover
  .life-list-text {
  transform: translateX(1vw);
}
</style>
