<template>
  <div class="life-fancybox">
    <div class="life-swiper">
      <Swiper
        :speed="1000"
        :slides-per-view="1"
        :spaceBetween="25"
        :navigation="{
          prevEl: '.life-swiper-prev',
          nextEl: '.life-swiper-next',
        }"
        :modules="[Navigation]"
        class="life-swiper-main"
      >
        <swiper-slide v-for="item in props.fancyItem" :key="item.key" class="life-swiper-item">
          <img :src="item.image" />
          <div class="life-swiper-text">
            <p>{{ item.txt }}</p>
            <div class="life-swiper-line"></div>
          </div> </swiper-slide
      ></Swiper>
      <div class="life-swiper-nav">
        <div class="swiper-button-prev life-swiper-prev">
          <img src="/src/assets/img/other/Left-arrow.svg" alt="" />
        </div>
        <div class="swiper-button-next life-swiper-next">
          <img src="/src/assets/img/other/Right-arrow.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="life-fancy-button" @click.stop="closeClick">
      <img src="/src/assets/img/other/X.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import '@/assets/scss/life/life-fancybox.scss'

const props = defineProps(['fancyItem'])

const emits = defineEmits(['show-fancybox'])

const closeClick = () => {
  emits('show-fancybox')
}

onMounted(() => {
  console.log(props.fancyItem)
})
</script>

<style scoped></style>
