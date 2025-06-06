<template>
  <FancyContainer>
    <FlexRow class="spc-item">
      <template #left>
        <div class="left-traingle">
          <img src="/src/assets/img/feature/left-triangle@2x.webp" alt="" />
        </div>
        <div class="spc-item-left">
          <img src="/src/assets/img/feature/spc地板/spc地板圖片@2x.webp" alt="" />
        </div>
      </template>
      <template #right>
        <div class="spc-item-right">
          <div class="spc-item-para">
            <img src="/src/assets/img/feature/spc地板/spc地板文字@2x.webp" alt="" />
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
  tl.from('.spc-item-left', {
    x: '-20%',
    opacity: 0,
    duration: 1,
  }).from(
    '.spc-item-para',
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

<style lang="scss">
.spc-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  .flex-left {
    position: relative;
    display: flex;
    align-items: center;
    width: 57%;
    height: 100%;
  }
  .spc-item-left {
    position: relative;
    width: 100%;
    margin-left: 3%;
    z-index: 1;
  }
  .flex-right {
    width: 37%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .spc-item-right {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    .spc-item-para {
      position: relative;
      width: 98%;
      margin-bottom: 5%;
      z-index: 1;
    }
  }
  .left-traingle {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 113%;
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
    @media screen and (max-width: 1400px) {
      top: 46%;
    }
  }
}
</style>
