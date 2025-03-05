<template>
  <div class="rise-view">
    <div class="rise-view-container">
      <div class="rise-view-top">
        <div class="rise-view-top-left">
          <img src="/src/assets/img/rise/rise-big-img@2x.webp" alt="" />
        </div>
        <div class="rise-view-top-right">
          <h3>台中崛起30年<br />市心版圖持續西進</h3>
          <h1>TAICHUNG</h1>
          <p>
            隨著人口持續成長、都市規模擴張，台中都市發展有西移的長期趨勢。30年前荒涼的七期，今日已成為中心商業區。1999年精密科技園區啟動開發，2003年中部科學園區展開建設，2006年烏日高鐵站啟用，2021年捷運綠線通車，2024年高鐵娛樂購物城開工動土。台中西進以交通和產業為推動力。
          </p>
        </div>
      </div>
      <div class="rise-view-bottom">
        <div class="rise-view-bottom-container">
          <div class="rise-view-bottom-item item-1999">
            <img src="/src/assets/img/rise/1999@2x.webp" alt="" />
          </div>
          <div class="rise-view-bottom-item item-2003">
            <img src="/src/assets/img/rise/2003@2x.webp" alt="" />
          </div>
          <div class="rise-view-bottom-item item-2006">
            <img src="/src/assets/img/rise/2006@2x.webp" alt="" />
          </div>
          <div class="rise-view-bottom-item item-2021">
            <img src="/src/assets/img/rise/2021@2x.webp" alt="" />
          </div>
          <div class="rise-view-bottom-item item-2024">
            <img src="/src/assets/img/rise/2024@2x.webp" alt="" />
          </div>
          <div class="rise-view-bottom-line">
            <img src="/src/assets/img/rise/資產 9@2x.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/assets/scss/choice/rise.scss'

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from('.rise-view-top-left img', {
    x: '-5%',
    opacity: 0,
    duration: 1.5,
  })
    .from(
      '.rise-view-top-right h3,.rise-view-top-right h1,.rise-view-top-right p',
      {
        y: '2vw',
        opacity: 0,
        stagger: 0.2,
        duation: 1.5,
      },
      '<+0.5',
    )
    .from(
      '.rise-view-bottom-line',
      {
        scale: 0,
        duration: 1,
      },
      '<+0.5',
    )
    .from(
      '.rise-view-bottom-item',
      {
        y: '1vw',
        opacity: 0,
        stagger: 0.15,
        duration: 1.5,
      },
      '<+0.5',
    )
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
