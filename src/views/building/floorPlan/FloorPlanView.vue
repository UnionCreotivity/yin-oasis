<template>
  <div class="floor-plan-view">
    <div class="floor-plan-left">
      <ScaleDrag :max-ratio="2" :init="{ x: 0, y: 0 }" :plusImg="plusImg" :minus-img="minusImg">
        <div class="container">
          <div class="anchor-area">
            <div class="anchor-area-map">
              <img class="imgBoxMap" src="@/assets/img/floor-plan/floor_1@2x.webp" />
            </div>
          </div>
        </div>
      </ScaleDrag>
      <div class="floor-plan-left-text">3D外觀示意圖</div>
    </div>
    <div class="floor-plan-right">
      <ul class="floor-plan-right-ul">
        <li
          v-for="item in FloorPlanList"
          :key="item.id"
          :class="[liTag === item.tag ? 'hover-li' : '']"
          @mouseover="addTag(item.tag)"
          @mouseout="removeTag()"
        >
          <router-link
            :to="{ name: 'floorInner', query: { q: item.tag } }"
            :class="[item.is_use ? '' : 'disabled-link']"
          >
            <div class="floor-plan-right-tag">{{ item.floor }}</div>
            <div class="floor-plan-right-ul-line"></div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import { FloorPlanList } from '../floorPlanData'
import '@/assets/scss/building/floor-plan.scss'

const liTag = ref('')

const plusImg = ref()

const minusImg = ref()

const addTag = (val: string) => {
  liTag.value = val
}

const removeTag = () => {
  liTag.value = ''
}

const gsapInit = () => {
  const tl = gsap.timeline()
  tl.fromTo(
    '.floor-plan-view',
    {
      maskPosition: '200% -100%',
    },
    {
      maskPosition: '0% 100%',
      //在ipad會造成menu也受到遮罩影響，所以關掉
      // force3D: true,
      // willChange: 'transform',
      duration: 1.5,
    },
  )
}

onMounted(() => {
  plusImg.value = new URL('@/assets/img/floor-plan/new/green-plus.svg', import.meta.url).href
  minusImg.value = new URL('@/assets/img/floor-plan/new/green-minus.svg', import.meta.url).href
  gsapInit()
})
</script>

<style scoped></style>
