<template>
  <div class="metro-view">
    <div class="metro-view-container">
      <div class="metro-view-left">
        <Glow :parentLength="20" />
        <img src="../../../assets/img/metro/metro-left@2x.webp" alt="" />
      </div>
      <div class="metro-view-right">
        <h3>
          台中第一環 軌道新樞紐<br />
          廣納科技走廊菁英
        </h3>
        <div class="metro-view-en">
          <img src="../../../assets/img/metro/metro-en-p.svg" alt="" />
        </div>
        <p>
          包含台74線在內的三鐵、三快交通主軸，串聯了中科、精科等台中科技走廊和七期、八期，有上兆元金流和眾多菁英人流匯聚。本案位於台74線之內，坐擁台中第一環的都會核心區，執掌高鐵、台鐵、捷運軌道樞紐，速達國道一號、三號交流道，廣納中彰投的通勤移居能量。
        </p>
      </div>
    </div>
    <h1 class="metro-view-title">TRANSPORTATION</h1>
    <div class="metro-cloud metro-cloud-1">
      <img src="../../../assets/img/metro/metro-cloud-1@2x.webp" alt="" />
    </div>
    <div class="metro-cloud metro-cloud-2">
      <img src="../../../assets/img/metro/metro-cloud-2@2x.webp" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import Glow from '@/components/glow/Glow.vue'
import '@/assets/scss/choice/metro.scss'

const gsapInit = () => {
  const tl = gsap.timeline()
  tl.from('.metro-cloud-1', {
    x: '50%',
    y: '50%',
    opacity: 0,
    duration: 2.5,
  })
    .from(
      '.metro-cloud-2',
      {
        x: '-50%',
        y: '50%',
        opacity: 0,
        duration: 2.5,
      },
      '<',
    )
    .fromTo(
      '.metro-view-left',
      {
        maskSize: '0%',
      },
      {
        duration: 2,
        maskSize: '200%',
      },
      '<0.2',
    )
    .from(
      '.metro-view-right h3,.metro-view-en',
      {
        y: '3vw',
        opacity: 0,
        stagger: 0.35,
        duration: 1,
      },
      '<+0.5',
    )
    .from(
      '.metro-view-right p',
      {
        y: '3vw',
        opacity: 0,
        duration: 0.75,
      },
      '<+0.5',
    )
    .from(
      '.metro-view-title',
      {
        y: '3vw',
        opacity: 0,
        duration: 1,
      },
      '<0.6',
    )
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
