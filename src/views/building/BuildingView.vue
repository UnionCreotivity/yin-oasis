<template>
  <ViewFixed id="building-view">
    <router-view></router-view>
  </ViewFixed>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ViewFixed from '@/components/view-fixed/ViewFixed.vue'
</script>

<style lang="scss">
#building-view {
  .menu-icon-container {
    .menu-right {
      background-color: #5f8081;
    }
  }
}
</style>
