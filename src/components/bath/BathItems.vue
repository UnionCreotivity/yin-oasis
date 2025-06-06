<template>
  <div class="bath-items">
    <div class="bath-items-container">
      <MenuInFeature :listTag="props.listTag" :main="main" @toggle-main="toggleMain" />
      <div class="bath-items-left">
        <div class="bath-items-left-bg">
          <FadeInItem>
            <img src="/src/assets/img/feature/bath/bath-main-bg@2x.webp" alt="" v-show="main" />
            <img src="/src/assets/img/feature/bath/bath-second-bg@2x.webp" alt="" v-show="!main"
          /></FadeInItem>
        </div>
        <FadeInItem>
          <YellowPoint
            v-for="item in pointData?.content"
            :key="item.tag"
            :activeTag="tag"
            :tag="item.tag"
            :className="item.class"
            @handle-tag="handleTag"
        /></FadeInItem>
        <MentionTxt text="情境示意圖" color="white" />
      </div>
      <div class="bath-items-right">
        <FadeInRightToLeft>
          <div
            class="bath-items-right-container"
            v-for="item in bathData"
            :key="item.tag"
            :class="item.class"
            v-show="item.tag === tag"
          >
            <div class="bath-items-right-para">
              <img :src="item.img" alt="" />
            </div></div
        ></FadeInRightToLeft>
      </div>
      <button class="close" @click="handleFeatureTag">
        <img src="/src/assets/img/team/fancy-close.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import gsap from 'gsap'
import FadeInItem from '../transition/FadeInItem.vue'
import YellowPoint from '../points/YellowPoint.vue'
import MenuInFeature from '../menu/MenuInFeature.vue'
import MentionTxt from '../mention/MentionTxt.vue'
import FadeInRightToLeft from '../transition/FadeInRightToLeft.vue'
import { bathData, bathPoints } from './BathData'
import '@/assets/scss/features/bath-items.scss'

const props = defineProps(['listTag'])

const emits = defineEmits(['handle-feature-tag'])

const main = ref(true)

const tag = ref('item-1')

const pointData = ref<{ main: boolean; content: { tag: string; class: string }[] } | null>(null)

const handleTag = (val: string) => {
  if (val) {
    tag.value = val
  }
}

const toggleMain = (val: boolean) => {
  main.value = val
  const findPoints = bathPoints.find((item) => item.main === main.value)
  if (findPoints) {
    pointData.value = findPoints
  }
}

const handleFeatureTag = () => {
  emits('handle-feature-tag')
}

const gsapInit = () => {
  const tl = gsap.timeline({})
  tl.from('.bath-items-left', {
    x: '-20%',
    opacity: 0,
    duration: 1,
  }).from(
    '.bath-items-right',
    {
      x: '20%',
      opacity: 0,
      duration: 1,
    },
    '<+0.25',
  )
}

watch(main, () => {
  if (main.value) {
    tag.value = 'item-1'
  } else {
    tag.value = 'item-6'
  }
})

onMounted(() => {
  toggleMain(true)
  gsapInit()
})
</script>

<style scoped></style>
