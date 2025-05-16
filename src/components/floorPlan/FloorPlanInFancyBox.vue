<template>
  <div
    class="floor-plan-inner-fancybox"
    :class="props.boxContent?.className"
    @click.stop="handleBack"
  >
    <!-- 1、2樓的內頁可能會有輪播 -->
    <div
      class="floor-plan-inner-fancybox-1"
      v-if="props.boxContent?.tag !== '1f' && props.boxContent?.tag !== '2f'"
    >
      <div class="floor-plan-inner-fancybox-left">
        <h1>{{ props.boxContent.name }}</h1>
        <div class="floor-plan-inner-fancybox-left-item-1">傢俱配置圖</div>
        <div class="floor-plan-inner-fancybox-left-item-2">FLOOR PLAN</div>
        <div class="floor-plan-inner-fancybox-left-item-1-line"></div>
        <div class="floor-plan-inner-fancybox-left-item-inner">
          <img :src="props.boxContent?.innerImage" alt="" />
        </div>
      </div>
      <div class="floor-plan-inner-fancybox-right">
        <ScaleDrag :max-ratio="2" :init="{ x: 0, y: 0 }" @watch-scale="watchScale">
          <div class="container">
            <div class="anchor-area">
              <div class="anchor-area-map">
                <img class="imgBoxMap" :src="props.boxContent.image" />
              </div>
            </div>
          </div>
        </ScaleDrag>
      </div>
      <div class="floor-plan-inner-fancybox-left-bottom">
        <img src="@/assets/img/floor-plan/new/left-bottom-cloud@2x.webp" />
      </div>
    </div>
    <div v-else class="floor-plan-inner-fancybox-2">
      <Swiper
        :speed="1000"
        :slides-per-view="1"
        :navigation="{
          nextEl: '.floor-plan-next',
          prevEl: '.floor-plan-prev',
        }"
        :modules="[Navigation]"
        class="floor-plan-inner-fancybox-2-swiper"
      >
        <swiper-slide v-for="item in props.boxContent?.image" :key="item.id">
          <img :src="item.img" />
          <p>
            <span>{{ item.name }}</span
            >3D示意圖
          </p>
        </swiper-slide>

        <div class="swiper-button-prev floor-plan-prev" @click.stop="handleClick"></div>
        <div class="swiper-button-next floor-plan-next" @click.stop="handleClick"></div>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import ScaleDrag from '../scale-drag/ScaleDrag.vue'
import '@/assets/scss/building/floor-plan-in-fancybox.scss'

const props = defineProps(['boxContent'])

const emits = defineEmits(['remove-tag'])

const show = ref(false)

//偵測圖片是否縮放
const isScale = ref(false)

const handleClick = (e: MouseEvent) => {
  e.stopPropagation()
}

const handleBack = () => {
  if (isScale.value) return
  emits('remove-tag')
}

//偵測縮放
const watchScale = (val: boolean) => {
  isScale.value = val
}
</script>

<style scoped></style>
