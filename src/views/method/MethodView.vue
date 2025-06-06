<template>
  <ViewFixed id="method-view">
    <router-view></router-view>
  </ViewFixed>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ViewFixed from '@/components/view-fixed/ViewFixed.vue'
</script>

<style scoped>
#method-view {
  overflow: hidden;
}
</style>
