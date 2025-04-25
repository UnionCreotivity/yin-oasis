<template>
  <div class="floor-plan-inner-fancybox" @click.stop="handleBack">
    <div class="floor-plan-inner-fancybox-1" v-if="props.boxContent?.tag !== '1f'">
      <div
        class="floor-plan-inner-fancybox-left"
        :class="[show ? 'plan-inner-fancybox-left-hide' : '']"
      >
        <h1>{{ props.boxContent.name }}</h1>
        <div class="floor-plan-inner-fancybox-left-item-1">
          <div>傢俱配置圖</div>
          <div class="floor-plan-inner-fancybox-left-item-1-line"></div>
        </div>
        <div class="floor-plan-inner-fancybox-left-item-2">AESTHETICS FLOOR PLAN</div>
      </div>
      <div
        class="floor-plan-inner-fancybox-right"
        :class="[show ? 'plan-inner-fancybox-zIndex' : '']"
      >
        <ScaleDrag
          :max-ratio="2"
          :init="{ x: -400, y: -100 }"
          @hide-text="hideLeft"
          @show-text="showLeft"
          @watch-scale="watchScale"
        >
          <div class="container">
            <div class="anchor-area">
              <div class="anchor-area-map">
                <img class="imgBoxMap" :src="props.boxContent.image" />
              </div>
            </div>
          </div>
        </ScaleDrag>
      </div>
    </div>

    <div
      v-else
      class="floor-plan-inner-fancybox-2"
      :class="[
        props.boxContent?.name === '梯廳B' ? 'floor-plan-inner-fancybox-2-spec' : '',
        show ? 'plan-inner-fancybox-left-hide' : '',
      ]"
    >
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
          <p>3D示意圖</p>
        </swiper-slide>

        <div class="swiper-button-prev floor-plan-prev" @click.stop="handleClick"></div>
        <div class="swiper-button-next floor-plan-next" @click.stop="handleClick"></div>
      </Swiper>
    </div>
    <!-- <div
      class="floor-plan-inner-fancybox-left-bottom"
      :class="[show ? 'plan-inner-fancybox-left-hide' : '']"
    >
      <img src="../../assets/img/floor-plan/floor-plan-left-bottom.png" />
    </div> -->
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

const hideLeft = () => {
  show.value = true
}

const showLeft = () => {
  show.value = false
}

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
