<template>
  <div class="team-fancybox" :class="zIndexComputed">
    <div class="team-fancy-container" :class="props.fancyItem?.tag">
      <div class="team-fancy-fixed">
        <img src="/src/assets/img/team/people-1-left-img@2x.webp" alt="" />
      </div>
      <div class="team-fancy-right-light">
        <img src="/src/assets/img/team/team-inner-right-light@2x.webp" alt="" />
      </div>
      <div class="team-fancy-left-light">
        <img src="/src/assets/img/team/team-inner-left-light@2x.webp" alt="" />
      </div>
      <div class="team-fancy-left">
        <div class="team-fancy-left-title">
          <img :src="props.fancyItem.title" alt="" />
        </div>
        <div class="team-fancy-people">
          <img :src="props.fancyItem.people" alt="" />
        </div>
        <div class="team-fancy-name">
          <img :src="props.fancyItem.name" alt="" />
        </div>
      </div>
      <div class="team-fancy-right">
        <div class="team-fancy-title">
          <h3>{{ props.fancyItem.manTitle }}</h3>
          <p>
            {{ props.fancyItem.manPara }}
          </p>
          <div class="team-fancy-line"></div>
        </div>
        <div class="team-fancy-para">
          <div class="team-fancy-para-container">
            <div class="team-fancy-experience">
              <h3>{{ props.fancyItem.experience ? '經歷' : '獲獎經歷' }}</h3>
              <p>
                {{ experienceTxt }}
              </p>
            </div>
            <div class="team-fancy-award">
              <h3>{{ props.fancyItem.awardSec ? '　' : '獲獎經歷' }}</h3>
              <p>
                {{ awardSecTxt }}
              </p>
            </div>
          </div>
          <div class="team-fancy-line"></div>
        </div>
        <div class="team-fancy-content">
          <h3>代表作品</h3>
          <div class="team-fancy-swiper">
            <Swiper
              :speed="1000"
              :slides-per-view="3"
              :spaceBetween="25"
              :navigation="{
                nextEl: '.team-fancy-next',
                prevEl: '.team-fancy-prev',
              }"
              :grabCursor="true"
              :pagination="{
                el: '.team-fancy-pagination',
                dynamicBullets: true,
              }"
              :breakpoints="{
                '1400': {
                  spaceBetween: 70,
                },
              }"
              :modules="[Navigation, Pagination]"
              class="team-fancy-swiper-container"
            >
              <swiper-slide
                class="team-fancy-slide"
                v-for="project in props.fancyItem?.projects"
                :key="project.key"
              >
                <div class="team-fancy-swiper-img" @click.stop="toggleSwiperImg(project.key)">
                  <img :src="project.img" alt="" />
                </div>
                <p>{{ project.p }}</p>
              </swiper-slide>

              <div class="swiper-pagination team-fancy-pagination"></div>
              <div class="swiper-button-prev team-fancy-prev" @click.stop>
                <img src="/src/assets/img/other/Left-arrow.svg" alt="" />
              </div>
              <div class="swiper-button-next team-fancy-next" @click.stop>
                <img src="/src/assets/img/other/Right-arrow.svg" alt="" /></div
            ></Swiper>
          </div>
        </div>
      </div>
      <button class="team-fancy-close" @click.stop="handleClick">
        <img src="/src/assets/img/team/fancy-close.svg" alt="" />
      </button>
      <FadeIn>
        <!-- 輪播彈跳頁面 -->
        <div class="team-fancy-bump-box" v-if="bumpData">
          <div class="team-fancy-bump-box-img"><img :src="bumpData.img" alt="" /></div>
          <span class="team-fancy-bump-box-para">
            <div class="team-fancy-bump-box-squre"></div>
            <p>{{ bumpData.p }}</p>
          </span>
          <button class="bump-close" @click.stop="toggleSwiperImg()">
            <img src="/src/assets/img/team/fancy-close.svg" alt="" />
          </button>
        </div>
      </FadeIn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import FadeIn from '../transition/FadeIn.vue'
import '@/assets/scss/brand/team-fancybox.scss'

const props = defineProps(['fancyItem'])

const emits = defineEmits(['handle-fancy'])

const bumpData = ref<{ key: string; p: string; img: string } | null>(null)

//有人沒有經歷，只有獲獎經歷
const experienceTxt = computed(() => {
  return props.fancyItem.experience ? props.fancyItem.experience : props.fancyItem.award
})

//有人的獲獎經歷有兩段，所以有的話會加上去
const awardSecTxt = computed(() => {
  return props.fancyItem.awardSec ? props.fancyItem.awardSec : props.fancyItem.award
})

//內頁不顯示menu
const zIndexComputed = computed(() => {
  return bumpData.value ? 'z-15' : ''
})

const handleClick = () => {
  emits('handle-fancy')
}

const toggleSwiperImg = (val?: string) => {
  if (!val) return (bumpData.value = null)
  const data = props.fancyItem.projectInners.find(
    (item: { key: string; p: string; img: string }) => item.key === val,
  )
  if (data) bumpData.value = data
}

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.25 })
  tl.from('.team-fancy-left', {
    opacity: 0,
    duration: 2,
  }).from(
    '.team-fancy-title,.team-fancy-para,.team-fancy-content',
    {
      x: '15%',
      opacity: 0,
      stagger: 0.5,
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
