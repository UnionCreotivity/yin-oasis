<template>
  <div class="inter-view">
    <div class="inter-view-container">
      <div class="inter-view-left">
        <div class="inter-view-col">
          <div class="inter-view-col-inner">
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-1@2x.webp" alt="" />
              <p>日月町商場</p>
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-2@2x.webp" alt="" />
              <p>日月町蔦屋書店</p>
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-3@2x.webp" alt="" />
              <p>楓橋餐廳</p>
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-4@2x.webp" alt="" />
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-1@2x.webp" alt="" />
              <p>日月町商場</p>
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-2@2x.webp" alt="" />
              <p>日月町蔦屋書店</p>
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-3@2x.webp" alt="" />
              <p>楓橋餐廳</p>
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-4@2x.webp" alt="" />
            </div>
          </div>
        </div>
        <div class="inter-view-col-2">
          <div class="inter-view-col-inner-2">
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-5@2x.webp" alt="" />
              <p>萬楓酒店</p>
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-6@2x.webp" alt="" />
              <p>日月町蔦屋書店</p>
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-7@2x.webp" alt="" />
              <p>日月町商場</p>
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-5@2x.webp" alt="" />
              <p>萬楓酒店</p>
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-6@2x.webp" alt="" />
              <p>日月町蔦屋書店</p>
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-7@2x.webp" alt="" />
              <p>日月町商場</p>
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-5@2x.webp" alt="" />
              <p>萬楓酒店</p>
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-6@2x.webp" alt="" />
              <p>日月町蔦屋書店</p>
            </div>
            <div class="inter-view-col-item">
              <img src="/src/assets/img/inter/inter-img-7@2x.webp" alt="" />
              <p>日月町商場</p>
            </div>
          </div>
        </div>
      </div>
      <div class="inter-view-right">
        <div class="inter-view-right-top">
          <h3>優生活聚落<br />引進國際品牌星級服務</h3>
          <div class="inter-view-title-en">
            <img src="/src/assets/img/inter/inter-para-en.svg" alt="" />
          </div>
        </div>
        <p>
          不只是房子，更是一種理想的生活。結合跨國集團多元事業體，為建築導入軟性的人文關懷，以全方位服務體系，回饋社會與客戶；包含萬豪酒店集團的餐飲服務、蔦屋書店的文化講座和親子活動，農場提供的健康有機食材、社區共學農場體驗之旅…等等。
        </p>
        <div class="inter-view-right-bottom">
          <img src="/src/assets/img/inter/inter-paras-icon@2x.webp" alt="" />
        </div>
      </div>
      <div class="inter-view-cloud">
        <img src="/src/assets/img/inter/inter-cloud@2x.webp" alt="" />
      </div>
      <div class="inter-view-shine">
        <img src="/src/assets/img/inter/inter-shine@2x.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/assets/scss/brand/inter.scss'

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from('.inter-view-cloud', {
    x: '50%',
    y: '50%',
    opacity: 0,
    duration: 2.5,
  })
    .from(
      '.inter-view-shine',
      {
        opacity: 0,
        duration: 1.5,
      },
      '<+0.1',
    )
    .from(
      '.inter-view-right-top h3,.inter-view-title-en',
      {
        y: '2vw',
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
      },
      '<+0.25',
    )
    .from(
      '.inter-view-right p',
      {
        y: '2vw',
        opacity: 0,
        duration: 1,
      },
      '<+0.25',
    )
    .from(
      '.inter-view-right-bottom',
      {
        y: '2vw',
        opacity: 0,
        duration: 1.5,
      },
      '<+0.15',
    )
}

const imageInfinite = () => {
  const tl = gsap.timeline({ repeat: -1 })
  tl.to('.inter-view-col-inner-2', {
    y: '33.6%',
    ease: 'linear',
    duration: 10,
  })
  const tlSecond = gsap.timeline({ repeat: -1 })
  tlSecond.to('.inter-view-col-inner', {
    y: '-50.5%',
    ease: 'linear',
    duration: 12.5,
  })
}

onMounted(() => {
  gsapInit()
  imageInfinite()
})
</script>

<style scoped></style>
