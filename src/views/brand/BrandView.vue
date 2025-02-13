<template>
  <ViewFixed id="brand-view">
    <router-view></router-view>
  </ViewFixed>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ViewFixed from '@/components/view-fixed/ViewFixed.vue'
</script>

<style>
#brand-view {
  background: linear-gradient(to top, #445e61 0%, #547273 26%, #5f8081 79%, #97a392 100%);
}
</style>
