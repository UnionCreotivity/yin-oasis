<template>
  <div class="feature-view">
    <div class="feature-view-container">
      <div class="feature-view-left">
        <h1 class="feature-en-title">METOHD OF HOUSE</h1>
        <div class="feature-zh-title">
          <h3>精品家居</h3>
          <h4>遇見，時尚精品住宅</h4>
        </div>
      </div>
      <div class="feature-view-right">
        <div class="feature-view-right-top">
          <div class="feature-view-right-item">
            <div class="feature-view-right-item-img" @click="handleTag('kitchen')">
              <img src="/src/assets/img/feature/廚具設備-list@2x.webp" alt="" />
            </div>
            <p>廚具設備</p>
          </div>
          <div class="feature-view-right-item">
            <div class="feature-view-right-item-img" @click="handleTag('lock')">
              <img src="/src/assets/img/feature/四合一電子鎖-list@2x.webp" alt="" />
            </div>
            <p>四合一電子鎖</p>
          </div>
          <div class="feature-view-right-item">
            <div class="feature-view-right-item-img" @click="handleTag('door')">
              <img src="/src/assets/img/feature/玄關門-list@2x.webp" alt="" />
            </div>
            <p>玄關門</p>
          </div>
        </div>
        <div class="feature-view-right-bottom">
          <div class="feature-view-right-item">
            <div class="feature-view-right-item-img" @click="handleTag('spc')">
              <img src="/src/assets/img/feature/冠軍室內SPC地板-list@2x.webp" alt="" />
            </div>
            <p>冠軍室內SPC地板</p>
          </div>
          <div class="feature-view-right-item">
            <div class="feature-view-right-item-img" @click="handleTag('bath')">
              <img src="/src/assets/img/feature/衛浴設備-list@2x.webp" alt="" />
            </div>
            <p>衛浴設備</p>
          </div>
          <div class="feature-view-right-item">
            <div class="feature-view-right-item-img" @click="handleTag('window')">
              <img src="/src/assets/img/feature/鋁窗YKK-list@2x.webp" alt="" />
            </div>
            <p>鋁窗YKK</p>
          </div>
        </div>
      </div>
    </div>
    <FadeIn>
      <KitchenItems v-if="tag === 'kitchen'" :listTag="tag" @handle-feature-tag="handleTag" />
      <BathItems v-else-if="tag === 'bath'" :listTag="tag" @handle-feature-tag="handleTag" />
      <LockItem v-else-if="tag === 'lock'" :listTag="tag" @handle-feature-tag="handleTag" />
      <DoorItem v-else-if="tag === 'door'" :listTag="tag" @handle-feature-tag="handleTag" />
      <SPCItem v-else-if="tag === 'spc'" :listTag="tag" @handle-feature-tag="handleTag" />
      <WindowItem v-else-if="tag === 'window'" :listTag="tag" @handle-feature-tag="handleTag" />
    </FadeIn>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import FadeIn from '@/components/transition/FadeIn.vue'
import KitchenItems from '@/components/features/KitchenItems.vue'
import BathItems from '@/components/bath/BathItems.vue'
import LockItem from '@/components/features/LockItem.vue'
import DoorItem from '@/components/features/DoorItem.vue'
import SPCItem from '@/components/features/SPCItem.vue'
import WindowItem from '@/components/features/WindowItem.vue'
import '@/assets/scss/method/feature.scss'

const tag = ref<string | null>(null)

const handleTag = (val?: string) => {
  if (val) {
    tag.value = val
  } else {
    tag.value = null
  }
}

const gsapInit = () => {
  const tl = gsap.timeline()
  tl.from('.feature-view-container', {
    x: '-20%',
    opacity: 0,
    duration: 1.5,
  }).fromTo(
    '.feature-view-container',
    {
      maskPosition: '200% -100%',
    },
    {
      maskPosition: '0% 100%',
      force3D: true,
      willChange: 'transform',
      duration: 2,
    },
    '<+0.2',
  )
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
