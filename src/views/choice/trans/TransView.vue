<template>
  <div class="trans-view">
    <div class="trans-view-container">
      <div class="trans-bg">
        <picture>
          <source
            media="(max-width:1400px)"
            srcset="/src/assets/img/trans/trans-new-bg@2x-tb.webp"
          />
          <img src="/src/assets/img/trans/trans-new-bg@2x03.webp" alt="" />
        </picture>
        <video src="/src/assets/video/img2024041709370816.mp4" autoplay muted loop></video>
      </div>
      <div class="trans-para">
        <div class="trans-para-left">
          <h3>
            13期首席 雙大道軸心<br />
            輕取八期繁華
          </h3>
          <div class="trans-para-left-img">
            <img src="/src/assets/img/trans/trans-para-en.svg" alt="" />
          </div>
        </div>
        <p class="trans-para-right">
          13期是南台中最大市地重劃區，鄰近商業高度發展的八期，以及全台最大高鐵娛樂購物城的烏日。本案坐擁80米環中路第一排，黎明路直達七期核心，是13期最靠近台74線和高鐵站的交通樞紐。周邊具備10公里水岸綠廊、1.3萬坪生態公園、捷運站、COSTCO、文心秀泰等多元機能
        </p>
        <div class="trans-cloud trans-cloud-1">
          <img src="/src/assets/img/trans/trans-cloud-1@2x.webp" alt="" />
        </div>
        <div class="trans-cloud trans-cloud-2">
          <img src="/src/assets/img/trans/trans-cloud-2@2x.webp" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/assets/scss/choice/trans.scss'

const gsapInit = () => {
  const tl = gsap.timeline()
  tl.from('.trans-cloud-1', {
    x: '50%',
    y: '50%',
    opacity: 0,
    duration: 2.5,
  })
    .from(
      '.trans-cloud-2',
      {
        x: '-50%',
        y: '50%',
        opacity: 0,
        duration: 2.5,
      },
      '<',
    )
    .from(
      '.trans-para-left h3,.trans-para-left-img img',
      {
        y: '4vw',
        opacity: 0,
        stagger: 0.35,
        duration: 1,
      },
      '<+0.5',
    )
    .from(
      '.trans-para-right',
      {
        y: '4vw',
        opacity: 0,
        duration: 1.25,
      },
      '<+0.75',
    )
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
