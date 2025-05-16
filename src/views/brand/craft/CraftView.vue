<template>
  <section class="craft-view">
    <div class="craft-view-conateinr">
      <div class="craft-view-left">
        <div class="craft-view-light-1">
          <img src="/src/assets/img/craft/craft-light-1@2x.webp" alt="" />
        </div>
        <div class="craft-view-light-2">
          <img src="/src/assets/img/craft/craft-light-2@2x.webp" alt="" />
        </div>
        <div class="craft-view-lfet-house">
          <img src="/src/assets/img/craft/craft-left@2x.webp" alt="" />
        </div>
      </div>
      <div class="craft-view-right">
        <div class="craft-view-right-container">
          <h3>精工營造 智慧管理</h3>
          <h1>HESUNG</h1>
          <p>
            創立至今逾30年，長久專注於金屬、建材、建築工程，具備豐厚工程經驗，高規、嚴謹的品質要求。服務竹科、中科、高鐵、五星飯店，以及全台知名豪宅、商辦、公共建設。導入BIM工程系統，AI大數據管理，精確測量計算鋼筋、建材、管線，降低錯誤，節能減碳，建造永續安心居所。
          </p>
          <div class="craft-view-right-icon">
            <img src="/src/assets/img/craft/craft-icon@2x.webp" alt="" />
          </div>
        </div>
        <!-- <img src="/src/assets/img/craft/craft-right@2x.webp" alt="" /> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/assets/scss/brand/craft.scss'

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.75 })

  tl.from('.craft-view-lfet-house img', {
    scale: 0.8,
    opacity: 0,
    duration: 1.25,
  })
    .from(
      '.craft-view-light-1 img',
      {
        x: '-35%',
        y: '35%',
        duration: 1.25,
      },
      '<',
    )
    .from(
      '.craft-view-light-2 img',
      {
        x: '35%',
        y: '-35%',
        duration: 1.25,
      },
      '<',
    )
    .from(
      '.craft-view-right-container h3,.craft-view-right-container h1,.craft-view-right-container p,.craft-view-right-icon img',
      {
        y: '3vw',
        opacity: 0,
        stagger: 0.35,
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
