<template>
  <div class="kitchen-items">
    <div class="kitchen-items-container">
      <MenuInFeature :listTag="props.listTag" />
      <div class="left-traingle">
        <img src="/src/assets/img/feature/left-triangle@2x.webp" alt="" />
      </div>
      <div class="kitchen-items-left">
        <img src="/src/assets/img/feature/kitchen/kitchen-main-bg@2x.webp" alt="" />
        <YellowPoint
          v-for="item in kitchenPointData"
          :key="item.tag"
          :tag="item.tag"
          :activeTag="activeTag"
          :className="item.class"
          @handle-tag="handleTag"
        />
      </div>
      <div class="kitchen-items-right">
        <FadeInRightToLeft>
          <div
            class="kitchen-items-right-para"
            v-for="item in kitchenData"
            :key="item.tag"
            :class="item.class"
            v-show="activeTag === item.tag"
          >
            <img :src="item.img" alt="" />
          </div>
        </FadeInRightToLeft>
      </div>
      <div class="close" @click="handleFeatureTag">
        <img src="/src/assets/img/team/fancy-close.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import MenuInFeature from '../menu/MenuInFeature.vue'
import YellowPoint from '../points/YellowPoint.vue'
import FadeInRightToLeft from '../transition/FadeInRightToLeft.vue'
import { kitchenData, kitchenPointData } from './KitchenData'
import '@/assets/scss/features/kitchen-items.scss'

const props = defineProps(['listTag'])

const emits = defineEmits(['handle-feature-tag'])

const activeTag = ref('item-1')

const handleTag = (val: string) => {
  activeTag.value = val
}

const handleFeatureTag = () => {
  emits('handle-feature-tag')
}

const gsapInit = () => {
  const tl = gsap.timeline({})
  tl.from('.kitchen-items-left', {
    x: '-20%',
    opacity: 0,
    duration: 1,
  }).from(
    '.kitchen-items-right',
    {
      x: '20%',
      opacity: 0,
      duration: 1,
    },
    '<+0.25',
  )
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
