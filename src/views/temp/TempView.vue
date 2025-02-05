<template>
  <article id="temp-view">
    <div class="temp-view-main">
      <img src="../../assets/img/temp/temp-inner-bg@2x.webp" alt="" />
    </div>
    <Menu />
    <FullScreen />
  </article>
</template>

<script setup lang="ts">
import Menu from '@/components/menu/Menu.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import '@/assets/scss/temp/temp-view.scss'
</script>

<style scoped></style>
