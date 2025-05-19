<template>
  <section class="deep-view">
    <div class="deep-view-container">
      <div class="deep-view-left"><img src="/src/assets/img/35/光束+字.webp" alt="" /></div>
      <div class="deep-view-right">
        <div class="deep-view-right-top">
          <h3>精英開發 石云建設<br />台中最大 七期豪宅推手</h3>
          <div class="deep-view-para-en">
            <img src="/src/assets/img/35/35-para-en.svg" alt="" />
          </div>
        </div>
        <p class="deep-view-right-bottom">
          35年選地遠見，見證台中發展起飛，成就台中最大土地開發商。多年來經手千億土地，推動七期繁華榮景。跨足土開、建設、代銷、仲介、飯店、商場、農場，整合上下游產業，服務眾多企業和客戶群。秉持「以客為尊，服務大眾」，洞悉土地和建築的價值，深入購屋者的心理需求，為人們營造真正的宜居生活。
        </p>
      </div>
      <h1 class="deep-view-title">BRAND VALUES</h1>
      <div class="deep-view-cloud"><img src="/src/assets/img/35/inter-cloud@2x.webp" alt="" /></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/assets/scss/brand/deep.scss'

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.25 })
  tl.from('.deep-view-cloud', {
    x: '50%',
    y: '50%',
    opacity: 0,
    duration: 2.5,
  })
    .from(
      '.deep-view-left img',
      {
        y: '10%',
        opacity: 0,
        duration: 1,
      },
      '<+0.35',
    )
    .from(
      '.deep-view-right-top h3,.deep-view-para-en,.deep-view-right-bottom',
      {
        y: '3vw',
        opacity: 0,
        stagger: 0.15,
        duration: 0.75,
      },
      '<+0.35',
    )
    .from('.deep-view-title', { opacity: 0, duration: 1 }, '<0.3')
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
