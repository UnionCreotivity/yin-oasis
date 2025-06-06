<template>
  <FancyContainer>
    <FlexRow class="lock-item">
      <template #left>
        <div class="lock-item-left">
          <div class="left-traingle">
            <img src="/src/assets/img/feature/left-triangle@2x.webp" alt="" />
          </div>
          <div class="lock-item-left-container">
            <div class="lock-item-left-icon">
              <img src="/src/assets/img/feature/電子鎖/電子鎖icon@2x.webp" alt="" />
            </div>
            <div class="lock-item-video">
              <video
                src="/src/assets/img/feature/電子鎖/L396 指紋辨識智慧電子鎖｜WAFERLOCK 維夫拉克 - WAFERLOCK (1080p, h264).mp4"
                autoplay
                muted
                loop
              ></video>
            </div>
          </div>
        </div>
      </template>
      <template #right>
        <div class="lock-item-right">
          <div class="lock-item-para">
            <img src="/src/assets/img/feature/電子鎖/電子鎖文字@2x.webp" alt="" />
          </div>
        </div>
        <MenuInFeature :listTag="props.listTag" />
        <div class="close" @click="handleFeatureTag">
          <img src="/src/assets/img/team/fancy-close.svg" alt="" />
        </div>
      </template>
    </FlexRow>
  </FancyContainer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import FancyContainer from '../UI/FancyContainer.vue'
import FlexRow from '../UI/FlexRow.vue'
import MenuInFeature from '../menu/MenuInFeature.vue'

const props = defineProps(['listTag'])

const emits = defineEmits(['handle-feature-tag'])

const handleFeatureTag = () => {
  emits('handle-feature-tag')
}

const gsapInit = () => {
  const tl = gsap.timeline({})
  tl.from('.lock-item-video', {
    x: '-20%',
    opacity: 0,
    duration: 1,
  }).from(
    '.lock-item-para',
    {
      x: '20%',
      opacity: 0,
      duration: 1,
    },
    '<+0.25',
  )
}

onMounted(() => {
  gsapInit()
})
</script>

<style lang="scss" scoped>
.lock-item {
  height: 100%;
  gap: 5vw;
  .left-traingle {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 64.5%;
  }
  .lock-item-left-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
  .lock-item-left-icon {
    position: relative;
    width: 18.5%;
    margin-bottom: 5%;
    z-index: 1;
  }
  .lock-item-video {
    position: relative;
    width: 50.5vw;
    z-index: 1;
  }
  .lock-item-right {
    .lock-item-para {
      position: relative;
      width: 34.75vw;
      z-index: 1;
    }
  }
  .close {
    position: absolute;
    right: 3vw;
    top: 45%;
    width: 3.25vw;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 2;
  }
}
</style>
