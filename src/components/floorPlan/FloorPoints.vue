<template>
  <div
    class="floor-point"
    :class="props.className"
    @click.stop="
      () => {
        emits('handle-click', props.name)
      }
    "
  >
    <div class="floor-green-point" v-if="props.name">
      <p>{{ props.name }}</p>
      <div className="radiation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
    <div
      class="floor-red-point"
      :class="props.className"
      @click.stop="handleClick()"
      v-else-if="props.swiperTag"
    >
      <div class="floor-red-point-img">
        <img src="../../assets/img/floor-plan/point.svg" />
      </div>
      <div className="radiation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <Teleport to="body">
        <FadeIn>
          <div class="floor-roof-swiper-container" @click.stop="clearBoxClick" v-if="boxContent">
            <swiper
              :speed="1000"
              :slides-per-view="1"
              :space-between="50"
              :navigation="{
                nextEl: '.floor-roof-swiper-next',
                prevEl: '.floor-roof-swiper-prev',
              }"
              :modules="[Navigation]"
              class="floor-roof-swiper"
            >
              <swiper-slide v-for="item in props?.content" :key="item.key">
                <div class="floor-roof-swiper-content" :class="item.key">
                  <img :src="item.image" />
                </div>
              </swiper-slide>
            </swiper>
            <div class="floor-roof-swiper-top">
              <img src="../../assets/img/floor-plan/place/情境示意圖.svg" />
            </div>
            <div class="floor-roof-swiper-bottom">
              <img src="../../assets/img/floor-plan/floor-plan-left-bottom.png" />
            </div>
            <div class="swiper-button-next floor-roof-swiper-next" @click.stop=""></div>
            <div class="swiper-button-prev floor-roof-swiper-prev" @click.stop=""></div>
          </div>
        </FadeIn>
      </Teleport>
    </div>
    <div
      class="floor-red-point"
      :class="[props.tag === props.listTag ? 'floor-red-start' : 'floor-red-stop']"
      @mouseenter="hoverFn"
      @mouseleave="outFn"
      @click.stop="
        () => {
          emits('handle-click', props.fName)
        }
      "
      v-else
    >
      <div class="floor-red-point-img">
        <img src="../../assets/img/floor-plan/point.svg" />
      </div>
      <div className="radiation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import FadeIn from '../transition/FadeIn.vue'
import '@/assets/scss/building/floor-points.scss'

const props = defineProps(['className', 'name', 'fName', 'tag', 'listTag', 'content', 'swiperTag'])

const emits = defineEmits(['hover-list-handle', 'out-list-handle', 'handle-click'])

const boxContent = ref(false)

const hoverFn = () => {
  emits('hover-list-handle', props.tag)
}

const outFn = () => {
  emits('out-list-handle')
}

const handleClick = () => {
  boxContent.value = true
}

const clearBoxClick = () => {
  boxContent.value = false
}
</script>

<style scoped></style>
