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
        <img src="/src/assets/img/craft/craft-right@2x.webp" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/brand/craft.scss'
import { onMounted } from 'vue'
import gsap from 'gsap'

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.4 })
  tl.from('.craft-view-lfet-house img', {
    opacity: 0,
    ease: 'power0.inOut',
    duration: 1.3,
  })

    .from(
      '.craft-view-light-2',
      {
        x: '-10%',
        y: '-10%',
        opacity: 0,
        duration: 1.5,
      },
      '<0.3',
    )
    .from(
      '.craft-view-light-1',
      {
        x: '10%',
        y: '10%',
        opacity: 0,
        duration: 1.5,
      },
      '<',
    )
    .from(
      '.craft-view-right img',
      {
        y: '3vw',
        opacity: 0,
        duration: 1,
      },
      '<0.3',
    )
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
