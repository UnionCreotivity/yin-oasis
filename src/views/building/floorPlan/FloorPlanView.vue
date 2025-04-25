<template>
  <div class="floor-plan-view">
    <div class="floor-plan-left">
      <ScaleDrag :max-ratio="2" :init="{ x: 0, y: 0 }">
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
      <h1 class="floor-plan-title">FLOOR PLAN</h1>
      <ul class="floor-plan-right-ul">
        <li
          v-for="item in FloorPlanList"
          :key="item.id"
          :class="[liTag === item.tag ? 'hover-li' : '']"
          @mouseover="addTag(item.tag)"
          @mouseout="removeTag()"
        >
          <router-link :to="{ name: 'floorInner', query: { q: item.tag } }">
            <div class="floor-plan-right-tag">{{ item.floor }}</div>
            <div class="floor-plan-right-ul-line"></div>
          </router-link>
        </li>
      </ul>
      <div class="floor-plan-cloud">
        <img src="/src/assets/img/floor-plan/floor-cloud-2@2x.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import { FloorPlanList } from '../floorPlanData'
import '@/assets/scss/building/floor-plan.scss'

const liTag = ref('')

const addTag = (val: string) => {
  liTag.value = val
}

const removeTag = () => {
  liTag.value = ''
}
</script>

<style scoped></style>
