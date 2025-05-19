<template>
  <div class="team-view">
    <div class="team-view-container">
      <div class="team-view-left">
        <h1>BEST TEAM</h1>
        <div class="team-view-left-inner">
          <h3>豪宅御用團隊</h3>
          <h4>多項全球大獎肯定</h4>
        </div>
      </div>
      <div class="team-view-right">
        <div class="team-view-right-bg">
          <img src="/src/assets/img/team/team-bg@2x.webp" alt="" />
        </div>
        <div class="team-view-people team-view-people-1" @click.stop="handleFancy('people-1')">
          <div class="team-view-people-main">
            <img src="/src/assets/img/team/team-people-1@2x.webp" alt="" />
          </div>
          <div class="team-view-people-para team-view-people-para-1">
            <img src="/src/assets/img/team/people-1/people-sign-1@2x.webp" alt="" />
          </div>
        </div>
        <div class="team-view-people team-view-people-2" @click.stop="handleFancy('people-2')">
          <div class="team-view-people-main">
            <img src="/src/assets/img/team/team-people-2@2x.webp" alt="" />
          </div>
          <div class="team-view-people-para team-view-people-para-2">
            <img src="/src/assets/img/team/people-2/people-sign-2@2x.webp" alt="" />
          </div>
        </div>
        <div class="team-view-people team-view-people-3" @click.stop="handleFancy('people-3')">
          <div class="team-view-people-main">
            <img src="/src/assets/img/team/team-people-3@2x.webp" alt="" />
          </div>
          <div class="team-view-people-para team-view-people-para-3">
            <img src="/src/assets/img/team/people-3/people-sign-3@2x.webp" alt="" />
          </div>
        </div>
      </div>
      <FadeIn>
        <TeamFancybox v-if="fancyItem" :fancyItem="fancyItem" @handle-fancy="handleFancy" />
      </FadeIn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import FadeIn from '@/components/transition/FadeIn.vue'
import TeamFancybox from '@/components/team/TeamFancybox.vue'
import { teamData } from './teamData'
import '@/assets/scss/brand/team.scss'

const fancyItem = ref<{
  tag: string
  title: string
  people: string
  name: string
  manTitle: string
  manPara: string
  experience?: string
  award: string
  projects: { key: string; p: string; img: string }[]
  projectInners: { key: string; p: string; img: string }[]
} | null>(null)

const handleFancy = (val?: string) => {
  if (val) {
    const data = teamData.find((item) => item.tag === val)
    if (data) fancyItem.value = data
  } else {
    fancyItem.value = null
  }
}

const gsapInit = () => {
  const tl = gsap.timeline()
  tl.from('.team-view-left', {
    opacity: 0,
    filter: 'blur(10px)',
    duration: 1.5,
  }).from(
    '.team-view-people-main img,.team-view-people-para img',
    {
      opacity: 0,
      y: '10%',
      stagger: 0.2,
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
